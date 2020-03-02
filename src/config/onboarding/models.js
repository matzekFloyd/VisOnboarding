import {BEACON, DORNEREI, FUNKEN, LOCATIONS, ROBOTER, STANZEN} from "src/util/visualisation/constants";
import {formatDateString} from "../../util/helpers";

export const DataPoint = (startDate, categories, type, tag, location, startH, startM, startS, endH, endM, endS) => {
    let y;
    let drillRef;
    if (type === 0) {
        y = categories.map((cat) => {
            return cat.id;
        }).indexOf(tag);
        drillRef = tag + "_" + startDate.getTime();
    }

    if (type === 1) {
        y = LOCATIONS.indexOf(location);
    }


    let beacon = BEACON(tag);
    let name = beacon.name + " (" + beacon.id + ")";

    let start = startDate.getTime() + 1000 * (startH * 3600 + startM * 60 + startS);
    let end = startDate.getTime() + 1000 * (endH * 3600 + endM * 60 + endS);

    let diff = Math.floor((end - start) / 1000), units = [
        {d: 60, l: "seconds"},
        {d: 60, l: "minutes"},
        {d: 24, l: "hours"}
    ];

    let duration = '';
    for (let i = 0; i < units.length; ++i) {
        duration = (diff % units[i].d) + " " + units[i].l + " " + duration;
        diff = Math.floor(diff / units[i].d);
    }

    let color;
    switch (location) {
        case FUNKEN.name:
            color = FUNKEN.color;
            break;
        case ROBOTER.name:
            color = ROBOTER.color;
            break;
        case DORNEREI.name:
            color = DORNEREI.color;
            break;
        case STANZEN.name:
            color = STANZEN.color;
            break;
    }

    return {
        id: tag + startH + startM + startS + endH + endM + endS + Math.random(),
        name: name,
        tag: tag,
        location: location,
        y: y,
        drilldown: drillRef,
        color: color,
        start: start,
        end: end,
        duration: duration,
    }
};

/**
 *
 * @param beacon
 * @param startDate
 * @param data
 * @constructor
 */
export const SeriesDrill = (beacon, startDate, data) => {
    let setDependencies = (data) => {
        for (let i = 1; i < data.length; i++) {
            let cur = data[i];
            let prev = data[i - 1];
            if (cur.location !== prev.location) {
                cur.dependency = prev.id;
            }
            if ((cur.start < prev.start)) {
                console.warn("Incorrect order at index: ", i);
            }
        }
        return data;
    };

    return {
        name: "Detail - " + formatDateString(startDate, true, true, true, false, false) + " - " + beacon.name + " (" + beacon.id + ")",
        id: beacon.id + "_" + startDate.getTime(),
        allowPointSelect: true,
        data: setDependencies(data)
    }
};