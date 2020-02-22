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

    addCompletedTask(index, identifier, success) {
        let newIndex = index + 1;
        this.setState({current: newIndex}, () => {
            this.state.finishedTasks.push({task: identifier, success: success});
            if (newIndex >= this.props.tasks.length) {
                this.setState({assessmentCompleted: true}, () => {
                    let to = URL.onboarding.basic; //TODO
                    let rand = Math.floor(Math.random() * 100);
                    let href = to + "?res=" + rand.toString();
                    Router.push(href, href, {}).then(() => console.log("Redirecting: ", to));
                });
            }
        });
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

    task(i, identifier) {
        return this.state.current === i ? <Task index={i}
                                                taskCompleted={(index, taskIdentifier, success) => this.addCompletedTask(index, taskIdentifier, success)}
                                                config={this.getConfig(identifier)}
                                                active={this.state.current === i}/> : <Empty/>;
    }

    render() {
        return (
            this.state.assessmentCompleted ? <Empty/> : <div>
                {this.task(0, TASK_GANTT_PROJECT_MANAGEMENT)}
                {this.task(1, TASK_DATA_SET_VISUALISATION)}
                {this.task(2, TASK_IRREGULAR_TIME_SERIES)}
                {this.task(3, TASK_LINE_TIME_SERIES)}
                {this.task(4, TASK_GANTT_RESOURCE_MANAGEMENT)}
            </div>
        );
    }

}