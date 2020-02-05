/**
 *
 */
export class DataCruncher {

    startDate;
    day;
    categories;
    xAxis;
    yAxis;

    FUNKEN = "Funken";
    ROBOTER = "Roboter";
    DORNEREI = "Dornerei";
    STANZEN = "Stanzen";

    LOCATIONS = [this.FUNKEN, this.ROBOTER, this.DORNEREI, this.STANZEN];

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
        this.yAxis = {
            min: 0,
            max: this.categories.length - 1
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
    basicObj(tag, location, startH, startM, startS, endH, endM, endS) {
        return {
            id: this.createId(tag, startH, startM, startS, endH, endM, endS),
            name: "pt_" + tag + "_" + location,
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
        obj.y = this.categories.indexOf(tag);
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
            case this.FUNKEN:
                newY = 0;
                break;
            case this.ROBOTER:
                newY = 1;
                break;
            case this.DORNEREI:
                newY = 2;
                break;
            case this.STANZEN:
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
        chart.yAxis[0].update({
            categories: this.LOCATIONS,
            min: 0,
            max: this.LOCATIONS.length - 1
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
        chart.yAxis[0].update({
            type: 'category',
            categories: this.categories,
            min: this.yAxis.min,
            max: this.yAxis.max
        });
        setTimeout(function () {
            chart.hideLoading();
        }, 500);
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
            case this.FUNKEN:
                return "#7F3C8D";
            case this.ROBOTER:
                return "#11A579";
            case this.DORNEREI:
                return "#3969AC";
            case this.STANZEN:
                return "#F2B701";
        }
    }
}