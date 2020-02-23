import React, {PureComponent} from 'react';
import {
    TASK_DATA_SET_VISUALISATION,
    TASK_GANTT_PROJECT_MANAGEMENT,
    TASK_GANTT_RESOURCE_MANAGEMENT, TASK_IRREGULAR_TIME_SERIES, TASK_LINE_TIME_SERIES,
} from "../../../constants";
import {GANTT_PROJECT_MANAGEMENT} from "../../config/assessment/1_GANTT_PROJECT_MANAGEMENT";
import {GANTT_RESOURCE_MANAGEMENT} from "../../config/assessment/2_GANTT_RESOURCE_MANAGEMENT";
import {DATA_SET_VISUALISATION} from "../../config/assessment/3_DATASET_VISUALISATION";
import {LINE_TIME_SERIES} from "../../config/assessment/4_LINE_TIME_SERIES";
import {IRREGULAR_TIME_SERIES} from "../../config/assessment/5_IRREGULAR_TIME_SERIES";
import {Empty} from "../components";
import Router from "next/router";
import {URL} from "../../../constants";
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import {AssessmentCompletedScreen} from "./AssessmentCompletedScreen";

const Task = dynamic(() => import('./Task'));

export default class AssessmentManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 0,
            finishedTasks: [],
            assessmentCompleted: false
        };
    }

    addCompletedTask(index, identifier, success, time) {
        let newIndex = index + 1;
        this.setState({current: newIndex}, () => {
            this.state.finishedTasks.push({task: identifier, success: success, time: time});
            if (newIndex >= this.props.tasks.length) {
                //TODO
                this.setState({assessmentCompleted: true}, () => {
                    // let to = URL.onboarding.basic;
                    // let rand = Math.floor(Math.random() * 100);
                    // let href = to + "?res=" + rand.toString();
                    // Router.push(href, href, {}).then(() => console.log("Redirecting: ", to));
                });
            }
        });
    }

    redirect() {
        let to = URL.onboarding.basic;
        let rand = Math.floor(Math.random() * 100);
        let href = to + "?res=" + rand.toString();
        Router.push(href, href, {}).then(() => console.log("Redirecting: ", to));
    }

    getConfig(identifier) {
        switch (identifier) {
            case TASK_GANTT_PROJECT_MANAGEMENT:
                return GANTT_PROJECT_MANAGEMENT;
            case TASK_GANTT_RESOURCE_MANAGEMENT:
                return GANTT_RESOURCE_MANAGEMENT;
            case TASK_DATA_SET_VISUALISATION:
                return DATA_SET_VISUALISATION;
            case TASK_LINE_TIME_SERIES:
                return LINE_TIME_SERIES;
            case TASK_IRREGULAR_TIME_SERIES:
                return IRREGULAR_TIME_SERIES;
        }
    }

    task() {
        let html = [];
        for (let i = 0; i < this.props.tasks.length; i++) {
            let task = this.state.current === i ? <Task key={"task_" + i} index={i}
                                                        taskCompleted={(index, taskIdentifier, success, time) => this.addCompletedTask(index, taskIdentifier, success, time)}
                                                        config={this.getConfig(this.props.tasks[i])}/> :
                <Empty key={"task_" + i}/>;
            html.push(task);
        }
        return html;
    }

    render() {
        return (this.state.assessmentCompleted ?
            <AssessmentCompletedScreen finishedTasks={this.state.finishedTasks} onClick={() => this.redirect()}/> : this.task());
    }

}
AssessmentManager.propTypes = {
    tasks: PropTypes.array.isRequired
};