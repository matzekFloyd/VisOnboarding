import {DataCruncher} from "./DataCruncher";

/**
 *
 * @param {string} name
 * @param {string} id
 * @param {Array} data
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
 * @param {BEACON} beacon
 * @param {Array} data
 * @return {{data: *, allowPointSelect: boolean, name: string, id: *}}
 * @constructor
 */
export let SeriesDrill = (beacon, data) => {
    return {
        name: beacon.name + " (" + beacon.id + ")",
        id: beacon.id,
        allowPointSelect: true,
        data: DataCruncher.setDependencies(data)
    }
};

/**
 *
 * @param {Date} startDate
 * @param {number} y
 * @param {string} tag
 * @param {string} location
 * @param {string} name
 * @param {string} drilldown
 * @param {number} startH
 * @param {number} startM
 * @param {number} startS
 * @param {number} endH
 * @param {number} endM
 * @param {number} endS
 * @return {{duration: string, drilldown: *, color: string, name: string, start: number, y: *, location: *, end: number, id: *, tag: *}}
 * @constructor
 */
export let Point = (startDate, y, tag, location, name, drilldown, startH, startM, startS, endH, endM, endS) => {
    let start = DataCruncher.calculateTime(startDate, startH, startM, startS);
    let end = DataCruncher.calculateTime(startDate, endH, endM, endS);
    let duration = DataCruncher.calculateDuration(start, end);
    return {
        id: DataCruncher.createId(tag, startH, startM, startS, endH, endM, endS),
        name: name,
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