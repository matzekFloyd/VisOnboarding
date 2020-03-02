import React from 'react';
import HighchartsReact from "highcharts-react-official";
import {Empty} from "../components";
import Chart from "../Chart";

export default class Gantt extends Chart {


    constructor(props, context) {
        super(props, context);
        this.state = {config: null};
    }

    async componentDidMount() {
        let config = await this.getCfg();
        let screenRes = {width: window.screen.availWidth, height: window.screen.availHeight};
        if (screenRes.height < 1400) config.chart.height = 600;
        if (screenRes.height >= 1400) config.chart.height = 900;
        this.setState({config: config});
    }

    async getCfg() {
        let cfg;
        switch (this.props.activeStep) {
            case 1:
                cfg = await import("src/config/onboarding/" + this.props.identifier + "/charts/1_STEP").then((mod) => mod.STEP_1);
                break;
            case 2:
                cfg = await import("src/config/onboarding/" + this.props.identifier + "/charts/2_STEP").then((mod) => mod.STEP_2);
                break;
            case 3:
                cfg = await import("src/config/onboarding/" + this.props.identifier + "/charts/3_STEP").then((mod) => mod.STEP_3);
                break;
            case 4:
                cfg = await import("src/config/onboarding/" + this.props.identifier + "/charts/4_STEP").then((mod) => mod.STEP_4);
                break;
            case 5:
                cfg = await import("src/config/onboarding/" + this.props.identifier + "/charts/5_STEP").then((mod) => mod.STEP_5);
                break;
            case 6:
                cfg = await import("src/config/onboarding/" + this.props.identifier + "/charts/6_STEP").then((mod) => mod.STEP_6);
                break;
        }
        return cfg;
    }

    chartLoadedCallback() {
        this.props.chartLoadedCallback();
    }

    render() {
        const {config} = this.state;
        return (
            <div className={"chart"}>
                {config ?
                    <HighchartsReact callback={() => this.chartLoadedCallback()} highcharts={this.Highcharts}
                                     options={config} constructorType={'ganttChart'}/> :
                    <Empty/>}
            </div>
        );
    }
}