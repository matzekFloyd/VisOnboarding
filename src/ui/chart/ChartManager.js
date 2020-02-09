import React, {PureComponent} from 'react';
import {JAN_14, JAN_15, JAN_16, JAN_17, JAN_18, JAN_19, JAN_20} from "../../../constants";
import Chart from "./Chart";
import {sanitizePublicPath} from "../../util/helpers";

const btn_styling = "chart-nav-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1 w-1/3 h-auto";

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
        let firstRow = [];
        let secondRow = [];

        for (let i = 0; i < DATES.length; i++) {
            let btn = <button key={"btn_" + DATES[i].selector}
                              className={this.state.selected === DATES[i].selector ? btn_styling + " active" : btn_styling}
                              onClick={() => this.setSelected(DATES[i].selector)}>{DATES[i].btnTxt}</button>;
            if (i < 3) {
                firstRow.push(btn)
            } else {
                secondRow.push(btn)
            }
        }
        return <div className={"chart-nav mt-12"}>
            <div className={"flex mb-4"}>
                {firstRow}
            </div>
            <div className={"flex mb-4"}>
                {secondRow}
            </div>
        </div>;
    }

    intCharts() {
        let charts = [];
        for (let i = 0; i < DATES.length; i++) {
            charts.push(<Chart key={"chart_" + DATES[i].selector} identifier={DATES[i].selector}
                               active={this.isSelected(DATES[i].selector)}/>);
        }
        return <div className={"mt-6"}>{charts}</div>;
    }

    render() {
        return (<div>
                <div className={"flex"}>
                    <div className={"w-3/4 h-auto"}>
                        {this.intCharts()}
                    </div>
                    <div className={"w-1/4 h-auto ml-16"}>
                        <img className={"mt-48 image layout"} src={sanitizePublicPath("static/gf_layout.png")}
                             alt="map"/>
                        {this.initChartNav()}
                    </div>
                </div>
            </div>
        );
    }

}