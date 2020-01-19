import React, {PureComponent} from 'react';
import "../../css/main.scss";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import {D_JAN_15} from "../../data/2019-01-15";

export default class ChartManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
        }
        this.initialDate = null;
        this.day = 1000 * 60 * 60 * 24;
        this.initData(props.identifier);
    }

    initData(identifier) {
        switch (identifier) {
            case "JAN_15":
                this.chartOptions = D_JAN_15;
                this.initialDate = new Date('2019-01-15T01:00:00');
                this.initialDate = this.initialDate.getTime();
                break;
            case "JAN_16": return null;
            default: return null;
        }
    }

    calc(hours, minutes, seconds) {
        return this.initialDate + 1000 * (hours * 3600 + minutes * 60 + seconds);
    }

    initDataObj(axis, location, startH, startM, startS, endH, endM, endS) {
        return {
            taskName: location,
            color: this.getColor(location),
            start: this.calc(startH, startM, startS),
            end: this.calc(endH, endM, endS),
            y: axis
        };
    }

    getColor(location) {
        switch (location) {
            case "Funken":
                return "#949494";
            case "Roboter":
                return "#FFA000";
            case "Dornerei":
                return "#FAE4B1";
            case "Stanzen":
                return "#0097A5";
        }
    }

}