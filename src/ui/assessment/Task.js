import React, {PureComponent} from 'react';
import equal from "fast-deep-equal";

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
        for (let i = 0; i < this.config.tasks.length; i++) {
            html.push(
                <label key={"lbl_task_" + i}>
                    <input type="checkbox" className="form-checkbox text-indigo-600"
                           onClick={(e, index) => this.setAnswer(e, index)}/>
                    <span className="ml-2">{this.config.tasks[i].question}</span>
                </label>
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
        for (let i = 0; i < this.config.tasks.length; i++) {
            if (this.state.answers[i] !== this.config.tasks[i].correct) isCorrect = false;
        }
        this.setState({success: isCorrect}, () => {
            this.props.taskCompleted(this.identifier, isCorrect);
        });
    }


    render() {
        return (<div className={this.state.active ? "block" : "hidden"}>
                <div className={"flex "}>
                    <div className={"w-3/4 h-auto"}>
                        {this.initStatements()}
                        <button onClick={() => this.evaluate()}>Evaluate</button>
                    </div>
                    <div className={"w-1/4"}>
                    </div>
                </div>
            </div>
        );
    }

}