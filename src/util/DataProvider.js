export class DataProvider {

    startDate;
    day;
    xAxis;

    constructor(startDate, day = 1000 * 60 * 60 * 24) {
        this.startDate = startDate;
        this.day = day;
        this.xAxis = {
            min: this.startDate.getTime() + 0.3333 * this.day,
            max: this.startDate.getTime() + this.day
        }
    }

    calc(hours, minutes, seconds) {
        return this.startDate.getTime() + 1000 * (hours * 3600 + minutes * 60 + seconds);
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