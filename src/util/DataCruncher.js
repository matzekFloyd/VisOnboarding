import {LOCATIONS, FUNKEN, ROBOTER, DORNEREI, STANZEN, BEACON} from "../../constants";

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
    constructor(startDate, categories, day = 1000 * 60 * 60 * 24) {
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
        return {
            id: this.createId(tag, startH, startM, startS, endH, endM, endS),
            name: "pt_" + tag + "_" + location,
            tag: tag,
            location: location,
            taskName: location,
            color: this.getColor(location),
            start: this.calculateTime(startH, startM, startS),
            end: this.calculateTime(endH, endM, endS),
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
        obj.id = this.createId(tag, startH, startM, startS, endH, endM, endS);
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
                text: '<b>Asset Tracking - Detail: ' + beacon.name + " (" + beacon.id + ')</b>',
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
    setDependencies(objArray) {
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
        return this.startDate.getTime() + 1000 * (hours * 3600 + minutes * 60 + seconds);
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
    createId(tag, startH, startM, startS, endH, endM, endS) {
        return tag + startH + startM + startS + endH + endM + endS + Math.random();
    }

    /**
     *
     * @param location
     * @return {string}
     */
    getColor(location) {
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