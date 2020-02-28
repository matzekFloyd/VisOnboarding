import {DataCruncher} from "../../../util/visualisation/DataCruncher";
import {Series, SeriesDrill} from "../models";
import {typeCheck} from "../../../util/helpers";
import {
    BEACON,
    GmK6,
    GYPG,
    Hf6q,
    JWwq,
    lwFq,
    n4gK,
    ofEz, oiFK,
    ox0d,
    pMaq,
    QuLX
} from "../../../util/visualisation/constants";

/**
 *
 * @param {DataCruncher} dc
 * @return {[{data: *, name: Series.props, id: *}]|*[]}
 * @constructor
 */
export const OVERVIEW_2019_01_14 = (dc) => {
    if (!typeCheck(dc, DataCruncher)) return [];
    return [
        Series(dc.startDate, [
                dc.point(0, 'GYPG', 'Dornerei', 9, 7, 30, 12, 45, 31),
                dc.point(0, 'ofEz', 'Roboter', 9, 7, 31, 9, 21, 32),
                dc.point(0, 'Hf6q', 'Funken', 9, 7, 32, 9, 15, 31),
                dc.point(0, 'JWwq', 'Roboter', 9, 8, 11, 15, 55, 35),
                dc.point(0, 'n4gK', 'Roboter', 9, 9, 31, 10, 39, 34),
                dc.point(0, 'QuLX', 'Funken', 9, 9, 32, 9, 19, 31),
                dc.point(0, 'ox0d', 'Stanzen', 9, 9, 34, 11, 17, 31),
                dc.point(0, 'GmK6', 'Funken', 9, 11, 32, 9, 22, 11),
                dc.point(0, 'pMaq', 'Funken', 9, 12, 14, 9, 21, 31),
                dc.point(0, 'Hf6q', 'Roboter', 9, 15, 31, 9, 25, 34),
                dc.point(0, 'QuLX', 'Roboter', 9, 19, 31, 16, 5, 35),
                dc.point(0, 'pMaq', 'Roboter', 9, 21, 31, 9, 35, 32),
                dc.point(0, 'ofEz', 'Funken', 9, 21, 32, 9, 31, 31),
                dc.point(0, 'GmK6', 'Roboter', 9, 22, 11, 11, 10, 54),
                dc.point(0, 'Hf6q', 'Funken', 9, 25, 34, 9, 31, 31),
                dc.point(0, 'lwFq', 'Stanzen', 9, 29, 34, 9, 37, 31),
                dc.point(0, 'Hf6q', 'Roboter', 9, 31, 31, 10, 3, 32),
                dc.point(0, 'ofEz', 'Roboter', 9, 31, 31, 12, 1, 34),
                dc.point(0, 'lwFq', 'Roboter', 9, 37, 31, 12, 27, 34),
                dc.point(0, 'pMaq', 'Funken', 9, 38, 14, 9, 49, 31),
                dc.point(0, 'pMaq', 'Roboter', 9, 49, 31, 9, 55, 34),
                dc.point(0, 'pMaq', 'Funken', 9, 59, 34, 10, 23, 31),
                dc.point(0, 'Hf6q', 'Roboter', 10, 7, 31, 10, 23, 34),
                dc.point(0, 'pMaq', 'Roboter', 10, 23, 31, 11, 37, 34),
                dc.point(0, 'Hf6q', 'Funken', 10, 23, 34, 12, 45, 33),
                dc.point(0, 'n4gK', 'Roboter', 10, 43, 31, 11, 9, 34),
                dc.point(0, 'GmK6', 'Stanzen', 11, 10, 54, 11, 38, 11),
                dc.point(0, 'n4gK', 'Roboter', 11, 13, 31, 12, 34, 14),
                dc.point(0, 'ox0d', 'Stanzen', 11, 19, 34, 12, 5, 34),
                dc.point(0, 'GmK6', 'Roboter', 11, 38, 11, 11, 48, 14),
                dc.point(0, 'pMaq', 'Roboter', 11, 39, 31, 11, 56, 54),
                dc.point(0, 'GmK6', 'Stanzen', 11, 48, 14, 12, 0, 51),
                dc.point(0, 'pMaq', 'Roboter', 12, 0, 51, 12, 36, 13),
                dc.point(0, 'ox0d', 'Funken', 12, 5, 34, 12, 11, 34),
                dc.point(0, 'ox0d', 'Stanzen', 12, 11, 34, 15, 23, 35),
                dc.point(0, 'GmK6', 'Stanzen', 12, 11, 34, 12, 20, 11),
                dc.point(0, 'oiFK', 'Stanzen', 12, 16, 14, 12, 38, 11),
                dc.point(0, 'GmK6', 'Roboter', 12, 20, 11, 16, 7, 33),
                dc.point(0, 'lwFq', 'Stanzen', 12, 27, 34, 12, 35, 31),
                dc.point(0, 'lwFq', 'Roboter', 12, 35, 31, 13, 10, 54),
                dc.point(0, 'pMaq', 'Roboter', 12, 37, 31, 12, 53, 33),
                dc.point(0, 'n4gK', 'Roboter', 12, 37, 31, 12, 47, 35),
                dc.point(0, 'oiFK', 'Roboter', 12, 38, 11, 13, 52, 15),
                dc.point(0, 'Hf6q', 'Funken', 12, 47, 35, 13, 29, 33),
                dc.point(0, 'n4gK', 'Roboter', 12, 52, 11, 14, 51, 35),
                dc.point(0, 'pMaq', 'Roboter', 12, 57, 31, 13, 29, 33),
                dc.point(0, 'lwFq', 'Stanzen', 13, 10, 54, 13, 20, 52),
                dc.point(0, 'lwFq', 'Stanzen', 13, 22, 15, 13, 29, 32),
                dc.point(0, 'lwFq', 'Roboter', 13, 29, 32, 13, 37, 35),
                dc.point(0, 'Hf6q', 'Funken', 13, 29, 33, 13, 43, 35),
                dc.point(0, 'pMaq', 'Funken', 13, 29, 33, 13, 59, 32),
                dc.point(0, 'lwFq', 'Stanzen', 13, 37, 35, 14, 3, 32),
                dc.point(0, 'Hf6q', 'Funken', 13, 49, 35, 13, 57, 33),
                dc.point(0, 'oiFK', 'Stanzen', 13, 52, 15, 14, 0, 52),
                dc.point(0, 'pMaq', 'Roboter', 13, 59, 32, 16, 37, 33),
                dc.point(0, 'Hf6q', 'Funken', 13, 59, 35, 14, 55, 33),
                dc.point(0, 'lwFq', 'Stanzen', 14, 8, 15, 14, 23, 32),
                dc.point(0, 'lwFq', 'Roboter', 14, 23, 32, 15, 41, 35),
                dc.point(0, 'n4gK', 'Roboter', 14, 53, 32, 16, 33, 35),
                dc.point(0, 'Hf6q', 'Funken', 14, 57, 35, 15, 33, 33),
                dc.point(0, 'ox0d', 'Stanzen', 15, 25, 35, 16, 55, 35),
                dc.point(0, 'Hf6q', 'Funken', 15, 33, 33, 15, 47, 35),
                dc.point(0, 'lwFq', 'Roboter', 15, 44, 52, 15, 50, 15),
                dc.point(0, 'lwFq', 'Stanzen', 15, 50, 15, 16, 4, 52),
                dc.point(0, 'Hf6q', 'Funken', 15, 51, 33, 16, 15, 35),
                dc.point(0, 'lwFq', 'Roboter', 16, 4, 52, 16, 51, 35),
                dc.point(0, 'GmK6', 'Funken', 16, 7, 33, 16, 34, 52),
                dc.point(0, 'QuLX', 'Roboter', 16, 10, 12, 20, 9, 36),
                dc.point(0, 'Hf6q', 'Funken', 16, 19, 33, 16, 25, 35),
                dc.point(0, 'Hf6q', 'Funken', 16, 25, 35, 16, 31, 33),
                dc.point(0, 'Hf6q', 'Funken', 16, 31, 33, 18, 33, 35),
                dc.point(0, 'n4gK', 'Funken', 16, 33, 35, 16, 45, 32),
                dc.point(0, 'GmK6', 'Funken', 16, 37, 33, 16, 51, 32),
                dc.point(0, 'pMaq', 'Roboter', 16, 41, 32, 16, 48, 13),
                dc.point(0, 'n4gK', 'Roboter', 16, 45, 32, 20, 22, 54),
                dc.point(0, 'pMaq', 'Roboter', 16, 49, 32, 16, 54, 53),
                dc.point(0, 'GmK6', 'Roboter', 16, 51, 32, 16, 58, 13),
                dc.point(0, 'lwFq', 'Stanzen', 16, 51, 35, 16, 58, 12),
                dc.point(0, 'pMaq', 'Funken', 16, 54, 53, 17, 6, 12),
                dc.point(0, 'ox0d', 'Funken', 16, 55, 35, 17, 11, 35),
                dc.point(0, 'lwFq', 'Roboter', 16, 58, 12, 17, 13, 35),
                dc.point(0, 'GmK6', 'Roboter', 16, 59, 32, 17, 5, 33),
                dc.point(0, 'GmK6', 'Funken', 17, 5, 33, 17, 22, 12),
                dc.point(0, 'pMaq', 'Roboter', 17, 6, 12, 17, 14, 53),
                dc.point(0, 'ox0d', 'Stanzen', 17, 11, 35, 20, 19, 34),
                dc.point(0, 'pMaq', 'Funken', 17, 14, 53, 17, 20, 52),
                dc.point(0, 'lwFq', 'Roboter', 17, 18, 12, 17, 39, 35),
                dc.point(0, 'pMaq', 'Funken', 17, 22, 53, 17, 29, 32),
                dc.point(0, 'GmK6', 'Funken', 17, 26, 13, 18, 19, 32),
                dc.point(0, 'pMaq', 'Roboter', 17, 29, 32, 17, 37, 33),
                dc.point(0, 'pMaq', 'Funken', 17, 37, 33, 17, 54, 52),
                dc.point(0, 'lwFq', 'Stanzen', 17, 39, 35, 17, 46, 52),
                dc.point(0, 'lwFq', 'Roboter', 17, 49, 32, 18, 15, 35),
                dc.point(0, 'pMaq', 'Roboter', 17, 54, 52, 18, 5, 33),
                dc.point(0, 'pMaq', 'Funken', 18, 5, 33, 18, 13, 32),
                dc.point(0, 'pMaq', 'Roboter', 18, 13, 32, 19, 25, 36),
                dc.point(0, 'lwFq', 'Roboter', 18, 24, 12, 18, 29, 35),
                dc.point(0, 'GmK6', 'Roboter', 18, 25, 32, 20, 10, 14),
                dc.point(0, 'lwFq', 'Roboter', 18, 32, 52, 18, 52, 15),
                dc.point(0, 'Hf6q', 'Funken', 18, 33, 35, 18, 41, 34),
                dc.point(0, 'Hf6q', 'Funken', 18, 41, 34, 19, 27, 36),
                dc.point(0, 'lwFq', 'Roboter', 18, 53, 32, 18, 58, 55),
                dc.point(0, 'lwFq', 'Stanzen', 18, 58, 55, 19, 10, 12),
                dc.point(0, 'lwFq', 'Roboter', 19, 10, 12, 19, 27, 36),
                dc.point(0, 'pMaq', 'Funken', 19, 25, 36, 20, 12, 53),
                dc.point(0, 'Hf6q', 'Funken', 19, 27, 36, 19, 35, 34),
                dc.point(0, 'lwFq', 'Stanzen', 19, 27, 36, 20, 1, 33),
                dc.point(0, 'Hf6q', 'Funken', 19, 35, 34, 19, 43, 36),
                dc.point(0, 'Hf6q', 'Funken', 19, 45, 34, 22, 41, 36),
                dc.point(0, 'lwFq', 'Roboter', 20, 1, 33, 20, 18, 16),
                dc.point(0, 'GmK6', 'Funken', 20, 10, 14, 20, 23, 33),
                dc.point(0, 'pMaq', 'Roboter', 20, 12, 53, 20, 22, 54),
                dc.point(0, 'lwFq', 'Stanzen', 20, 18, 16, 21, 1, 33),
                dc.point(0, 'QuLX', 'Roboter', 20, 20, 53, 20, 55, 36),
                dc.point(0, 'ox0d', 'Stanzen', 20, 21, 36, 20, 27, 36),
                dc.point(0, 'pMaq', 'Funken', 20, 22, 54, 20, 51, 33),
                dc.point(0, 'n4gK', 'Roboter', 20, 33, 33, 23, 54, 16),
                dc.point(0, 'pMaq', 'Roboter', 20, 51, 33, 21, 30, 14),
                dc.point(0, 'QuLX', 'Stanzen', 20, 55, 36, 21, 1, 33),
                dc.point(0, 'lwFq', 'Roboter', 21, 1, 33, 21, 18, 54),
                dc.point(0, 'lwFq', 'Roboter', 21, 22, 13, 21, 32, 16),
                dc.point(0, 'lwFq', 'Stanzen', 21, 32, 16, 21, 40, 53),
                dc.point(0, 'lwFq', 'Funken', 21, 44, 54, 22, 0, 56),
                dc.point(0, 'lwFq', 'Roboter', 22, 11, 33, 22, 16, 56),
                dc.point(0, 'lwFq', 'Funken', 22, 19, 34, 22, 32, 13),
                dc.point(0, 'lwFq', 'Roboter', 22, 32, 13, 22, 45, 36),
                dc.point(0, 'Hf6q', 'Funken', 22, 41, 36, 22, 51, 34),
                dc.point(0, 'lwFq', 'Funken', 22, 48, 54, 22, 57, 36),
                dc.point(0, 'Hf6q', 'Funken', 22, 51, 34, 23, 25, 33),
                dc.point(0, 'lwFq', 'Stanzen', 22, 57, 36, 23, 26, 53),
                dc.point(0, 'lwFq', 'Stanzen', 23, 30, 56, 23, 50, 13),
                dc.point(0, 'lwFq', 'Roboter', 23, 50, 13, 23, 57, 36),
            ]
        )
    ]
};

