import {DataCruncher} from "./DataCruncher";

/**
 *
 * @param name
 * @param id
 * @param data
 * @return {{data: *, name: Series.props, id: *}}
 * @constructor
 */
export let Series = (name, id, data) => {
    return {
        name: name,
        id: id,
        data: data
    }
};

/**
 *
 * @param beacon
 * @param data
 * @return {{data: *, allowPointSelect: boolean, name: string, id: *}}
 * @constructor
 */
export let SeriesDrill = (beacon, data) => {
    //TODO make sure beacon has correct structure
    return {
        name: beacon.name + " (" + beacon.id + ")",
        id: beacon.id,
        allowPointSelect: true,
        data: data
    }
};

/**
 *
 * @param startDate
 * @param y
 * @param tag
 * @param location
 * @param drilldown
 * @param startH
 * @param startM
 * @param startS
 * @param endH
 * @param endM
 * @param endS
 * @return {{duration: string, drilldown: *, color: string, name: string, start: number, y: *, location: *, end: number, id: *, tag: *}}
 * @constructor
 */
export let Point = (startDate, y, tag, location, drilldown, startH, startM, startS, endH, endM, endS) => {
    let start = DataCruncher.calculateTime(startDate, startH, startM, startS);
    let end = DataCruncher.calculateTime(startDate, endH, endM, endS);
    let duration = DataCruncher.calculateDuration(start, end);
    return {
        id: DataCruncher.createId(tag, startH, startM, startS, endH, endM, endS),
        name: "pt_" + tag + "_" + location,
        tag: tag,
        location: location,
        y: y,
        drilldown: drilldown,
        color: DataCruncher.getColor(location),
        start: start,
        end: end,
        duration: duration,
    }
};