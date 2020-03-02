import {BEACON, DORNEREI, FUNKEN, LOCATIONS, ROBOTER, STANZEN} from "./constants";
import {Point} from "src/config/visualisation/models";
import {DRILLDOWN_2019_01_15, OVERVIEW_2019_01_15} from "src/config/visualisation/2019_01_15/2019_01_15";
import {DRILLDOWN_2019_01_16, OVERVIEW_2019_01_16} from "src/config/visualisation/2019_01_16/2019_01_16";
import {DRILLDOWN_2019_01_17, OVERVIEW_2019_01_17} from "src/config/visualisation/2019_01_17/2019_01_17";
import {DRILLDOWN_2019_01_14, OVERVIEW_2019_01_14} from "src/config/visualisation/2019_01_14/2019_01_14";
import {DRILLDOWN_2019_01_18, OVERVIEW_2019_01_18} from "src/config/visualisation/2019_01_18/2019_01_18";
import {DRILLDOWN_2019_01_19, OVERVIEW_2019_01_19} from "src/config/visualisation/2019_01_19/2019_01_19";
import {DRILLDOWN_2019_01_20, OVERVIEW_2019_01_20} from "src/config/visualisation/2019_01_20/2019_01_20";
import {formatDateString} from "../helpers";

const OVERVIEW = 0;
const DRILLDOWN = 1;

const JAN_14 = 14;
const JAN_15 = 15;
const JAN_16 = 16;
const JAN_17 = 17;
const JAN_18 = 18;
const JAN_19 = 19;
const JAN_20 = 20;

/**
 * @type DataCruncher
 */
export class DataCruncher {

    startDate;
    day;
    categories;
    title;
    xAxis;
    yAxis;

    /**
     *
     * @param {Date} startDate
     * @param {Array} categories
     * @param {number} day
     */
    constructor(startDate = new Date(), categories, day = 1000 * 60 * 60 * 24) {
        this.startDate = startDate;
        this.day = day;
        this.categories = categories;
        this.title = {
            overview: {
                margin: 0,
                text: this.getTitleText(0),
                textAlign: 'center',
                useHtml: true
            },
            drilldown: null
        };
        this.xAxis = {
            min: this.startDate.getTime(),
            max: this.startDate.getTime() + this.day,
            crosshair: {
                enabled: true,
                snap: false,
                color: "rgba(102,133,194,0.75)"
            },
        };
        this.yAxis = {
            overview: [
                {
                    type: 'category',
                    grid: {
                        columns: [{
                            title: {
                                text: "Name"
                            },
                            categories: categories.map(function (category) {
                                return category.name;
                            })
                        }, {
                            title: {
                                text: "ID"
                            },
                            categories: categories.map(function (category) {
                                return `<b>${category.id}</b>`;
                            })
                        }]
                    },

                }
            ],
            drilldown: [
                {
                    type: 'category',
                    grid: {
                        columns: [{
                            title: {
                                text: "Location"
                            },
                            categories: LOCATIONS.map(function (location) {
                                return `<b>${location}</b>`;
                            })
                        }]
                    }
                }
            ]
        }
    }

    /**
     *
     * @param {number} level
     * @param event
     * @return {string}
     */
    getTitleText(level, event = null) {
        switch (level) {
            case OVERVIEW:
            default:
                return '<b>Overview - ' + formatDateString(this.startDate, true, true, true, false, false) + '</b>';
            case DRILLDOWN:
                let beacon = BEACON(event.point.tag);
                return '<b>Detail - ' + formatDateString(this.startDate, true, true, true, false, false) + ' - ' + beacon.name + " (" + beacon.id + ')</b>';
        }
    }

    /**
     *
     * @param {number} type
     * @param {string} tag
     * @param {string} location
     * @param {number} startH
     * @param {number} startM
     * @param {number} startS
     * @param {number} endH
     * @param {number} endM
     * @param {number} endS
     * @return {{duration: string, drilldown: *, color: string, name: string, start: number, y: *, location: *, end: number, id: *, tag: *}}
     */
    point(type, tag, location, startH, startM, startS, endH, endM, endS) {
        let y;
        let drillRef;
        if (type === OVERVIEW) {
            y = this.categories.map((cat) => {
                return cat.id;
            }).indexOf(tag);
            drillRef = tag + "_" + this.startDate.getTime();
        }

        if (type === DRILLDOWN) {
            y = LOCATIONS.indexOf(location);
        }

        let beacon = BEACON(tag);
        let name = beacon.name + " (" + beacon.id + ")";

        return Point(this.startDate, y, tag, location, name, drillRef, startH, startM, startS, endH, endM, endS);
    }

