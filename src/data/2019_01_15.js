import {DataCruncher} from "../util/DataCruncher";
import {Series, SeriesDrill} from "../util/models";
import {BEACON, GmK6, GYPG, Hf6q, LLz2, lwFq, n4gK, ofEz, oiFK, ox0d, pMaq, QuLX, Xgti} from "../../constants";
import {typeCheck} from "../util/helpers";

/**
 *
 * @param {DataCruncher} dc
 * @return {[{data: *, name: Series.props, id: *}]|*[]}
 * @constructor
 */
export const OVERVIEW_2019_01_15 = (dc) => {
    if (!typeCheck(dc, DataCruncher)) return [];
    return [
        Series('Overview', 'overview',
            [
                dc.point(0, 'n4gK', 'Roboter', 0, 4, 13, 10, 29, 36),
                dc.point(0, 'lwFq', 'Roboter', 0, 14, 13, 0, 26, 14),
                dc.point(0, 'Hf6q', 'Funken', 0, 25, 34, 0, 35, 36),
                dc.point(0, 'ofEz', 'Funken', 0, 25, 36, 0, 35, 33),
                dc.point(0, 'lwFq', 'Funken', 0, 26, 14, 0, 34, 56),
                dc.point(0, 'ofEz', 'Roboter', 0, 35, 33, 2, 43, 37),
                dc.point(0, 'lwFq', 'Funken', 0, 35, 34, 0, 42, 56),
                dc.point(0, 'Hf6q', 'Funken', 0, 35, 36, 0, 43, 34),
                dc.point(0, 'Hf6q', 'Funken', 0, 43, 34, 0, 59, 33),
                dc.point(0, 'lwFq', 'Funken', 0, 44, 54, 1, 12, 53),
                dc.point(0, 'QuLX', 'Roboter', 0, 50, 13, 2, 20, 17),
                dc.point(0, 'Hf6q', 'Roboter', 0, 59, 33, 1, 19, 34),
                dc.point(0, 'lwFq', 'Roboter', 1, 12, 53, 1, 33, 37),
                dc.point(0, 'Hf6q', 'Funken', 1, 19, 34, 1, 43, 36),
                dc.point(0, 'lwFq', 'Stanzen', 1, 33, 37, 1, 50, 55),
                dc.point(0, 'Hf6q', 'Funken', 1, 47, 35, 2, 57, 37),
                dc.point(0, 'lwFq', 'Stanzen', 1, 52, 57, 2, 2, 15),
                dc.point(0, 'lwFq', 'Funken', 2, 2, 15, 2, 12, 17),
                dc.point(0, 'lwFq', 'Stanzen', 2, 12, 17, 2, 56, 54),
                dc.point(0, 'oiFK', 'Stanzen', 2, 13, 37, 18, 4, 15),
                dc.point(0, 'QuLX', 'Roboter', 2, 21, 34, 3, 2, 57),
                dc.point(0, 'ofEz', 'Roboter', 2, 50, 14, 3, 1, 35),
                dc.point(0, 'lwFq', 'Roboter', 2, 56, 54, 3, 20, 15),
                dc.point(0, 'Hf6q', 'Funken', 3, 1, 35, 3, 9, 37),
                dc.point(0, 'QuLX', 'Roboter', 3, 5, 34, 3, 19, 37),
                dc.point(0, 'ofEz', 'Roboter', 3, 6, 14, 3, 21, 35),
                dc.point(0, 'Hf6q', 'Funken', 3, 9, 37, 3, 15, 35),
                dc.point(0, 'lwFq', 'Funken', 3, 20, 15, 3, 39, 37),
                dc.point(0, 'ofEz', 'Roboter', 3, 23, 34, 3, 35, 37),
                dc.point(0, 'QuLX', 'Roboter', 3, 23, 34, 3, 50, 57),
                dc.point(0, 'Hf6q', 'Funken', 3, 23, 35, 3, 29, 37),
                dc.point(0, 'Hf6q', 'Funken', 3, 33, 35, 3, 51, 37),
                dc.point(0, 'lwFq', 'Stanzen', 3, 39, 37, 4, 2, 55),
                dc.point(0, 'ofEz', 'Roboter', 3, 42, 14, 3, 50, 57),
                dc.point(0, 'ofEz', 'Stanzen', 3, 50, 57, 3, 57, 34),
                dc.point(0, 'QuLX', 'Roboter', 3, 51, 34, 4, 15, 37),
                dc.point(0, 'Hf6q', 'Funken', 3, 53, 35, 4, 25, 37),
                dc.point(0, 'lwFq', 'Funken', 4, 2, 55, 4, 10, 57),
                dc.point(0, 'ofEz', 'Roboter', 4, 7, 34, 5, 23, 37),
                dc.point(0, 'lwFq', 'Stanzen', 4, 10, 57, 4, 28, 55),
                dc.point(0, 'QuLX', 'Roboter', 4, 21, 34, 4, 35, 37),
                dc.point(0, 'Hf6q', 'Funken', 4, 25, 37, 4, 33, 35),
                dc.point(0, 'lwFq', 'Funken', 4, 28, 55, 4, 48, 54),
                dc.point(0, 'Hf6q', 'Funken', 4, 33, 35, 4, 45, 37),
                dc.point(0, 'QuLX', 'Stanzen', 4, 35, 37, 4, 46, 14),
                dc.point(0, 'GmK6', 'Funken', 4, 36, 55, 5, 4, 14),
                dc.point(0, 'Hf6q', 'Funken', 4, 45, 37, 4, 57, 35),
                dc.point(0, 'lwFq', 'Roboter', 4, 48, 54, 5, 28, 17),
                dc.point(0, 'QuLX', 'Stanzen', 4, 49, 37, 5, 2, 15),
                dc.point(0, 'Hf6q', 'Funken', 4, 57, 35, 5, 5, 37),
                dc.point(0, 'pMaq', 'Funken', 5, 3, 35, 5, 9, 34),
                dc.point(0, 'QuLX', 'Roboter', 5, 4, 14, 5, 9, 35),
                dc.point(0, 'GmK6', 'Roboter', 5, 4, 14, 5, 9, 35),
                dc.point(0, 'Hf6q', 'Funken', 5, 7, 35, 9, 13, 34),
                dc.point(0, 'pMaq', 'Roboter', 5, 9, 34, 6, 55, 35),
                dc.point(0, 'GmK6', 'Funken', 5, 9, 35, 5, 16, 14),
                dc.point(0, 'QuLX', 'Funken', 5, 9, 35, 5, 17, 34),
                dc.point(0, 'GmK6', 'Roboter', 5, 16, 14, 5, 22, 55),
                dc.point(0, 'QuLX', 'Roboter', 5, 17, 34, 5, 30, 15),
                dc.point(0, 'ofEz', 'Roboter', 5, 25, 34, 5, 42, 15),
                dc.point(0, 'GmK6', 'Funken', 5, 28, 15, 5, 37, 37),
                dc.point(0, 'lwFq', 'Funken', 5, 29, 35, 5, 35, 34),
                dc.point(0, 'QuLX', 'Funken', 5, 30, 15, 5, 39, 37),
                dc.point(0, 'lwFq', 'Roboter', 5, 35, 34, 5, 53, 35),
                dc.point(0, 'QuLX', 'Funken', 5, 39, 37, 5, 47, 34),
                dc.point(0, 'GmK6', 'Roboter', 5, 40, 14, 5, 54, 57),
                dc.point(0, 'ofEz', 'Roboter', 5, 43, 34, 6, 11, 35),
                dc.point(0, 'QuLX', 'Roboter', 5, 51, 34, 6, 5, 34),
                dc.point(0, 'GmK6', 'Stanzen', 5, 54, 57, 7, 57, 35),
                dc.point(0, 'lwFq', 'Roboter', 5, 57, 34, 6, 7, 37),
                dc.point(0, 'lwFq', 'Roboter', 6, 11, 34, 6, 27, 37),
                dc.point(0, 'ofEz', 'Roboter', 6, 13, 34, 7, 11, 35),
                dc.point(0, 'lwFq', 'Roboter', 6, 29, 34, 6, 45, 37),
                dc.point(0, 'lwFq', 'Funken', 6, 45, 37, 7, 1, 34),
                dc.point(0, 'pMaq', 'Funken', 6, 55, 35, 7, 41, 34),
                dc.point(0, 'lwFq', 'Roboter', 7, 1, 34, 7, 55, 37),
                dc.point(0, 'ofEz', 'Roboter', 7, 18, 14, 8, 6, 15),
                dc.point(0, 'pMaq', 'Roboter', 7, 41, 34, 7, 46, 57),
                dc.point(0, 'pMaq', 'Stanzen', 7, 46, 57, 8, 12, 14),
                dc.point(0, 'GmK6', 'Funken', 7, 57, 35, 10, 25, 35),
                dc.point(0, 'lwFq', 'Roboter', 8, 3, 34, 11, 37, 38),
                dc.point(0, 'ofEz', 'Funken', 8, 6, 15, 8, 29, 34),
                dc.point(0, 'pMaq', 'Roboter', 8, 12, 14, 8, 24, 58),
                dc.point(0, 'pMaq', 'Roboter', 8, 33, 34, 8, 46, 18),
                dc.point(0, 'ofEz', 'Funken', 8, 33, 35, 8, 51, 34),
                dc.point(0, 'pMaq', 'Stanzen', 8, 46, 18, 9, 0, 14),
                dc.point(0, 'ofEz', 'Roboter', 8, 51, 34, 9, 25, 35),
                dc.point(0, 'pMaq', 'Roboter', 9, 0, 14, 9, 11, 38),
                dc.point(0, 'Hf6q', 'Roboter', 9, 13, 34, 9, 21, 37),
                dc.point(0, 'pMaq', 'Funken', 9, 14, 17, 9, 22, 18),
                dc.point(0, 'LLz2', 'Dornerei', 9, 15, 34, 10, 5, 38),
                dc.point(0, 'pMaq', 'Stanzen', 9, 22, 18, 10, 18, 17),
                dc.point(0, 'Hf6q', 'Funken', 9, 25, 35, 10, 37, 35),
                dc.point(0, 'ofEz', 'Roboter', 9, 27, 34, 9, 35, 37),
                dc.point(0, 'ofEz', 'Funken', 9, 38, 15, 9, 52, 15),
                dc.point(0, 'Xgti', 'Funken', 9, 45, 37, 10, 27, 36),
                dc.point(0, 'ofEz', 'Roboter', 9, 52, 15, 11, 7, 38),
                dc.point(0, 'GYPG', 'Stanzen', 9, 55, 38, 10, 4, 54),
                dc.point(0, 'LLz2', 'Dornerei', 10, 7, 34, 10, 19, 38),
                dc.point(0, 'pMaq', 'Funken', 10, 18, 17, 10, 24, 15),
                dc.point(0, 'pMaq', 'Roboter', 10, 24, 15, 10, 38, 58),
                dc.point(0, 'GmK6', 'Roboter', 10, 25, 35, 13, 58, 16),
                dc.point(0, 'Xgti', 'Funken', 10, 27, 36, 10, 33, 38),
                dc.point(0, 'LLz2', 'Stanzen', 10, 27, 38, 10, 33, 34),
                dc.point(0, 'n4gK', 'Funken', 10, 29, 36, 10, 34, 58),
                dc.point(0, 'LLz2', 'Dornerei', 10, 33, 34, 10, 39, 38),
                dc.point(0, 'Xgti', 'Funken', 10, 33, 38, 11, 55, 36),
                dc.point(0, 'pMaq', 'Roboter', 10, 40, 55, 13, 6, 16),
                dc.point(0, 'Hf6q', 'Funken', 10, 41, 36, 10, 58, 55),
                dc.point(0, 'n4gK', 'Funken', 10, 42, 18, 10, 59, 38),
                dc.point(0, 'Hf6q', 'Roboter', 10, 58, 55, 11, 42, 56),
                dc.point(0, 'n4gK', 'Roboter', 11, 2, 15, 11, 7, 36),
                dc.point(0, 'ofEz', 'Roboter', 11, 9, 35, 11, 21, 38),
                dc.point(0, 'n4gK', 'Funken', 11, 10, 58, 11, 26, 55),
                dc.point(0, 'ofEz', 'Funken', 11, 27, 38, 12, 28, 15),
                dc.point(0, 'lwFq', 'Funken', 11, 37, 38, 12, 9, 35),
                dc.point(0, 'Hf6q', 'Funken', 11, 42, 56, 11, 50, 15),
                dc.point(0, 'Hf6q', 'Roboter', 11, 50, 15, 13, 6, 16),
                dc.point(0, 'n4gK', 'Roboter', 11, 55, 35, 12, 43, 36),
                dc.point(0, 'Xgti', 'Funken', 11, 57, 38, 12, 3, 38),
                dc.point(0, 'lwFq', 'Roboter', 12, 9, 35, 14, 20, 18),
                dc.point(0, 'Xgti', 'Funken', 12, 9, 36, 12, 15, 38),
                dc.point(0, 'Xgti', 'Stanzen', 12, 15, 38, 12, 35, 38),
                dc.point(0, 'ofEz', 'Funken', 12, 29, 38, 12, 44, 15),
                dc.point(0, 'Xgti', 'Funken', 12, 35, 38, 13, 1, 38),
                dc.point(0, 'ofEz', 'Funken', 12, 45, 38, 12, 52, 56),
                dc.point(0, 'n4gK', 'Stanzen', 12, 51, 38, 12, 57, 36),
                dc.point(0, 'ofEz', 'Roboter', 12, 57, 35, 13, 10, 16),
                dc.point(0, 'n4gK', 'Funken', 12, 57, 36, 13, 15, 35),
                dc.point(0, 'Xgti', 'Stanzen', 13, 1, 38, 13, 9, 36),
                dc.point(0, 'pMaq', 'Funken', 13, 6, 16, 13, 50, 15),
                dc.point(0, 'Hf6q', 'Funken', 13, 6, 16, 13, 27, 35),
                dc.point(0, 'Xgti', 'Funken', 13, 9, 36, 13, 23, 38),
                dc.point(0, 'ofEz', 'Roboter', 13, 17, 35, 13, 26, 56),
                dc.point(0, 'n4gK', 'Funken', 13, 23, 36, 13, 39, 38),
                dc.point(0, 'Xgti', 'Stanzen', 13, 25, 38, 13, 31, 36),
                dc.point(0, 'Hf6q', 'Roboter', 13, 27, 35, 13, 32, 56),
                dc.point(0, 'ofEz', 'Roboter', 13, 28, 15, 13, 41, 36),
                dc.point(0, 'Xgti', 'Funken', 13, 33, 38, 14, 33, 36),
                dc.point(0, 'Hf6q', 'Roboter', 13, 37, 35, 14, 42, 16),
                dc.point(0, 'n4gK', 'Roboter', 13, 44, 15, 13, 58, 16),
                dc.point(0, 'ofEz', 'Roboter', 13, 44, 55, 13, 52, 58),
                dc.point(0, 'pMaq', 'Roboter', 13, 50, 15, 13, 58, 56),
                dc.point(0, 'ofEz', 'Funken', 13, 52, 58, 14, 0, 15),
                dc.point(0, 'GmK6', 'Funken', 13, 58, 16, 16, 6, 55),
                dc.point(0, 'pMaq', 'Funken', 13, 58, 56, 14, 10, 15),
                dc.point(0, 'n4gK', 'Roboter', 13, 59, 35, 14, 27, 38),
                dc.point(0, 'ofEz', 'Funken', 14, 3, 36, 14, 9, 38),
                dc.point(0, 'ofEz', 'Funken', 14, 9, 38, 14, 14, 56),
                dc.point(0, 'pMaq', 'Roboter', 14, 10, 15, 14, 21, 39),
                dc.point(0, 'ofEz', 'Funken', 14, 15, 38, 14, 24, 15),
                dc.point(0, 'lwFq', 'Funken', 14, 20, 18, 14, 27, 35),
                dc.point(0, 'pMaq', 'Stanzen', 14, 21, 39, 15, 14, 56),
                dc.point(0, 'ofEz', 'Roboter', 14, 24, 15, 17, 4, 58),
                dc.point(0, 'lwFq', 'Roboter', 14, 27, 35, 14, 39, 36),
                dc.point(0, 'n4gK', 'Roboter', 14, 29, 35, 15, 5, 38),
                dc.point(0, 'Xgti', 'Funken', 14, 33, 36, 16, 35, 38),
                dc.point(0, 'lwFq', 'Roboter', 14, 43, 35, 14, 53, 36),
                dc.point(0, 'Hf6q', 'Roboter', 14, 44, 55, 15, 0, 16),
                dc.point(0, 'lwFq', 'Roboter', 14, 57, 35, 15, 17, 39),
                dc.point(0, 'Hf6q', 'Roboter', 15, 2, 55, 20, 19, 39),
                dc.point(0, 'n4gK', 'Roboter', 15, 7, 35, 16, 22, 19),
                dc.point(0, 'pMaq', 'Funken', 15, 14, 56, 16, 16, 15),
                dc.point(0, 'lwFq', 'Roboter', 15, 21, 35, 19, 59, 37),
                dc.point(0, 'ox0d', 'Dornerei', 15, 59, 35, 16, 19, 39),
                dc.point(0, 'pMaq', 'Roboter', 16, 16, 15, 16, 28, 19),
                dc.point(0, 'ox0d', 'Stanzen', 16, 19, 39, 16, 39, 36),
                dc.point(0, 'n4gK', 'Roboter', 16, 25, 35, 16, 39, 36),
                dc.point(0, 'pMaq', 'Stanzen', 16, 28, 19, 16, 54, 15),
                dc.point(0, 'Xgti', 'Funken', 16, 35, 38, 16, 43, 36),
                dc.point(0, 'n4gK', 'Funken', 16, 39, 36, 16, 45, 35),
                dc.point(0, 'Xgti', 'Funken', 16, 43, 36, 17, 19, 38),
                dc.point(0, 'ox0d', 'Stanzen', 16, 45, 39, 16, 53, 35),
                dc.point(0, 'n4gK', 'Funken', 16, 48, 56, 17, 1, 35),
                dc.point(0, 'ox0d', 'Dornerei', 16, 53, 35, 17, 1, 36),
                dc.point(0, 'pMaq', 'Roboter', 16, 54, 15, 17, 4, 16),
                dc.point(0, 'ox0d', 'Funken', 17, 1, 36, 17, 7, 35),
                dc.point(0, 'pMaq', 'Funken', 17, 4, 16, 17, 15, 35),
                dc.point(0, 'ofEz', 'Roboter', 17, 5, 35, 21, 3, 39),
                dc.point(0, 'ox0d', 'Dornerei', 17, 7, 35, 17, 15, 39),
                dc.point(0, 'n4gK', 'Roboter', 17, 9, 35, 18, 35, 38),
                dc.point(0, 'pMaq', 'Roboter', 17, 15, 35, 17, 21, 39),
                dc.point(0, 'ox0d', 'Funken', 17, 19, 36, 17, 25, 39),
                dc.point(0, 'pMaq', 'Stanzen', 17, 21, 39, 17, 34, 15),
                dc.point(0, 'Xgti', 'Funken', 17, 23, 36, 20, 51, 39),
                dc.point(0, 'ox0d', 'Stanzen', 17, 25, 39, 17, 53, 35),
                dc.point(0, 'pMaq', 'Roboter', 17, 34, 15, 17, 53, 38),
                dc.point(0, 'ox0d', 'Dornerei', 17, 53, 35, 18, 7, 39),
                dc.point(0, 'pMaq', 'Funken', 17, 53, 38, 18, 1, 35),
                dc.point(0, 'pMaq', 'Roboter', 18, 1, 35, 18, 45, 39),
                dc.point(0, 'ox0d', 'Stanzen', 18, 7, 39, 21, 37, 37),
                dc.point(0, 'n4gK', 'Funken', 18, 35, 38, 18, 41, 35),
                dc.point(0, 'n4gK', 'Roboter', 18, 41, 35, 18, 54, 19),
                dc.point(0, 'pMaq', 'Stanzen', 18, 45, 39, 19, 54, 17),
                dc.point(0, 'n4gK', 'Roboter', 18, 55, 35, 19, 4, 17),
                dc.point(0, 'n4gK', 'Funken', 19, 4, 17, 20, 7, 39),
                dc.point(0, 'pMaq', 'Funken', 19, 54, 17, 20, 20, 19),
                dc.point(0, 'lwFq', 'Roboter', 20, 3, 36, 21, 22, 20),
                dc.point(0, 'n4gK', 'Funken', 20, 7, 39, 20, 17, 36),
                dc.point(0, 'Hf6q', 'Funken', 20, 19, 39, 21, 11, 36),
                dc.point(0, 'n4gK', 'Funken', 20, 20, 19, 20, 26, 16),
                dc.point(0, 'pMaq', 'Funken', 20, 20, 19, 20, 28, 16),
                dc.point(0, 'pMaq', 'Roboter', 20, 28, 16, 21, 19, 37),
                dc.point(0, 'n4gK', 'Funken', 20, 32, 19, 20, 47, 36),
                dc.point(0, 'n4gK', 'Funken', 20, 51, 39, 21, 18, 17),
                dc.point(0, 'Xgti', 'Funken', 20, 53, 37, 21, 51, 39),
                dc.point(0, 'Hf6q', 'Roboter', 21, 11, 36, 21, 17, 39),
                dc.point(0, 'Hf6q', 'Funken', 21, 17, 39, 21, 28, 16),
                dc.point(0, 'n4gK', 'Funken', 21, 18, 17, 21, 23, 39),
                dc.point(0, 'pMaq', 'Funken', 21, 19, 37, 21, 52, 59),
                dc.point(0, 'n4gK', 'Funken', 21, 23, 39, 21, 36, 17),
                dc.point(0, 'Hf6q', 'Roboter', 21, 28, 16, 21, 44, 59),
                dc.point(0, 'n4gK', 'Funken', 21, 36, 17, 21, 45, 36),
                dc.point(0, 'Hf6q', 'Funken', 21, 44, 59, 21, 52, 16),
                dc.point(0, 'n4gK', 'Funken', 21, 47, 37, 21, 55, 39),
                dc.point(0, 'Xgti', 'Funken', 21, 51, 39, 21, 59, 37),
                dc.point(0, 'Hf6q', 'Roboter', 21, 52, 16, 22, 4, 19),
                dc.point(0, 'pMaq', 'Funken', 21, 52, 59, 22, 8, 56),
                dc.point(0, 'Xgti', 'Funken', 21, 59, 37, 22, 59, 39),
                dc.point(0, 'Hf6q', 'Funken', 22, 4, 19, 22, 14, 16),
                dc.point(0, 'pMaq', 'Roboter', 22, 8, 56, 23, 2, 17),
                dc.point(0, 'n4gK', 'Funken', 22, 10, 17, 22, 15, 36),
                dc.point(0, 'Hf6q', 'Roboter', 22, 14, 16, 22, 42, 59),
                dc.point(0, 'n4gK', 'Roboter', 22, 15, 36, 22, 32, 57),
                dc.point(0, 'n4gK', 'Roboter', 22, 36, 56, 22, 45, 39),
                dc.point(0, 'Hf6q', 'Funken', 22, 42, 59, 22, 52, 56),
                dc.point(0, 'n4gK', 'Roboter', 22, 47, 36, 23, 5, 39),
                dc.point(0, 'Hf6q', 'Roboter', 22, 52, 56, 23, 3, 39),
                dc.point(0, 'pMaq', 'Funken', 23, 2, 17, 23, 44, 56),
                dc.point(0, 'Hf6q', 'Funken', 23, 3, 39, 23, 15, 36),
                dc.point(0, 'n4gK', 'Funken', 23, 5, 39, 23, 13, 36),
                dc.point(0, 'n4gK', 'Roboter', 23, 13, 36, 23, 26, 19),
                dc.point(0, 'Hf6q', 'Roboter', 23, 15, 36, 23, 21, 39),
                dc.point(0, 'Hf6q', 'Funken', 23, 21, 39, 23, 33, 36),
                dc.point(0, 'n4gK', 'Funken', 23, 26, 19, 23, 33, 36),
                dc.point(0, 'n4gK', 'Roboter', 23, 33, 36, 23, 39, 39)
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
export const DRILLDOWN_2019_01_15 = (dc) => {
    if (!typeCheck(dc, DataCruncher)) return [];
    return [
        SeriesDrill(BEACON(lwFq), [
            dc.point(1, 'lwFq', 'Roboter', 0, 14, 13, 0, 26, 14),
            dc.point(1, 'lwFq', 'Funken', 0, 26, 14, 0, 34, 56),
            dc.point(1, 'lwFq', 'Funken', 0, 35, 34, 0, 42, 56),
            dc.point(1, 'lwFq', 'Funken', 0, 44, 54, 1, 12, 53),
            dc.point(1, 'lwFq', 'Roboter', 1, 12, 53, 1, 33, 37),
            dc.point(1, 'lwFq', 'Stanzen', 1, 33, 37, 1, 50, 55),
            dc.point(1, 'lwFq', 'Stanzen', 1, 52, 57, 2, 2, 15),
            dc.point(1, 'lwFq', 'Funken', 2, 2, 15, 2, 12, 17),
            dc.point(1, 'lwFq', 'Stanzen', 2, 12, 17, 2, 56, 54),
            dc.point(1, 'lwFq', 'Roboter', 2, 56, 54, 3, 20, 15),
            dc.point(1, 'lwFq', 'Funken', 3, 20, 15, 3, 39, 37),
            dc.point(1, 'lwFq', 'Stanzen', 3, 39, 37, 4, 2, 55),
            dc.point(1, 'lwFq', 'Funken', 4, 2, 55, 4, 10, 57),
            dc.point(1, 'lwFq', 'Stanzen', 4, 10, 57, 4, 28, 55),
            dc.point(1, 'lwFq', 'Funken', 4, 28, 55, 4, 48, 54),
            dc.point(1, 'lwFq', 'Roboter', 4, 48, 54, 5, 28, 17),
            dc.point(1, 'lwFq', 'Funken', 5, 29, 35, 5, 35, 34),
            dc.point(1, 'lwFq', 'Roboter', 5, 35, 34, 5, 53, 35),
            dc.point(1, 'lwFq', 'Roboter', 5, 57, 34, 6, 7, 37),
            dc.point(1, 'lwFq', 'Roboter', 6, 11, 34, 6, 27, 37),
            dc.point(1, 'lwFq', 'Roboter', 6, 29, 34, 6, 45, 37),
            dc.point(1, 'lwFq', 'Funken', 6, 45, 37, 7, 1, 34),
            dc.point(1, 'lwFq', 'Roboter', 7, 1, 34, 7, 55, 37),
            dc.point(1, 'lwFq', 'Roboter', 8, 3, 34, 11, 37, 38),
            dc.point(1, 'lwFq', 'Funken', 11, 37, 38, 12, 9, 35),
            dc.point(1, 'lwFq', 'Roboter', 12, 9, 35, 14, 20, 18),
            dc.point(1, 'lwFq', 'Funken', 14, 20, 18, 14, 27, 35),
            dc.point(1, 'lwFq', 'Roboter', 14, 27, 35, 14, 39, 36),
            dc.point(1, 'lwFq', 'Roboter', 14, 43, 35, 14, 53, 36),
            dc.point(1, 'lwFq', 'Roboter', 14, 57, 35, 15, 17, 39),
            dc.point(1, 'lwFq', 'Roboter', 15, 21, 35, 19, 59, 37),
            dc.point(1, 'lwFq', 'Roboter', 20, 3, 36, 21, 22, 20)
        ]),
        SeriesDrill(BEACON(ofEz), [
            dc.point(1, 'ofEz', 'Funken', 0, 25, 36, 0, 35, 33),
            dc.point(1, 'ofEz', 'Roboter', 0, 35, 33, 2, 43, 37),
            dc.point(1, 'ofEz', 'Roboter', 2, 50, 14, 3, 1, 35),
            dc.point(1, 'ofEz', 'Roboter', 3, 6, 14, 3, 21, 35),
            dc.point(1, 'ofEz', 'Roboter', 3, 23, 34, 3, 35, 37),
            dc.point(1, 'ofEz', 'Roboter', 3, 42, 14, 3, 50, 57),
            dc.point(1, 'ofEz', 'Stanzen', 3, 50, 57, 3, 57, 34),
            dc.point(1, 'ofEz', 'Roboter', 4, 7, 34, 5, 23, 37),
            dc.point(1, 'ofEz', 'Roboter', 5, 25, 34, 5, 42, 15),
            dc.point(1, 'ofEz', 'Roboter', 5, 43, 34, 6, 11, 35),
            dc.point(1, 'ofEz', 'Roboter', 6, 13, 34, 7, 11, 35),
            dc.point(1, 'ofEz', 'Roboter', 7, 18, 14, 8, 6, 15),
            dc.point(1, 'ofEz', 'Funken', 8, 6, 15, 8, 29, 34),
            dc.point(1, 'ofEz', 'Funken', 8, 33, 35, 8, 51, 34),
            dc.point(1, 'ofEz', 'Roboter', 8, 51, 34, 9, 25, 35),
            dc.point(1, 'ofEz', 'Roboter', 9, 27, 34, 9, 35, 37),
            dc.point(1, 'ofEz', 'Funken', 9, 38, 15, 9, 52, 15),
            dc.point(1, 'ofEz', 'Roboter', 9, 52, 15, 11, 7, 38),
            dc.point(1, 'ofEz', 'Roboter', 11, 9, 35, 11, 21, 38),
            dc.point(1, 'ofEz', 'Funken', 11, 27, 38, 12, 28, 15),
            dc.point(1, 'ofEz', 'Funken', 12, 29, 38, 12, 44, 15),
            dc.point(1, 'ofEz', 'Funken', 12, 45, 38, 12, 52, 56),
            dc.point(1, 'ofEz', 'Roboter', 12, 57, 35, 13, 10, 16),
            dc.point(1, 'ofEz', 'Roboter', 13, 17, 35, 13, 26, 56),
            dc.point(1, 'ofEz', 'Roboter', 13, 28, 15, 13, 41, 36),
            dc.point(1, 'ofEz', 'Roboter', 13, 44, 55, 13, 52, 58),
            dc.point(1, 'ofEz', 'Funken', 13, 52, 58, 14, 0, 15),
            dc.point(1, 'ofEz', 'Funken', 14, 3, 36, 14, 9, 38),
            dc.point(1, 'ofEz', 'Funken', 14, 9, 38, 14, 14, 56),
            dc.point(1, 'ofEz', 'Funken', 14, 15, 38, 14, 24, 15),
            dc.point(1, 'ofEz', 'Roboter', 14, 24, 15, 17, 4, 58),
            dc.point(1, 'ofEz', 'Roboter', 17, 5, 35, 21, 3, 39)
        ]),
        SeriesDrill(BEACON(n4gK), [
            dc.point(1, 'n4gK', 'Roboter', 0, 4, 13, 10, 29, 36),
            dc.point(1, 'n4gK', 'Funken', 10, 29, 36, 10, 34, 58),
            dc.point(1, 'n4gK', 'Funken', 10, 42, 18, 10, 59, 38),
            dc.point(1, 'n4gK', 'Roboter', 11, 2, 15, 11, 7, 36),
            dc.point(1, 'n4gK', 'Funken', 11, 10, 58, 11, 26, 55),
            dc.point(1, 'n4gK', 'Roboter', 11, 55, 35, 12, 43, 36),
            dc.point(1, 'n4gK', 'Stanzen', 12, 51, 38, 12, 57, 36),
            dc.point(1, 'n4gK', 'Funken', 12, 57, 36, 13, 15, 35),
            dc.point(1, 'n4gK', 'Funken', 13, 23, 36, 13, 39, 38),
            dc.point(1, 'n4gK', 'Roboter', 13, 44, 15, 13, 58, 16),
            dc.point(1, 'n4gK', 'Roboter', 13, 59, 35, 14, 27, 38),
            dc.point(1, 'n4gK', 'Roboter', 14, 29, 35, 15, 5, 38),
            dc.point(1, 'n4gK', 'Roboter', 15, 7, 35, 16, 22, 19),
            dc.point(1, 'n4gK', 'Roboter', 16, 25, 35, 16, 39, 36),
            dc.point(1, 'n4gK', 'Funken', 16, 39, 36, 16, 45, 35),
            dc.point(1, 'n4gK', 'Funken', 16, 48, 56, 17, 1, 35),
            dc.point(1, 'n4gK', 'Roboter', 17, 9, 35, 18, 35, 38),
            dc.point(1, 'n4gK', 'Funken', 18, 35, 38, 18, 41, 35),
            dc.point(1, 'n4gK', 'Roboter', 18, 41, 35, 18, 54, 19),
            dc.point(1, 'n4gK', 'Roboter', 18, 55, 35, 19, 4, 17),
            dc.point(1, 'n4gK', 'Funken', 19, 4, 17, 20, 7, 39),
            dc.point(1, 'n4gK', 'Funken', 20, 7, 39, 20, 17, 36),
            dc.point(1, 'n4gK', 'Funken', 20, 20, 19, 20, 26, 16),
            dc.point(1, 'n4gK', 'Funken', 20, 32, 19, 20, 47, 36),
            dc.point(1, 'n4gK', 'Funken', 20, 51, 39, 21, 18, 17),
            dc.point(1, 'n4gK', 'Funken', 21, 18, 17, 21, 23, 39),
            dc.point(1, 'n4gK', 'Funken', 21, 23, 39, 21, 36, 17),
            dc.point(1, 'n4gK', 'Funken', 21, 36, 17, 21, 45, 36),
            dc.point(1, 'n4gK', 'Funken', 21, 47, 37, 21, 55, 39),
            dc.point(1, 'n4gK', 'Funken', 22, 10, 17, 22, 15, 36),
            dc.point(1, 'n4gK', 'Roboter', 22, 15, 36, 22, 32, 57),
            dc.point(1, 'n4gK', 'Roboter', 22, 36, 56, 22, 45, 39),
            dc.point(1, 'n4gK', 'Roboter', 22, 47, 36, 23, 5, 39),
            dc.point(1, 'n4gK', 'Funken', 23, 5, 39, 23, 13, 36),
            dc.point(1, 'n4gK', 'Roboter', 23, 13, 36, 23, 26, 19),
            dc.point(1, 'n4gK', 'Funken', 23, 26, 19, 23, 33, 36),
            dc.point(1, 'n4gK', 'Roboter', 23, 33, 36, 23, 39, 39)
        ]),
        SeriesDrill(BEACON(Hf6q), [
            dc.point(1, 'Hf6q', 'Funken', 0, 25, 34, 0, 35, 36),
            dc.point(1, 'Hf6q', 'Funken', 0, 35, 36, 0, 43, 34),
            dc.point(1, 'Hf6q', 'Funken', 0, 43, 34, 0, 59, 33),
            dc.point(1, 'Hf6q', 'Roboter', 0, 59, 33, 1, 19, 34),
            dc.point(1, 'Hf6q', 'Funken', 1, 19, 34, 1, 43, 36),
            dc.point(1, 'Hf6q', 'Funken', 1, 47, 35, 2, 57, 37),
            dc.point(1, 'Hf6q', 'Funken', 3, 1, 35, 3, 9, 37),
            dc.point(1, 'Hf6q', 'Funken', 3, 9, 37, 3, 15, 35),
            dc.point(1, 'Hf6q', 'Funken', 3, 23, 35, 3, 29, 37),
            dc.point(1, 'Hf6q', 'Funken', 3, 33, 35, 3, 51, 37),
            dc.point(1, 'Hf6q', 'Funken', 3, 53, 35, 4, 25, 37),
            dc.point(1, 'Hf6q', 'Funken', 4, 25, 37, 4, 33, 35),
            dc.point(1, 'Hf6q', 'Funken', 4, 33, 35, 4, 45, 37),
            dc.point(1, 'Hf6q', 'Funken', 4, 45, 37, 4, 57, 35),
            dc.point(1, 'Hf6q', 'Funken', 4, 57, 35, 5, 5, 37),
            dc.point(1, 'Hf6q', 'Funken', 5, 7, 35, 9, 13, 34),
            dc.point(1, 'Hf6q', 'Roboter', 9, 13, 34, 9, 21, 37),
            dc.point(1, 'Hf6q', 'Funken', 9, 25, 35, 10, 37, 35),
            dc.point(1, 'Hf6q', 'Funken', 10, 41, 36, 10, 58, 55),
            dc.point(1, 'Hf6q', 'Roboter', 10, 58, 55, 11, 42, 56),
            dc.point(1, 'Hf6q', 'Funken', 11, 42, 56, 11, 50, 15),
            dc.point(1, 'Hf6q', 'Roboter', 11, 50, 15, 13, 6, 16),
            dc.point(1, 'Hf6q', 'Funken', 13, 6, 16, 13, 27, 35),
            dc.point(1, 'Hf6q', 'Roboter', 13, 27, 35, 13, 32, 56),
            dc.point(1, 'Hf6q', 'Roboter', 13, 37, 35, 14, 42, 16),
            dc.point(1, 'Hf6q', 'Roboter', 14, 44, 55, 15, 0, 16),
            dc.point(1, 'Hf6q', 'Roboter', 15, 2, 55, 20, 19, 39),
            dc.point(1, 'Hf6q', 'Funken', 20, 19, 39, 21, 11, 36),
            dc.point(1, 'Hf6q', 'Roboter', 21, 11, 36, 21, 17, 39),
            dc.point(1, 'Hf6q', 'Funken', 21, 17, 39, 21, 28, 16),
            dc.point(1, 'Hf6q', 'Roboter', 21, 28, 16, 21, 44, 59),
            dc.point(1, 'Hf6q', 'Funken', 21, 44, 59, 21, 52, 16),
            dc.point(1, 'Hf6q', 'Roboter', 21, 52, 16, 22, 4, 19),
            dc.point(1, 'Hf6q', 'Funken', 22, 4, 19, 22, 14, 16),
            dc.point(1, 'Hf6q', 'Roboter', 22, 14, 16, 22, 42, 59),
            dc.point(1, 'Hf6q', 'Funken', 22, 42, 59, 22, 52, 56),
            dc.point(1, 'Hf6q', 'Roboter', 22, 52, 56, 23, 3, 39),
            dc.point(1, 'Hf6q', 'Funken', 23, 3, 39, 23, 15, 36),
            dc.point(1, 'Hf6q', 'Roboter', 23, 15, 36, 23, 21, 39),
            dc.point(1, 'Hf6q', 'Funken', 23, 21, 39, 23, 33, 36)
        ]),
        SeriesDrill(BEACON(QuLX), [
            dc.point(1, 'QuLX', 'Roboter', 0, 50, 13, 2, 20, 17),
            dc.point(1, 'QuLX', 'Roboter', 2, 21, 34, 3, 2, 57),
            dc.point(1, 'QuLX', 'Roboter', 3, 5, 34, 3, 19, 37),
            dc.point(1, 'QuLX', 'Roboter', 3, 23, 34, 3, 50, 57),
            dc.point(1, 'QuLX', 'Roboter', 3, 51, 34, 4, 15, 37),
            dc.point(1, 'QuLX', 'Roboter', 4, 21, 34, 4, 35, 37),
            dc.point(1, 'QuLX', 'Stanzen', 4, 35, 37, 4, 46, 14),
            dc.point(1, 'QuLX', 'Stanzen', 4, 49, 37, 5, 2, 15),
            dc.point(1, 'QuLX', 'Roboter', 5, 4, 14, 5, 9, 35),
            dc.point(1, 'QuLX', 'Funken', 5, 9, 35, 5, 17, 34),
            dc.point(1, 'QuLX', 'Roboter', 5, 17, 34, 5, 30, 15),
            dc.point(1, 'QuLX', 'Funken', 5, 30, 15, 5, 39, 37),
            dc.point(1, 'QuLX', 'Funken', 5, 39, 37, 5, 47, 34),
            dc.point(1, 'QuLX', 'Roboter', 5, 51, 34, 6, 5, 34)
        ]),
        SeriesDrill(BEACON(oiFK), [
            dc.point(1, 'oiFK', 'Stanzen', 2, 13, 37, 18, 4, 15)
        ]),
        SeriesDrill(BEACON(GmK6), [
            dc.point(1, 'GmK6', 'Funken', 4, 36, 55, 5, 4, 14),
            dc.point(1, 'GmK6', 'Roboter', 5, 4, 14, 5, 9, 35),
            dc.point(1, 'GmK6', 'Funken', 5, 9, 35, 5, 16, 14),
            dc.point(1, 'GmK6', 'Roboter', 5, 16, 14, 5, 22, 55),
            dc.point(1, 'GmK6', 'Funken', 5, 28, 15, 5, 37, 37),
            dc.point(1, 'GmK6', 'Roboter', 5, 40, 14, 5, 54, 57),
            dc.point(1, 'GmK6', 'Stanzen', 5, 54, 57, 7, 57, 35),
            dc.point(1, 'GmK6', 'Funken', 7, 57, 35, 10, 25, 35),
            dc.point(1, 'GmK6', 'Roboter', 10, 25, 35, 13, 58, 16),
            dc.point(1, 'GmK6', 'Funken', 13, 58, 16, 16, 6, 55)
        ]),
        SeriesDrill(BEACON(pMaq), [
            dc.point(1, 'pMaq', 'Funken', 5, 3, 35, 5, 9, 34),
            dc.point(1, 'pMaq', 'Roboter', 5, 9, 34, 6, 55, 35),
            dc.point(1, 'pMaq', 'Funken', 6, 55, 35, 7, 41, 34),
            dc.point(1, 'pMaq', 'Roboter', 7, 41, 34, 7, 46, 57),
            dc.point(1, 'pMaq', 'Stanzen', 7, 46, 57, 8, 12, 14),
            dc.point(1, 'pMaq', 'Roboter', 8, 12, 14, 8, 24, 58),
            dc.point(1, 'pMaq', 'Roboter', 8, 33, 34, 8, 46, 18),
            dc.point(1, 'pMaq', 'Stanzen', 8, 46, 18, 9, 0, 14),
            dc.point(1, 'pMaq', 'Roboter', 9, 0, 14, 9, 11, 38),
            dc.point(1, 'pMaq', 'Funken', 9, 14, 17, 9, 22, 18),
            dc.point(1, 'pMaq', 'Stanzen', 9, 22, 18, 10, 18, 17),
            dc.point(1, 'pMaq', 'Funken', 10, 18, 17, 10, 24, 15),
            dc.point(1, 'pMaq', 'Roboter', 10, 24, 15, 10, 38, 58),
            dc.point(1, 'pMaq', 'Roboter', 10, 40, 55, 13, 6, 16),
            dc.point(1, 'pMaq', 'Funken', 13, 6, 16, 13, 50, 15),
            dc.point(1, 'pMaq', 'Roboter', 13, 50, 15, 13, 58, 56),
            dc.point(1, 'pMaq', 'Funken', 13, 58, 56, 14, 10, 15),
            dc.point(1, 'pMaq', 'Roboter', 14, 10, 15, 14, 21, 39),
            dc.point(1, 'pMaq', 'Stanzen', 14, 21, 39, 15, 14, 56),
            dc.point(1, 'pMaq', 'Funken', 15, 14, 56, 16, 16, 15),
            dc.point(1, 'pMaq', 'Roboter', 16, 16, 15, 16, 28, 19),
            dc.point(1, 'pMaq', 'Stanzen', 16, 28, 19, 16, 54, 15),
            dc.point(1, 'pMaq', 'Roboter', 16, 54, 15, 17, 4, 16),
            dc.point(1, 'pMaq', 'Funken', 17, 4, 16, 17, 15, 35),
            dc.point(1, 'pMaq', 'Roboter', 17, 15, 35, 17, 21, 39),
            dc.point(1, 'pMaq', 'Stanzen', 17, 21, 39, 17, 34, 15),
            dc.point(1, 'pMaq', 'Roboter', 17, 34, 15, 17, 53, 38),
            dc.point(1, 'pMaq', 'Funken', 17, 53, 38, 18, 1, 35),
            dc.point(1, 'pMaq', 'Roboter', 18, 1, 35, 18, 45, 39),
            dc.point(1, 'pMaq', 'Stanzen', 18, 45, 39, 19, 54, 17),
            dc.point(1, 'pMaq', 'Funken', 19, 54, 17, 20, 20, 19),
            dc.point(1, 'pMaq', 'Funken', 20, 20, 19, 20, 28, 16),
            dc.point(1, 'pMaq', 'Roboter', 20, 28, 16, 21, 19, 37),
            dc.point(1, 'pMaq', 'Funken', 21, 19, 37, 21, 52, 59),
            dc.point(1, 'pMaq', 'Funken', 21, 52, 59, 22, 8, 56),
            dc.point(1, 'pMaq', 'Roboter', 22, 8, 56, 23, 2, 17),
            dc.point(1, 'pMaq', 'Funken', 23, 2, 17, 23, 44, 56)
        ]),
        SeriesDrill(BEACON(LLz2), [
            dc.point(1, 'LLz2', 'Dornerei', 9, 15, 34, 10, 5, 38),
            dc.point(1, 'LLz2', 'Dornerei', 10, 7, 34, 10, 19, 38),
            dc.point(1, 'LLz2', 'Stanzen', 10, 27, 38, 10, 33, 34),
            dc.point(1, 'LLz2', 'Dornerei', 10, 33, 34, 10, 39, 38)
        ]),
        SeriesDrill(BEACON(Xgti), [
            dc.point(1, 'Xgti', 'Funken', 9, 45, 37, 10, 27, 36),
            dc.point(1, 'Xgti', 'Funken', 10, 27, 36, 10, 33, 38),
            dc.point(1, 'Xgti', 'Funken', 10, 33, 38, 11, 55, 36),
            dc.point(1, 'Xgti', 'Funken', 11, 57, 38, 12, 3, 38),
            dc.point(1, 'Xgti', 'Funken', 12, 9, 36, 12, 15, 38),
            dc.point(1, 'Xgti', 'Stanzen', 12, 15, 38, 12, 35, 38),
            dc.point(1, 'Xgti', 'Funken', 12, 35, 38, 13, 1, 38),
            dc.point(1, 'Xgti', 'Stanzen', 13, 1, 38, 13, 9, 36),
            dc.point(1, 'Xgti', 'Funken', 13, 9, 36, 13, 23, 38),
            dc.point(1, 'Xgti', 'Stanzen', 13, 25, 38, 13, 31, 36),
            dc.point(1, 'Xgti', 'Funken', 13, 33, 38, 14, 33, 36),
            dc.point(1, 'Xgti', 'Funken', 14, 33, 36, 16, 35, 38),
            dc.point(1, 'Xgti', 'Funken', 16, 35, 38, 16, 43, 36),
            dc.point(1, 'Xgti', 'Funken', 16, 43, 36, 17, 19, 38),
            dc.point(1, 'Xgti', 'Funken', 17, 23, 36, 20, 51, 39),
            dc.point(1, 'Xgti', 'Funken', 20, 53, 37, 21, 51, 39),
            dc.point(1, 'Xgti', 'Funken', 21, 51, 39, 21, 59, 37),
            dc.point(1, 'Xgti', 'Funken', 21, 59, 37, 22, 59, 39)
        ]),
        SeriesDrill(BEACON(GYPG), [
            dc.point(1, 'GYPG', 'Stanzen', 9, 55, 38, 10, 4, 54)
        ]),
        SeriesDrill(BEACON(ox0d), [
            dc.point(1, 'ox0d', 'Dornerei', 15, 59, 35, 16, 19, 39),
            dc.point(1, 'ox0d', 'Stanzen', 16, 19, 39, 16, 39, 36),
            dc.point(1, 'ox0d', 'Stanzen', 16, 45, 39, 16, 53, 35),
            dc.point(1, 'ox0d', 'Dornerei', 16, 53, 35, 17, 1, 36),
            dc.point(1, 'ox0d', 'Funken', 17, 1, 36, 17, 7, 35),
            dc.point(1, 'ox0d', 'Dornerei', 17, 7, 35, 17, 15, 39),
            dc.point(1, 'ox0d', 'Funken', 17, 19, 36, 17, 25, 39),
            dc.point(1, 'ox0d', 'Stanzen', 17, 25, 39, 17, 53, 35),
            dc.point(1, 'ox0d', 'Dornerei', 17, 53, 35, 18, 7, 39),
            dc.point(1, 'ox0d', 'Stanzen', 18, 7, 39, 21, 37, 37)
        ])
    ]
};