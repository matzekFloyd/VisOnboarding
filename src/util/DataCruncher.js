export class DataCruncher {

    startDate;
    day;
    categories;
    xAxis;
    yAxis;

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

    initDataObj(tag, location, startH, startM, startS, endH, endM, endS) {
        return {
            taskName: location,
            color: this.getColor(location),
            start: this.calc(startH, startM, startS),
            end: this.calc(endH, endM, endS),
            y: this.categories.indexOf(tag)
        };
    }

    getColor(location) {
        switch (location) {
            case "Funken":
                return "#7F3C8D";
            case "Roboter":
                return "#11A579";
            case "Dornerei":
                return "#3969AC";
            case "Stanzen":
                return "#F2B701";
        }
    }
}