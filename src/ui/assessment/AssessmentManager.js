import React, {PureComponent} from 'react';
import Task from "./Task";
import {
    TASK_GANTT_PROJECT_MANAGEMENT,
    TASK_GANTT_RESOURCE_MANAGEMENT,
} from "../../../constants";
import {GANTT_PROJECT_MANAGEMENT} from "../../config/assessment/1_GANTT_PROJECT_MANAGEMENT";
import {GANTT_RESOURCE_MANAGEMENT} from "../../config/assessment/2_GANTT_RESOURCE_MANAGEMENT";

export default class AssessmentManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 0,
            finishedTasks: []
        };
    }

    addCompletedTask(identifier, success) {
        //TODO
        this.setState({current: 1});
    }

    initTasks() {
        let tasks = [];

        for (let i = 0; i < this.props.tasks.length; i++) {
            let config = {};
            switch (this.props.tasks[i]) {
                case TASK_GANTT_PROJECT_MANAGEMENT:
                    config = GANTT_PROJECT_MANAGEMENT;
                    break;
                case TASK_GANTT_RESOURCE_MANAGEMENT:
                    config = GANTT_RESOURCE_MANAGEMENT;
                    break;
            }
            tasks.push(<Task taskCompleted={(taskIdentifier, success) => this.addCompletedTask(taskIdentifier, success)}
                             key={"task_" + i} index={i} config={config}
                             active={this.state.current === i}/>)
        }
        return tasks;
    }

    render() {
        return (<div>
                {this.initTasks()}
            </div>
        );
    }

}