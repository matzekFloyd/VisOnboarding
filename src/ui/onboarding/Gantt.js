import React from 'react';
import HighchartsReact from "highcharts-react-official";
import {Empty} from "../components";
import {STEP_1} from "src/config/onboarding/1_Step";
import {STEP_2} from "src/config/onboarding/2_Step";
import Chart from "../Chart";

export default class Gantt extends Chart {


    constructor(props, context) {
        super(props, context);
        this.state = {config: null};
    }

    componentDidMount() {
        let config = this.props.activeStep % 2 === 0 ? {...STEP_1} : {...STEP_2};
        let screenRes = {width: window.screen.availWidth, height: window.screen.availHeight};

        if (screenRes.height < 1400) config.chart.height = 600;
        if (screenRes.height >= 1400) config.chart.height = 900;

        this.setState({config: config});
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