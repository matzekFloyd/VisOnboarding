import React, {PureComponent} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import {Empty} from "../components";
import {STEP_1} from "src/config/onboarding/1_Step";

//TODO find a way of not having to import all of this highcharts/react dependecies twice -> bundle size increase
export default class Chart extends PureComponent {


    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
        }
        this.state = {config: null};
    }

    componentDidMount() {
        let config = {...STEP_1};
        let screenRes = {width: window.screen.availWidth, height: window.screen.availHeight};

        if (screenRes.height < 1400) config.chart.height = 600;
        if (screenRes.height >= 1400) config.chart.height = 900;

        this.setState({config: config});
    }

    render() {
        const {config} = this.state;
        return (
            <div className={"chart"}>
                {config ? <HighchartsReact highcharts={Highcharts} options={config} constructorType={'ganttChart'}/> :
                    <Empty/>}
            </div>
        );
    }
}