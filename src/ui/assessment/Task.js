import React, {PureComponent} from 'react';
import {sanitizePublicPath} from "../../util/helpers";
import PropTypes from 'prop-types';
import Question from "./Question";

const REQUIRE_SUB_QUESTION_TIME_LIMIT = 120;

export default class Task extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            success: false,
            subSuccess: null,
            askSubQuestion: false
        };
        this.config = props.config;
        this.identifier = props.config.identifier;
        this.index = props.index;
    }

    resolveQuestion(success, requiredTime) {
        let hasSubQuestionConfig = this.config.subQuestion !== null && typeof this.config.subQuestion !== "undefined";
        if (!hasSubQuestionConfig) {
            this.resolveTask(success, requiredTime);
            return;
        }

        if (this.state.askSubQuestion) {
            this.setState({subSuccess: success});
            this.resolveTask(success, requiredTime);
        } else {
            if (!success || (success && requiredTime < REQUIRE_SUB_QUESTION_TIME_LIMIT)) {
                this.resolveTask(success, requiredTime);
            } else {
                this.setState({askSubQuestion: true});
            }
        }
    }

    resolveTask(success, requiredTime, skipped = false) {
        return this.setState({
            askSubQuestion: false,
            success: success,
            endTime: new Date().getTime(),
            time: requiredTime
        }, () => {
            this.props.taskCompleted(this.index, this.identifier, this.state.success, this.state.subSuccess, this.state.time, skipped);
        });
    }

    render() {
        let question = <Question
            resolveQuestion={(success, requiredTime) => this.resolveQuestion(success, requiredTime)}
            resolveTask={(success, requiredTime, skipped) => this.resolveTask(success, requiredTime, skipped)}
            config={this.state.askSubQuestion ? this.config.subQuestion : this.config}
            isSubQuestion={this.state.askSubQuestion} index={this.index}/>;

        return (<div className={"flex h-screen ml-6 mr-32 task-container"}>
                <div className={"w-3/4 m-auto mr-6 border border-solid"}>
                    <TaskImage id={this.config.image.id}
                               src={sanitizePublicPath("static/" + this.config.image.src)}/>
                </div>
                <div className={"w-1/4 m-auto ml-20 border border-solid"}>
                    <div className={"p-3"}>
                        {question}
                    </div>
                </div>
            </div>
        );
    }
}
Task.propTypes = {
    index: PropTypes.number.isRequired,
    taskCompleted: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired
};

const TaskImage = React.memo(function TaskImage(props) {
    return <img id={props.id} src={props.src} alt={props.id}/>
});
TaskImage.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};