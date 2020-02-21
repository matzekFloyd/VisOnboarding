import React, {PureComponent} from 'react';
import equal from "fast-deep-equal";
import {sanitizePublicPath} from "../../util/helpers";

export default class Task extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            active: props.active,
            answers: [false, false, false, false],
            success: null
        };
        this.config = props.config;
        this.identifier = props.config.identifier;
        this.index = props.index;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.active, prevProps.active)) {
            this.setState({active: this.props.active});
        }
    }

    setSelected(identifier) {
        this.setState({selected: identifier});
    }

    initStatements() {
        let html = [];
        for (let i = 0; i < this.config.options.length; i++) {
            html.push(
                <div key={"task_input_" + i} className={"mt-2 mb-2"}>
                    <label>
                        <input type="checkbox" className="form-checkbox text-indigo-600"
                               onClick={(e, index) => this.setAnswer(e, index)}/>
                        <span className="ml-2">{this.config.options[i].text}</span>
                    </label>
                </div>
            )
        }
        return html;
    }

    setAnswer(event, index) {
        let answers = this.state.answers;
        answers[index] = event.target.checked;
        this.setState({answers: {...answers}});
    }

    evaluate() {
        let isCorrect = true;
        for (let i = 0; i < this.config.options.length; i++) {
            if (this.state.answers[i] !== this.config.options[i].correct) isCorrect = false;
        }
        this.setState({success: isCorrect}, () => {
            this.props.taskCompleted(this.index, this.identifier, isCorrect);
        });
    }


    render() {
        return (<div
                className={this.state.active ? "flex justify-content task-container block" : "flex task-container hidden"}>
                <div className={"w-3/4 h-auto"}>
                    <div className={"flex justify-content"}>
                        <img src={sanitizePublicPath("static/" + this.config.image)} alt={"task_img"}/>
                    </div>
                </div>
                <div className={"w-1/4 h-auto"}>
                    <div className={"flex-1"}>
                        {this.config.task}
                        {this.initStatements()}
                        <button onClick={() => this.evaluate()}>Next</button>
                    </div>
                </div>
            </div>
        );
    }

}