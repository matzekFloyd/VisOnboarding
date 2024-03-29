import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {ButtonCta, ButtonWhite} from "../components";

export default class Question extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isSubQuestion: props.isSubQuestion,
            answers: [false, false, false, false],
            success: null,
            endTime: null,
            time: null
        };
    }

    initOptions() {
        let html = [];
        for (let i = 0; i < this.props.config.options.length; i++) {
            html.push(<Option key={"question_option" + i} text={this.props.config.options[i].text}
                              checked={this.state.answers[i]} onClick={(event) => this.setAnswer(event, i)}/>);
        }
        return html;
    }

    setAnswer(event, index) {
        let answers = this.state.answers;
        answers[index] = event.target.checked;
        this.setState({answers: {...answers}});
    }

    getTimeRequired() {
        return (new Date().getTime() - this.props.startTime) / 1000;
    }

    skip() {
        this.props.resolveTask(false, this.getTimeRequired(), true)
    }

    next() {
        let isCorrect = true;
        for (let i = 0; i < this.props.config.options.length; i++) {
            if (this.state.answers[i] !== this.props.config.options[i].correct) isCorrect = false;
        }
        this.setState({answers: [false, false, false, false]});
        this.props.resolveQuestion(isCorrect, this.getTimeRequired());
    }

    render() {
        return (<div>
            <QuestionHeading index={this.props.index} isSubQuestion={this.props.isSubQuestion}
                             text={this.props.config.question}/>
            {this.initOptions()}
            <div className={"flex mt-8 ml-8"}>
                <ProgressBar index={this.props.index}/>
                <div className={"w-2/4"}>
                    <ButtonCta className={"float-right"} onClick={() => this.next()} title={"Next"}/>
                    <ButtonWhite className={"mr-4 float-right"} onClick={() => this.skip()} title={"Skip"}/>
                </div>
            </div>
        </div>);
    }
}

const QuestionHeading = React.memo(function QuestionHeading(props) {
    let number = props.index + 1;
    props.isSubQuestion ? number += "b. " : number += ". ";
    let txt = number + props.text;
    return <p className={"task-heading"}>
        <span dangerouslySetInnerHTML={{__html: txt}}/>
    </p>
});
QuestionHeading.propTypes = {
    index: PropTypes.number.isRequired,
    isSubQuestion: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

const Option = React.memo(function Option(props) {
    return <div className={"option-container ml-2 mr-2 mt-8 mb-2"}>
        <label className={"inline-flex cursor-pointer p-2 hover:bg-blue-500 hover:text-white rounded"}>
            <input readOnly={true} checked={props.checked} type="checkbox" onClick={props.onClick}
                   className="m-auto cursor-pointer form-checkbox h-6 w-6 bg-gray-400 text-green-500 "/>
            <span className="ml-2 " dangerouslySetInnerHTML={{__html: props.text}}/>
        </label>
    </div>
});
Option.propTypes = {
    onClick: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

const ProgressBar = React.memo(function ProgressBar(props) {
    let width = props.index * 20;
    return <div className="progressbar h-5 shadow w-2/4 bg-grey-light mt-2 cursor-default">
        {props.index === 0 ?
            <div className="rounded h-full text-xs leading-none py-1 text-center text-black w-full">
                <span>{width}%</span>
            </div> :
            <div className="rounded h-full bg-blue-500 text-xs leading-none py-1 text-center text-white"
                 style={{width: width + "%"}}><span>{width}%</span>
            </div>}
    </div>
});
ProgressBar.propTypes = {
    index: PropTypes.number.isRequired,
};
