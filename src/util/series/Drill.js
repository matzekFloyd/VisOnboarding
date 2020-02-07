/**
 *
 * @param beacon
 * @param data
 * @return {{data: *, allowPointSelect: boolean, name: string, id: *}}
 * @constructor
 */
export let Drill = (beacon, data) => {
    //TODO make sure beacon has correct structure
    return {
        name: beacon.name + " (" + beacon.id + ")",
        id: beacon.id,
        allowPointSelect: true,
        data: data
    }
};