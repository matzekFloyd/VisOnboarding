/**
 *
 * @param name
 * @param id
 * @param data
 * @return {{data: *, name: Base.props, id: *}}
 * @constructor
 */
export let Base = (name, id, data) => {
    return {
        name: name,
        id: id,
        data: data
    }
};