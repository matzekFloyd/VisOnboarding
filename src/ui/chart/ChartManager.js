import React, {PureComponent} from 'react';
import "../../css/main.scss";
import {JAN_15, JAN_16, JAN_17} from "../../../constants";
import Chart from "./Chart";

export default class ChartManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: JAN_15,
        };
    }

    isSelected(identifier) {
        return this.state.selected === identifier;
    }

    setSelected(identifier) {
        this.setState({selected: identifier})
    }

    render() {
        return (<div>
                <p>Select the day you want to inspect:
                    <button className={"button day"} onClick={() => this.setSelected(JAN_15)}>15.01.2019</button>
                    <button className={"button day"} onClick={() => this.setSelected(JAN_16)}>16.01.2019</button>
                    <button className={"button day"} onClick={() => this.setSelected(JAN_17)}>17.01.2019</button>
                </p>
                <Chart identifier={JAN_15} active={this.isSelected(JAN_15)}/>
                <Chart identifier={JAN_16} active={this.isSelected(JAN_16)}/>
                <Chart identifier={JAN_17} active={this.isSelected(JAN_17)}/>
            </div>
        );
    }

}