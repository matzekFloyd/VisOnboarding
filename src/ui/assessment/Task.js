import React, {PureComponent} from 'react';
import Chart from "./Chart";
import {GANTT_RESOURCE_MANAGEMENT} from "../../data/assessment/2_GANTT_RESOURCE_MANAGEMENT";

export default class Task extends PureComponent {

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
                <Chart config={GANTT_RESOURCE_MANAGEMENT}/>
                <div>
                    Lorem Ipsum
                </div>
            </div>
        );
    }

}