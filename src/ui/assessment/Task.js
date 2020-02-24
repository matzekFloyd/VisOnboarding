import React, {PureComponent} from 'react';
import {sanitizePublicPath} from "../../util/helpers";
import PropTypes from 'prop-types';

export default class Task extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            answers: [false, false, false, false],
            success: null,
            confirmed: false,
            startTime: null,
            endTime: null,
            time: null
        };
        this.config = props.config;
        this.identifier = props.config.identifier;
        this.index = props.index;
    }

    componentDidMount() {
        this.setState({startTime: new Date()})
    }

    initOptions() {
        let html = [];
        for (let i = 0; i < this.config.options.length; i++) {
            html.push(<Option key={"task_option_" + i} text={this.config.options[i].text}
                              onClick={(e) => this.setAnswer(e, i)}/>);
        }
        return html;
    }

    setAnswer(event, index) {
        this.setState({confirmed: false});
        let answers = this.state.answers;
        answers[index] = event.target.checked;
        this.setState({answers: {...answers}});
    }

    confirm() {
        let isCorrect = true;
        for (let i = 0; i < this.config.options.length; i++) {
            if (this.state.answers[i] !== this.config.options[i].correct) isCorrect = false;
        }
        let startTime = this.state.startTime;
        let endTime = new Date();
        let newTime = (endTime.getTime() - startTime) / 1000;
        this.setState({success: isCorrect, endTime: endTime, time: newTime, confirmed: true});
    }

    next() {
        if (this.state.confirmed) {
            this.props.taskCompleted(this.index, this.identifier, this.state.success, this.state.time);
        }
    }

    render() {
        return (<div className={"flex h-screen ml-32 mr-32 task-container"}>
                <div className={"w-2/4 m-auto mr-20 border border-solid"}>
                    <TaskImage id={this.config.image.id}
                               src={sanitizePublicPath("static/" + this.config.image.src)}/>
                </div>
                <div className={"w-2/4 m-auto ml-20 border border-solid"}>
                    <div className={"p-3"}>
                        <TaskHeading index={this.index} text={this.config.task}/>
                        {this.initOptions()}
                        <div className={"flex mt-8 ml-8"}>
                            <ProgressBar index={this.index}/>
                            <div className={"w-2/4"}>
                                <NextBtn confirmed={this.state.confirmed} onClick={() => this.next()}/>
                                <ConfirmBtn confirmed={this.state.confirmed} onClick={() => this.confirm()}/>
                            </div>
                        </div>
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

const TaskHeading = React.memo(function TaskHeading(props) {
    let txt = props.index + 1 + ". " + props.text;
    return <p className={"task-heading"}>
        <span dangerouslySetInnerHTML={{__html: txt}}/>
        <TaskHeadingInfo/>
    </p>
});
TaskHeading.propTypes = {
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

const TaskHeadingInfo = React.memo(function TaskHeadingInfo() {
    return <span className={"ml-2 text-sm"}><img src={sanitizePublicPath("static/error_outline-24px.svg")}
                                                 alt={""}
                                                 className={"text-green-800"}/>Multiple answers possible!</span>;
});

const Option = React.memo(function Option(props) {
    return <div className={"option-container ml-12 mt-10 mb-2"}>
        <label className={"cursor-pointer p-2 hover:bg-blue-500 hover:text-white"}>
            <input type="checkbox" className="form-checkbox h-5 w-5 bg-gray-500 text-green-500"
                   onClick={props.onClick}/>
            <span className="ml-2 " dangerouslySetInnerHTML={{__html: props.text}}/>
        </label>
    </div>
});
Option.propTypes = {
    onClick: PropTypes.func.isRequired,
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
    let btnActive = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right";
    let btnDisabled = "bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded opacity-50 cursor-not-allowed float-right";
    return <button className={props.confirmed ? btnActive : btnDisabled} onClick={props.onClick}>Next</button>;
});
NextBtn.propTypes = {
    confirmed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

const ConfirmBtn = React.memo(function ConfirmBtn(props) {
    let btnActive = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right";
    let btnConfirmed = "bg-green-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right";
    return <button className={props.confirmed ? "mr-4 " + btnConfirmed : "mr-4 " + btnActive}
                   onClick={props.onClick}>{props.confirmed ? "Confirmed!" : "Confirm Answer"}
    </button>
});
ConfirmBtn.propTypes = {
    confirmed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};