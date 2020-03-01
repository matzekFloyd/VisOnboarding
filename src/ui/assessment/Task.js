import React, {PureComponent} from 'react';
import {sanitizePublicPath} from "src/util/helpers";
import PropTypes from 'prop-types';
import Question from "./Question";

const REQUIRE_SUB_QUESTION_TIME_LIMIT = 120;

export default class Task extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            success: false,
            subSuccess: null,
            askSubQuestion: false,
            height: null
        };
        this.config = props.config;
        this.identifier = props.config.identifier;
        this.index = props.index;
    }

    componentDidMount(){
        let screenRes = {width: window.screen.availWidth, height: window.screen.availHeight};
        let height;
        if (screenRes.height < 1400) height = 800;
        if (screenRes.height >= 1400) height = 1100;
        this.setState({height: height});
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

        let divCss = "flex w-full border border-solid task-container ";
        this.props.active ? divCss += "block" : divCss += "hidden";
        return (<div style={{height: this.state.height + "px"}} className={divCss}>
                <div className={"w-3/4 border ml-12 mr-6 mt-auto mb-auto"}>
                    <TaskImage id={this.config.image.id}
                               src={sanitizePublicPath("static/assessment/" + this.config.image.src)}/>
                </div>
                <div className={"w-1/4 border mt-auto mb-auto mr-12"}>
                    <div className={"p-2"}>
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
    return <div className={"flex content-center"}>
        <div className={"w-9/10 m-auto"}>
            <img id={props.id} src={props.src} alt={props.id}/>
        </div>
    </div>
});
TaskImage.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};