/**
 *
 * @param {DataCruncher} dc
 * @return {*[]|[{data: *, allowPointSelect: boolean, name: string, id: *}, {data: *, allowPointSelect: boolean, name: string, id: *}, {data: *, allowPointSelect: boolean, name: string, id: *}, {data: *, allowPointSelect: boolean, name: string, id: *}, {data: *, allowPointSelect: boolean, name: string, id: *}, null, null, null, null, null, null, null]}
 * @constructor
 */
export const DRILLDOWN_2019_01_14 = (dc) => {
    if (!typeCheck(dc, DataCruncher)) return [];
    return [
        SeriesDrill(BEACON(GYPG), dc.startDate, [
            dc.point(1, 'GYPG', 'Dornerei', 9, 7, 30, 12, 45, 31)
        ]),
        SeriesDrill(BEACON(Hf6q), dc.startDate, [
            dc.point(1, 'Hf6q', 'Funken', 9, 7, 32, 9, 15, 31),
            dc.point(1, 'Hf6q', 'Roboter', 9, 15, 31, 9, 25, 34),
            dc.point(1, 'Hf6q', 'Funken', 9, 25, 34, 9, 31, 31),
            dc.point(1, 'Hf6q', 'Roboter', 9, 31, 31, 10, 3, 32),
            dc.point(1, 'Hf6q', 'Roboter', 10, 7, 31, 10, 23, 34),
            dc.point(1, 'Hf6q', 'Funken', 10, 23, 34, 12, 45, 33),
            dc.point(1, 'Hf6q', 'Funken', 12, 47, 35, 13, 29, 33),
            dc.point(1, 'Hf6q', 'Funken', 13, 29, 33, 13, 43, 35),
            dc.point(1, 'Hf6q', 'Funken', 13, 49, 35, 13, 57, 33),
            dc.point(1, 'Hf6q', 'Funken', 13, 59, 35, 14, 55, 33),
            dc.point(1, 'Hf6q', 'Funken', 14, 57, 35, 15, 33, 33),
            dc.point(1, 'Hf6q', 'Funken', 15, 33, 33, 15, 47, 35),
            dc.point(1, 'Hf6q', 'Funken', 15, 51, 33, 16, 15, 35),
            dc.point(1, 'Hf6q', 'Funken', 16, 19, 33, 16, 25, 35),
            dc.point(1, 'Hf6q', 'Funken', 16, 25, 35, 16, 31, 33),
            dc.point(1, 'Hf6q', 'Funken', 16, 31, 33, 18, 33, 35),
            dc.point(1, 'Hf6q', 'Funken', 18, 33, 35, 18, 41, 34),
            dc.point(1, 'Hf6q', 'Funken', 18, 41, 34, 19, 27, 36),
            dc.point(1, 'Hf6q', 'Funken', 19, 27, 36, 19, 35, 34),
            dc.point(1, 'Hf6q', 'Funken', 19, 35, 34, 19, 43, 36),
            dc.point(1, 'Hf6q', 'Funken', 19, 45, 34, 22, 41, 36),
            dc.point(1, 'Hf6q', 'Funken', 22, 41, 36, 22, 51, 34),
            dc.point(1, 'Hf6q', 'Funken', 22, 51, 34, 23, 25, 33)
        ]),
        SeriesDrill(BEACON(ofEz), dc.startDate, [
            dc.point(1, 'ofEz', 'Roboter', 9, 7, 31, 9, 21, 32),
            dc.point(1, 'ofEz', 'Funken', 9, 21, 32, 9, 31, 31),
            dc.point(1, 'ofEz', 'Roboter', 9, 31, 31, 12, 1, 34)
        ]),
        SeriesDrill(BEACON(JWwq), dc.startDate, [
            dc.point(1, 'JWwq', 'Roboter', 9, 8, 11, 15, 55, 35)
        ]),
        SeriesDrill(BEACON(ox0d), dc.startDate, [
            dc.point(1, 'ox0d', 'Stanzen', 9, 9, 34, 11, 17, 31),
            dc.point(1, 'ox0d', 'Stanzen', 11, 19, 34, 12, 5, 34),
            dc.point(1, 'ox0d', 'Funken', 12, 5, 34, 12, 11, 34),
            dc.point(1, 'ox0d', 'Stanzen', 12, 11, 34, 15, 23, 35),
            dc.point(1, 'ox0d', 'Stanzen', 15, 25, 35, 16, 55, 35),
            dc.point(1, 'ox0d', 'Funken', 16, 55, 35, 17, 11, 35),
            dc.point(1, 'ox0d', 'Stanzen', 17, 11, 35, 20, 19, 34),
            dc.point(1, 'ox0d', 'Stanzen', 20, 21, 36, 20, 27, 36)
        ]),
        SeriesDrill(BEACON(n4gK), dc.startDate, [
            dc.point(1, 'n4gK', 'Roboter', 9, 9, 31, 10, 39, 34),
            dc.point(1, 'n4gK', 'Roboter', 10, 43, 31, 11, 9, 34),
            dc.point(1, 'n4gK', 'Roboter', 11, 13, 31, 12, 34, 14),
            dc.point(1, 'n4gK', 'Roboter', 12, 37, 31, 12, 47, 35),
            dc.point(1, 'n4gK', 'Roboter', 12, 52, 11, 14, 51, 35),
            dc.point(1, 'n4gK', 'Roboter', 14, 53, 32, 16, 33, 35),
            dc.point(1, 'n4gK', 'Funken', 16, 33, 35, 16, 45, 32),
            dc.point(1, 'n4gK', 'Roboter', 16, 45, 32, 20, 22, 54),
            dc.point(1, 'n4gK', 'Roboter', 20, 33, 33, 23, 54, 16)
        ]),
        SeriesDrill(BEACON(QuLX), dc.startDate, [
            dc.point(1, 'QuLX', 'Funken', 9, 9, 32, 9, 19, 31),
            dc.point(1, 'QuLX', 'Roboter', 9, 19, 31, 16, 5, 35),
            dc.point(1, 'QuLX', 'Roboter', 16, 10, 12, 20, 9, 36),
            dc.point(1, 'QuLX', 'Roboter', 20, 20, 53, 20, 55, 36),
            dc.point(1, 'QuLX', 'Stanzen', 20, 55, 36, 21, 1, 33)
        ]),
        SeriesDrill(BEACON(pMaq), dc.startDate, [
            dc.point(1, 'pMaq', 'Funken', 9, 12, 14, 9, 21, 31),
            dc.point(1, 'pMaq', 'Roboter', 9, 21, 31, 9, 35, 32),
            dc.point(1, 'pMaq', 'Funken', 9, 38, 14, 9, 49, 31),
            dc.point(1, 'pMaq', 'Roboter', 9, 49, 31, 9, 55, 34),
            dc.point(1, 'pMaq', 'Funken', 9, 59, 34, 10, 23, 31),
            dc.point(1, 'pMaq', 'Roboter', 10, 23, 31, 11, 37, 34),
            dc.point(1, 'pMaq', 'Roboter', 11, 39, 31, 11, 56, 54),
            dc.point(1, 'pMaq', 'Roboter', 12, 0, 51, 12, 36, 13),
            dc.point(1, 'pMaq', 'Roboter', 12, 37, 31, 12, 53, 33),
            dc.point(1, 'pMaq', 'Roboter', 12, 57, 31, 13, 29, 33),
            dc.point(1, 'pMaq', 'Funken', 13, 29, 33, 13, 59, 32),
            dc.point(1, 'pMaq', 'Roboter', 13, 59, 32, 16, 37, 33),
            dc.point(1, 'pMaq', 'Roboter', 16, 41, 32, 16, 48, 13),
            dc.point(1, 'pMaq', 'Roboter', 16, 49, 32, 16, 54, 53),
            dc.point(1, 'pMaq', 'Funken', 16, 54, 53, 17, 6, 12),
            dc.point(1, 'pMaq', 'Roboter', 17, 6, 12, 17, 14, 53),
            dc.point(1, 'pMaq', 'Funken', 17, 14, 53, 17, 20, 52),
            dc.point(1, 'pMaq', 'Funken', 17, 22, 53, 17, 29, 32),
            dc.point(1, 'pMaq', 'Roboter', 17, 29, 32, 17, 37, 33),
            dc.point(1, 'pMaq', 'Funken', 17, 37, 33, 17, 54, 52),
            dc.point(1, 'pMaq', 'Roboter', 17, 54, 52, 18, 5, 33),
            dc.point(1, 'pMaq', 'Funken', 18, 5, 33, 18, 13, 32),
            dc.point(1, 'pMaq', 'Roboter', 18, 13, 32, 19, 25, 36),
            dc.point(1, 'pMaq', 'Funken', 19, 25, 36, 20, 12, 53),
            dc.point(1, 'pMaq', 'Roboter', 20, 12, 53, 20, 22, 54),
            dc.point(1, 'pMaq', 'Funken', 20, 22, 54, 20, 51, 33),
            dc.point(1, 'pMaq', 'Roboter', 20, 51, 33, 21, 30, 14)
        ]),
        SeriesDrill(BEACON(GmK6), dc.startDate, [
            dc.point(1, 'GmK6', 'Funken', 9, 11, 32, 9, 22, 11),
            dc.point(1, 'GmK6', 'Roboter', 9, 22, 11, 11, 10, 54),
            dc.point(1, 'GmK6', 'Stanzen', 11, 10, 54, 11, 38, 11),
            dc.point(1, 'GmK6', 'Roboter', 11, 38, 11, 11, 48, 14),
            dc.point(1, 'GmK6', 'Stanzen', 11, 48, 14, 12, 0, 51),
            dc.point(1, 'GmK6', 'Stanzen', 12, 11, 34, 12, 20, 11),
            dc.point(1, 'GmK6', 'Roboter', 12, 20, 11, 16, 7, 33),
            dc.point(1, 'GmK6', 'Funken', 16, 7, 33, 16, 34, 52),
            dc.point(1, 'GmK6', 'Funken', 16, 37, 33, 16, 51, 32),
            dc.point(1, 'GmK6', 'Roboter', 16, 51, 32, 16, 58, 13),
            dc.point(1, 'GmK6', 'Roboter', 16, 59, 32, 17, 5, 33),
            dc.point(1, 'GmK6', 'Funken', 17, 5, 33, 17, 22, 12),
            dc.point(1, 'GmK6', 'Funken', 17, 26, 13, 18, 19, 32),
            dc.point(1, 'GmK6', 'Roboter', 18, 25, 32, 20, 10, 14),
            dc.point(1, 'GmK6', 'Funken', 20, 10, 14, 20, 23, 33)
        ]),
        SeriesDrill(BEACON(lwFq), dc.startDate, [
            dc.point(1, 'lwFq', 'Stanzen', 9, 29, 34, 9, 37, 31),
            dc.point(1, 'lwFq', 'Roboter', 9, 37, 31, 12, 27, 34),
            dc.point(1, 'lwFq', 'Stanzen', 12, 27, 34, 12, 35, 31),
            dc.point(1, 'lwFq', 'Roboter', 12, 35, 31, 13, 10, 54),
            dc.point(1, 'lwFq', 'Stanzen', 13, 10, 54, 13, 20, 52),
            dc.point(1, 'lwFq', 'Stanzen', 13, 22, 15, 13, 29, 32),
            dc.point(1, 'lwFq', 'Roboter', 13, 29, 32, 13, 37, 35),
            dc.point(1, 'lwFq', 'Stanzen', 13, 37, 35, 14, 3, 32),
            dc.point(1, 'lwFq', 'Stanzen', 14, 8, 15, 14, 23, 32),
            dc.point(1, 'lwFq', 'Roboter', 14, 23, 32, 15, 41, 35),
            dc.point(1, 'lwFq', 'Roboter', 15, 44, 52, 15, 50, 15),
            dc.point(1, 'lwFq', 'Stanzen', 15, 50, 15, 16, 4, 52),
            dc.point(1, 'lwFq', 'Roboter', 16, 4, 52, 16, 51, 35),
            dc.point(1, 'lwFq', 'Stanzen', 16, 51, 35, 16, 58, 12),
            dc.point(1, 'lwFq', 'Roboter', 16, 58, 12, 17, 13, 35),
            dc.point(1, 'lwFq', 'Roboter', 17, 18, 12, 17, 39, 35),
            dc.point(1, 'lwFq', 'Stanzen', 17, 39, 35, 17, 46, 52),
            dc.point(1, 'lwFq', 'Roboter', 17, 49, 32, 18, 15, 35),
            dc.point(1, 'lwFq', 'Roboter', 18, 24, 12, 18, 29, 35),
            dc.point(1, 'lwFq', 'Roboter', 18, 32, 52, 18, 52, 15),
            dc.point(1, 'lwFq', 'Roboter', 18, 53, 32, 18, 58, 55),
            dc.point(1, 'lwFq', 'Stanzen', 18, 58, 55, 19, 10, 12),
            dc.point(1, 'lwFq', 'Roboter', 19, 10, 12, 19, 27, 36),
            dc.point(1, 'lwFq', 'Stanzen', 19, 27, 36, 20, 1, 33),
            dc.point(1, 'lwFq', 'Roboter', 20, 1, 33, 20, 18, 16),
            dc.point(1, 'lwFq', 'Stanzen', 20, 18, 16, 21, 1, 33),
            dc.point(1, 'lwFq', 'Roboter', 21, 1, 33, 21, 18, 54),
            dc.point(1, 'lwFq', 'Roboter', 21, 22, 13, 21, 32, 16),
            dc.point(1, 'lwFq', 'Stanzen', 21, 32, 16, 21, 40, 53),
            dc.point(1, 'lwFq', 'Funken', 21, 44, 54, 22, 0, 56),
            dc.point(1, 'lwFq', 'Roboter', 22, 11, 33, 22, 16, 56),
            dc.point(1, 'lwFq', 'Funken', 22, 19, 34, 22, 32, 13),
            dc.point(1, 'lwFq', 'Roboter', 22, 32, 13, 22, 45, 36),
            dc.point(1, 'lwFq', 'Funken', 22, 48, 54, 22, 57, 36),
            dc.point(1, 'lwFq', 'Stanzen', 22, 57, 36, 23, 26, 53),
            dc.point(1, 'lwFq', 'Stanzen', 23, 30, 56, 23, 50, 13),
            dc.point(1, 'lwFq', 'Roboter', 23, 50, 13, 23, 57, 36)
        ]),
        SeriesDrill(BEACON(oiFK), dc.startDate, [
            dc.point(1, 'oiFK', 'Stanzen', 12, 16, 14, 12, 38, 11),
            dc.point(1, 'oiFK', 'Roboter', 12, 38, 11, 13, 52, 15),
            dc.point(1, 'oiFK', 'Stanzen', 13, 52, 15, 14, 0, 52)
        ])
    ]
};