    /**
     *
     * @param event
     * @param chart
     */
    drilldown(event, chart) {
        chart.showLoading('Loading...', chart.yAxis, chart.yAxis.type);
        this.title.drilldown = {
            text: this.getTitleText(1, event),
            textAlign: 'center',
            margin: 0,
            useHtml: true
        };
        chart.update({
            title: this.title.drilldown,
            yAxis: this.yAxis.drilldown
        });
        setTimeout(function () {
            chart.hideLoading();
        }, 500);
    }

    /**
     *
     * @param event
     * @param chart
     */
    drillup(event, chart) {
        chart.showLoading('Loading...', chart.yAxis, chart.yAxis.type);
        chart.update({
            title: this.title.overview,
            yAxis: this.yAxis.overview
        });
        setTimeout(function () {
            chart.hideLoading();
        }, 500);
    }

    /**
     *
     * @param {number} type
     * @return {*}
     */
    getSeries(type) {
        switch (this.startDate.getUTCDate()) {
            case JAN_14:
            default:
                return type === OVERVIEW ? OVERVIEW_2019_01_14(this) : DRILLDOWN_2019_01_14(this);
            case JAN_15:
                return type === OVERVIEW ? OVERVIEW_2019_01_15(this) : DRILLDOWN_2019_01_15(this);
            case JAN_16:
                return type === OVERVIEW ? OVERVIEW_2019_01_16(this) : DRILLDOWN_2019_01_16(this);
            case JAN_17:
                return type === OVERVIEW ? OVERVIEW_2019_01_17(this) : DRILLDOWN_2019_01_17(this);
            case JAN_18:
                return type === OVERVIEW ? OVERVIEW_2019_01_18(this) : DRILLDOWN_2019_01_18(this);
            case JAN_19:
                return type === OVERVIEW ? OVERVIEW_2019_01_19(this) : DRILLDOWN_2019_01_19(this);
            case JAN_20:
                return type === OVERVIEW ? OVERVIEW_2019_01_20(this) : DRILLDOWN_2019_01_20(this);
        }
    }

    /**
     *
     * @param {array} objArray
     * @return {*}
     */
    static setDependencies(objArray) {
        for (let i = 1; i < objArray.length; i++) {
            let cur = objArray[i];
            let prev = objArray[i - 1];
            if (cur.location !== prev.location) {
                cur.dependency = prev.id;
            }
            if ((cur.start < prev.start)) {
                console.warn("Incorrect order at index: ", i);
            }
        }
        return objArray;
    }

    /**
     *
     * @param {Date} startDate
     * @param {number} hours
     * @param {number} minutes
     * @param {number} seconds
     * @return {number}
     */
    static calculateTime(startDate, hours, minutes, seconds) {
        return startDate.getTime() + 1000 * (hours * 3600 + minutes * 60 + seconds);
    }

    /**
     *
     * @param {number} tStart
     * @param {number} tEnd
     * @return {string}
     */
    static calculateDuration(tStart, tEnd) {
        let diff = Math.floor((tEnd - tStart) / 1000), units = [
            {d: 60, l: "seconds"},
            {d: 60, l: "minutes"},
            {d: 24, l: "hours"}
        ];

        let s = '';
        for (let i = 0; i < units.length; ++i) {
            s = (diff % units[i].d) + " " + units[i].l + " " + s;
            diff = Math.floor(diff / units[i].d);
        }
        return s;
    }

    /**
     *
     * @param {string} tag
     * @param {number} startH
     * @param {number} startM
     * @param {number} startS
     * @param {number} endH
     * @param {number} endM
     * @param {number} endS
     * @return {*}
     */
    static createId(tag, startH, startM, startS, endH, endM, endS) {
        return tag + startH + startM + startS + endH + endM + endS + Math.random();
    }

    /**
     *
     * @param {string} location
     * @return {string}
     */
    static getColor(location) {
        switch (location) {
            case FUNKEN.name:
                return FUNKEN.color;
            case ROBOTER.name:
                return ROBOTER.color;
            case DORNEREI.name:
                return DORNEREI.color;
            case STANZEN.name:
                return STANZEN.color;
        }
    }
}