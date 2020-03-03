import React from 'react';
import HighchartsReact from "highcharts-react-official";
import {Empty} from "../components";
import Chart from "../Chart";

export default class Gantt extends Chart {


    constructor(props, context) {
        super(props, context);
        this.state = {config: null};
    }

    componentDidMount() {
        let config = this.props.config;
        let screenRes = {width: window.screen.availWidth, height: window.screen.availHeight};
        if (screenRes.height < 1400) config.chart.height = 550;
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