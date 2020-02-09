import React, {PureComponent} from 'react';
import {JAN_14, JAN_15, JAN_16, JAN_17, JAN_18, JAN_19, JAN_20} from "../../../constants";
import Chart from "./Chart";

const btn_styling = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded";

const DATES = [
    {selector: JAN_14, btnTxt: "14.01.2019"},
    {selector: JAN_15, btnTxt: "15.01.2019"},
    {selector: JAN_16, btnTxt: "16.01.2019"},
    {selector: JAN_17, btnTxt: "17.01.2019"},
    {selector: JAN_18, btnTxt: "18.01.2019"},
    {selector: JAN_19, btnTxt: "19.01.2019"},
    {selector: JAN_20, btnTxt: "20.01.2019"}
];

export default class ChartManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: DATES[0].selector,
        };
    }

    isSelected(identifier) {
        return this.state.selected === identifier;
    }

    setSelected(identifier) {
        this.setState({selected: identifier})
    }

    initChartNav() {
        let html = [];
        for (let i = 0; i < DATES.length; i++) {
            html.push(<button key={"btn_" + DATES[i].selector} className={btn_styling}
                              onClick={() => this.setSelected(DATES[i].selector)}>{DATES[i].btnTxt}</button>)
        }
        return html;
    }

    intCharts() {
        let html = [];
        for (let i = 0; i < DATES.length; i++) {
            html.push(<Chart key={"chart_" + DATES[i].selector} identifier={DATES[i].selector}
                             active={this.isSelected(DATES[i].selector)}/>);
        }
        return html;
    }

    render() {
        return (<div>
                <p>Select the day you want to inspect:
                    {this.initChartNav()}
                </p>
                {this.intCharts()}
            </div>
        );
    }

}