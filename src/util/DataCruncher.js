import {BEACON, DORNEREI, FUNKEN, LOCATIONS, ROBOTER, STANZEN} from "../../constants";
import {Point} from "./models";
import {DRILLDOWN_2019_01_15, OVERVIEW_2019_01_15} from "../data/2019_01_15";
import {DRILLDOWN_2019_01_16, OVERVIEW_2019_01_16} from "../data/2019_01_16";
import {DRILLDOWN_2019_01_17, OVERVIEW_2019_01_17} from "../data/2019_01_17";

//TYPE
const OVERVIEW = 0;
const DRILLDOWN = 1;

const JAN_15 = 15;
const JAN_16 = 16;
const JAN_17 = 17;

/**
 *
 */
export class DataCruncher {

    startDate;
    day;
    categories;
    xAxis;

    /**
     *
     * @param startDate
     * @param categories
     * @param day
     */
    constructor(startDate = new Date(), categories, day = 1000 * 60 * 60 * 24) {
        this.startDate = startDate;
        this.day = day;
        this.categories = categories;
        this.xAxis = {
            min: this.startDate.getTime(),
            max: this.startDate.getTime() + this.day
        };
    }

    /**
     *
     * @param type
     * @param tag
     * @param location
     * @param startH
     * @param startM
     * @param startS
     * @param endH
     * @param endM
     * @param endS
     * @return {{duration: string, drilldown: *, color: string, name: string, start: number, y: *, location: *, end: number, id: *, tag: *}}
     */
    point(type, tag, location, startH, startM, startS, endH, endM, endS) {
        let y = null;
        let drillRef = null;
        if (type === OVERVIEW) {
            y = this.categories.map((cat) => {
                return cat.id;
            }).indexOf(tag);
            drillRef = tag;
        }

        if (type === DRILLDOWN) {
            y = LOCATIONS.indexOf(location);
        }

        return Point(this.startDate, y, tag, location, drillRef, startH, startM, startS, endH, endM, endS);
    }

    /**
     *
     * @param event
     * @param chart
     */
    drilldown(event, chart) {
        chart.showLoading('Loading...', chart.yAxis, chart.yAxis.type);
        let beacon = BEACON(event.point.tag);
        chart.update({
            title: {
                text: '<b>Asset Tracking - ' + beacon.name + " (" + beacon.id + ')</b>',
                textAlign: 'center',
                margin: 0,
                uesHtml: true
            },
            yAxis: {
                type: 'category',
                grid: {
                    columns: [{
                        title: {
                            text: "Location"
                        },
                        categories: LOCATIONS
                    }]
                }
            }
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
            title: {
                text: '<b>Asset Tracking - Overview</b>',
                textAlign: 'center',
                margin: 0,
                useHtml: true
            },
            yAxis: {
                grid: {
                    columns: [{
                        title: {
                            text: "Name"
                        },
                        categories: this.categories.map(function (category) {
                            return category.name;
                        })
                    }, {
                        title: {
                            text: "ID"
                        },
                        categories: this.categories.map(function (category) {
                            return category.id;
                        })
                    }]
                }
            }
        });
        setTimeout(function () {
            chart.hideLoading();
        }, 500);
    }

    getSeries(type, date) {
        switch (date.getUTCDate()) {
            case JAN_15:
            default:
                return type === OVERVIEW ? OVERVIEW_2019_01_15(this) : DRILLDOWN_2019_01_15(this);

            case JAN_16:
                return type === OVERVIEW ? OVERVIEW_2019_01_16(this) : DRILLDOWN_2019_01_16(this);

            case JAN_17:
                return type === OVERVIEW ? OVERVIEW_2019_01_17(this) : DRILLDOWN_2019_01_17(this);
        }
    }

    /**
     *
     * @param objArray
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
     * @param startDate
     * @param hours
     * @param minutes
     * @param seconds
     * @return {number}
     */
    static calculateTime(startDate, hours, minutes, seconds) {
        return startDate.getTime() + 1000 * (hours * 3600 + minutes * 60 + seconds);
    }

    /**
     *
     * @param tStart
     * @param tEnd
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
     * @param unix
     * @return {string}
     */
    static convertUnixTimestamp(unix) {
        let months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let date = new Date(unix);
        let year = date.getFullYear();
        let month = months_arr[date.getMonth()];
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        return month + ' ' + day + ' ' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    /**
     *
     * @param tag
     * @param startH
     * @param startM
     * @param startS
     * @param endH
     * @param endM
     * @param endS
     * @return {*}
     */
    static createId(tag, startH, startM, startS, endH, endM, endS) {
        return tag + startH + startM + startS + endH + endM + endS + Math.random();
    }

    /**
     *
     * @param location
     * @return {string}
     */
    static getColor(location) {
        switch (location) {
            case FUNKEN:
                return "#7F3C8D";
            case ROBOTER:
                return "#11A579";
            case DORNEREI:
                return "#3969AC";
            case STANZEN:
                return "#F2B701";
        }
    }
}