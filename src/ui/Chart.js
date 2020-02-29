import React, {PureComponent} from 'react';
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import drilldown from "highcharts/modules/drilldown";


export default class Chart extends PureComponent {

    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
            drilldown(Highcharts);
            Highcharts.Tick.prototype.drillable = function () {
            };
        }
    }

}