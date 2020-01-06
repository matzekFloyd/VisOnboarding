import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import "../src/css/main.scss";
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official';
import highchartsGantt from "highcharts/modules/gantt";
import {D_JAN_15} from "../src/data/2019-01-15";

export default class Visualisation extends PureComponent {

    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
        }
    }

    render() {
        return (
            <Layout>
                <h1>Visualisation</h1>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={D_JAN_15}
                    constructorType={'ganttChart'}
                />
            </Layout>
        );
    }

}