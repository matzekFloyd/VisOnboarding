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

    calc(hours, minutes, seconds) {
        return this.startDate.getTime() + 1000 * (hours * 3600 + minutes * 60 + seconds);
    }

    initBaseObj(location, startH, startM, startS, endH, endM, endS) {
        return {
            taskName: location,
            color: this.getColor(location),
            start: this.calc(startH, startM, startS),
            end: this.calc(endH, endM, endS),
        }
    }

    initDataObj(tag, location, startH, startM, startS, endH, endM, endS) {
        let base = this.initBaseObj(location, startH, startM, startS, endH, endM, endS);

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
        base.y = newY;
        return {...base}
    }

    initDrilldownObj(tag, location, startH, startM, startS, endH, endM, endS) {
        let dataObj = this.initBaseObj(location, startH, startM, startS, endH, endM, endS);
        dataObj.y = this.categories.indexOf(tag);
        dataObj.drilldown = tag;
        return {...dataObj};
    }

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