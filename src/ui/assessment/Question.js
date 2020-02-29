import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

export default class Question extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isSubQuestion: props.isSubQuestion,
            answers: [false, false, false, false],
            success: null,
            startTime: null,
            endTime: null,
            time: null
        };
    }

    componentDidMount() {
        this.setState({startTime: new Date()})
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
        let startTime = this.state.startTime;
        return (new Date().getTime() - startTime) / 1000;
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
                    <NextBtn onClick={() => this.next()}/>
                    <SkipBtn onClick={() => this.skip()}/>
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
    return <div className={"option-container ml-6 mt-10 mb-2"}>
        <label className={"cursor-pointer p-2 hover:bg-blue-500 hover:text-white"}>
            <input readOnly={true} checked={props.checked} type="checkbox"
                   className="cursor-pointer form-checkbox h-5 w-5 bg-gray-500 text-green-500"
                   onClick={props.onClick}/>
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
    return <div className="h-5 shadow w-2/4 bg-grey-light mt-2 cursor-default">
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

const NextBtn = React.memo(function NextBtn(props) {
    return <button
        className={"bg-green-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right"}
        onClick={props.onClick}>Next</button>;
});
NextBtn.propTypes = {
    onClick: PropTypes.func.isRequired
};

const SkipBtn = React.memo(function SkipBtn(props) {
    return <button
        className={"mr-4 bg-gray-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right"}
        onClick={props.onClick}>{"Skip"}
    </button>
});
SkipBtn.propTypes = {
    onClick: PropTypes.func.isRequired
};
