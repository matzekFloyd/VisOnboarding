import React, {PureComponent} from 'react';
import equal from "fast-deep-equal";
import {sanitizePublicPath} from "../../util/helpers";
import {Empty} from "../components";

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

    initOptions() {
        let html = [];
        for (let i = 0; i < this.config.options.length; i++) {
            html.push(
                <div key={"task_input_" + i} className={"option-container ml-12 mt-10 mb-2"}>
                    <label className={"cursor-pointer p-2 hover:bg-blue-500 hover:text-white"}>
                        <input type="checkbox" className="form-checkbox text-indigo-600"
                               onClick={(e, index) => this.setAnswer(e, index)}/>
                        <span className="ml-2 " dangerouslySetInnerHTML={{__html: this.config.options[i].text}}/>
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
                className={this.state.active ? "flex h-screen ml-32 mr-32 task-container block" : "flex task-container hidden"}>
                <div className={"w-2/4 m-auto mr-20"}>
                    {this.config.image.src !== "" ?
                        <img id={this.config.image.id} src={sanitizePublicPath("static/" + this.config.image.src)}
                             alt={this.config.image.id}/> : <Empty/>}
                </div>
                <div className={"w-2/4 m-auto ml-20 border-solid border-2 bg-gray-100"}>
                    <div className={"p-3"}>
                        <strong>{this.index + 1 + ". " + this.config.task}</strong>
                        {this.initOptions()}
                        <br/>
                        <button
                            className={"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right"}
                            onClick={() => this.evaluate()}>Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}