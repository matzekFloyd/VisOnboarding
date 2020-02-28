import React, {PureComponent} from 'react';
import {GANTT_PROJECT_MANAGEMENT} from "src/config/assessment/1_GANTT_PROJECT_MANAGEMENT";
import {GANTT_RESOURCE_MANAGEMENT} from "src/config/assessment/2_GANTT_RESOURCE_MANAGEMENT";
import {DATA_SET_VISUALISATION} from "src/config/assessment/3_DATASET_VISUALISATION";
import {LINE_TIME_SERIES} from "src/config/assessment/4_LINE_TIME_SERIES";
import {IRREGULAR_TIME_SERIES} from "src/config/assessment/5_IRREGULAR_TIME_SERIES";
import {Empty} from "../components";
import Router from "next/router";
import {URL} from "../../../constants";
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import {AssessmentCompletedScreen} from "./AssessmentCompletedScreen";
import {
    TASK_DATA_SET_VISUALISATION,
    TASK_GANTT_PROJECT_MANAGEMENT,
    TASK_GANTT_RESOURCE_MANAGEMENT, TASK_IRREGULAR_TIME_SERIES, TASK_LINE_TIME_SERIES
} from "../../util/assessment/constants";

const Task = dynamic(() => import('./Task'));

export default class AssessmentManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 0,
            finishedTasks: [],
            assessmentCompleted: false,
            pointsTotal: 0
        };
        this.enableAssessmentCompletedScreen = false;
    }

    addCompletedTask(index, identifier, success, subSuccess, time, skipped) {
        let newIndex = index + 1;
        this.setState({current: newIndex}, () => {
            let points = this.calculatePoints(identifier, success, subSuccess, time);
            let result = {task: identifier, success: success, time: time, points: points, skipped: skipped};
            this.state.finishedTasks.push(result);
            if (newIndex >= this.props.tasks.length) {
                let pointsTotal = 0;
                for (let i = 0; i < this.state.finishedTasks.length; i++) {
                    pointsTotal += this.state.finishedTasks[i].points;
                }
                this.setState({assessmentCompleted: true, pointsTotal: pointsTotal}, () => {
                    if (!this.enableAssessmentCompletedScreen) this.redirectToOnboarding();
                });
            }
        });
    }

    calculatePoints(identifier, success, subSuccess, time) {
        let points;
        let minutes = Math.floor(time / 60);
        let subtractMinutes = (points, minutes) => {
            if (minutes >= points) return 0;
            let pts = points - minutes;
            return pts <= 0 ? 0 : pts;
        };

        let full_points = this.getConfig(identifier).points;
        if (subSuccess === null) {
            success ? points = full_points : points = 0;
        } else {
            subSuccess ? points = full_points - 5 : points = 0;
        }

        return subtractMinutes(points, minutes);
    }

    redirectToOnboarding() {
        let href = URL.onboarding + "?pts=" + this.state.pointsTotal;
        Router.push(href, href, {}).then(() => console.log("Redirecting: ", href));
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
                                                        taskCompleted={(index, taskIdentifier, success, subSuccess, time, skipped) => this.addCompletedTask(index, taskIdentifier, success, subSuccess, time, skipped)}
                                                        config={this.getConfig(this.props.tasks[i])}/> :
                <Empty key={"task_" + i}/>;
            html.push(task);
        }
        return html;
    }

    render() {
        return (this.state.assessmentCompleted && this.enableAssessmentCompletedScreen ?
            <AssessmentCompletedScreen finishedTasks={this.state.finishedTasks} pointsTotal={this.state.pointsTotal}
                                       onClick={() => this.redirectToOnboarding()}/> : this.task());
    }

}
AssessmentManager.propTypes = {
    tasks: PropTypes.array.isRequired
};