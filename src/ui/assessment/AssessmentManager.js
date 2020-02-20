import React, {PureComponent} from 'react';
import Task from "./Task";

export default class AssessmentManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: null
        };
    }

    setSelected(identifier) {
        this.setState({selected: identifier});
    }

    render() {
        return (<div>
                <Task/>
            </div>
        );
    }

}