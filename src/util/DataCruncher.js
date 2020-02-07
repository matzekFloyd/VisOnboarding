import {BEACON, DORNEREI, FUNKEN, LOCATIONS, ROBOTER, STANZEN} from "../../constants";

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
     * @param tag
     * @param location
     * @param startH
     * @param startM
     * @param startS
     * @param endH
     * @param endM
     * @param endS
     * @return {{color: string, name: string, start: number, taskName: *, end: number, id: *}}
     */
    basicObj(tag, location, startH, startM, startS, endH, endM, endS) {
        let start = this.calculateTime(startH, startM, startS);
        let end = this.calculateTime(endH, endM, endS);
        let duration = DataCruncher.calculateDuration(start, end);
        return {
            id: DataCruncher.createId(tag, startH, startM, startS, endH, endM, endS),
            name: "pt_" + tag + "_" + location,
            tag: tag,
            location: location,
            color: DataCruncher.getColor(location),
            start: start,
            end: end,
            duration: duration,
        }
    }

    /**
     *
     * @param tag
     * @param location
     * @param startH
     * @param startM
     * @param startS
     * @param endH
     * @param endM
     * @param endS
     * @return {{color: string, name: string, start: number, taskName: *, end: number, id: *}}
     */
    dataObj(tag, location, startH, startM, startS, endH, endM, endS) {
        let obj = this.basicObj(tag, location, startH, startM, startS, endH, endM, endS);
        obj.y = this.categories.map((cat) => {
            return cat.id;
        }).indexOf(tag);
        obj.drilldown = tag;
        return {...obj};
    }

    /**
     *
     * @param tag
     * @param location
     * @param startH
     * @param startM
     * @param startS
     * @param endH
     * @param endM
     * @param endS
     * @return {{color: string, name: string, start: number, taskName: *, end: number, id: *}}
     */
    drillObj(tag, location, startH, startM, startS, endH, endM, endS) {
        let obj = this.basicObj(tag, location, startH, startM, startS, endH, endM, endS);
        let newY = null;
        switch (location) {
            case FUNKEN:
                newY = 0;
                break;
            case ROBOTER:
                newY = 1;
                break;
            case DORNEREI:
                newY = 2;
                break;
            case STANZEN:
                newY = 3;
                break;
        }
        obj.y = newY;
        obj.id = DataCruncher.createId(tag, startH, startM, startS, endH, endM, endS);
        return {...obj}
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
     * @param hours
     * @param minutes
     * @param seconds
     * @return {number}
     */
    calculateTime(hours, minutes, seconds) {
        //TODO refactor to static
        return this.startDate.getTime() + 1000 * (hours * 3600 + minutes * 60 + seconds);
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