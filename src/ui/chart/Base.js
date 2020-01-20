import React, {PureComponent} from 'react';
import "../../css/main.scss";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import {JAN_15, JAN_16, JAN_17} from "../../../constants";
import {D_JAN_15} from "../../data/2019-01-15";
import {D_JAN_16} from "../../data/2019-01-16";
import {D_JAN_17} from "../../data/2019-01-17";

export default class Base extends PureComponent {

    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
        }
        this.initialDate = null;
        this.day = 1000 * 60 * 60 * 24;
    }

    getChartCfg(identifier) {
        switch (identifier) {
            case JAN_15:
                this.initialDate = new Date('2019-01-15T01:00:00');
                return D_JAN_15;
            case JAN_16:
                this.initialDate = new Date('2019-01-16T01:00:00');
                return D_JAN_16;
            case JAN_17:
                this.initialDate = new Date('2019-01-17T01:00:00');
                return D_JAN_17;
            default:
                this.initialDate = new Date('2019-01-15T01:00:00');
                return D_JAN_15;
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