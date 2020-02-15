import {DataCruncher} from "../../util/DataCruncher";
import {Series, SeriesDrill} from "../../util/models";
import {BEACON, GmK6, Hf6q, LLz2, lwFq, n4gK, ofEz, oiFK, ox0d, pMaq, Sfo7, UUWO, Xgti} from "../../../constants";
import {typeCheck} from "../../util/helpers";

/**
 *
 * @param {DataCruncher} dc
 * @return {[{data: *, name: Series.props, id: *}]|*[]}
 * @constructor
 */
export const OVERVIEW_2019_01_18 = (dc) => {
    if (!typeCheck(dc, DataCruncher)) return [];
    return [
        Series(dc.startDate, [
                dc.point(0, 'n4gK', 'Funken', 0, 14, 24, 0, 36, 26),
                dc.point(0, 'ofEz', 'Stanzen', 0, 16, 20, 0, 22, 24),
                dc.point(0, 'ofEz', 'Funken', 0, 22, 24, 3, 2, 21),
                dc.point(0, 'n4gK', 'Funken', 0, 36, 26, 0, 42, 44),
                dc.point(0, 'LLz2', 'Stanzen', 0, 38, 20, 0, 46, 48),
                dc.point(0, 'n4gK', 'Roboter', 0, 42, 44, 1, 2, 24),
                dc.point(0, 'Hf6q', 'Roboter', 0, 44, 44, 1, 18, 27),
                dc.point(0, 'LLz2', 'Dornerei', 0, 46, 48, 0, 54, 20),
                dc.point(0, 'pMaq', 'Funken', 0, 50, 26, 1, 42, 44),
                dc.point(0, 'LLz2', 'Stanzen', 0, 54, 20, 4, 22, 49),
                dc.point(0, 'GmK6', 'Funken', 1, 2, 24, 3, 35, 24),
                dc.point(0, 'n4gK', 'Roboter', 1, 6, 44, 2, 6, 24),
                dc.point(0, 'Hf6q', 'Funken', 1, 18, 27, 1, 44, 44),
                dc.point(0, 'pMaq', 'Roboter', 1, 42, 44, 2, 46, 27),
                dc.point(0, 'Hf6q', 'Funken', 1, 49, 7, 1, 58, 24),
                dc.point(0, 'Hf6q', 'Funken', 2, 0, 27, 2, 7, 24),
                dc.point(0, 'n4gK', 'Funken', 2, 6, 24, 2, 18, 44),
                dc.point(0, 'Hf6q', 'Roboter', 2, 10, 44, 2, 19, 7),
                dc.point(0, 'n4gK', 'Roboter', 2, 18, 44, 2, 30, 24),
                dc.point(0, 'Hf6q', 'Roboter', 2, 20, 44, 2, 40, 27),
                dc.point(0, 'n4gK', 'Funken', 2, 36, 24, 2, 49, 24),
                dc.point(0, 'Hf6q', 'Funken', 2, 40, 27, 2, 47, 24),
                dc.point(0, 'pMaq', 'Funken', 2, 46, 27, 5, 13, 25),
                dc.point(0, 'Hf6q', 'Funken', 2, 51, 47, 3, 18, 4),
                dc.point(0, 'n4gK', 'Roboter', 2, 52, 44, 3, 10, 24),
                dc.point(0, 'ofEz', 'Funken', 3, 4, 24, 3, 18, 21),
                dc.point(0, 'n4gK', 'Funken', 3, 10, 24, 3, 30, 44),
                dc.point(0, 'Hf6q', 'Roboter', 3, 18, 4, 4, 21, 45),
                dc.point(0, 'ofEz', 'Stanzen', 3, 18, 21, 3, 28, 24),
                dc.point(0, 'ofEz', 'Funken', 3, 28, 24, 6, 1, 53),
                dc.point(0, 'n4gK', 'Funken', 3, 34, 24, 4, 2, 45),
                dc.point(0, 'GmK6', 'Roboter', 3, 35, 24, 5, 50, 33),
                dc.point(0, 'lwFq', 'Funken', 4, 2, 24, 4, 8, 27),
                dc.point(0, 'n4gK', 'Roboter', 4, 2, 45, 4, 16, 24),
                dc.point(0, 'lwFq', 'Stanzen', 4, 10, 21, 5, 32, 27),
                dc.point(0, 'n4gK', 'Roboter', 4, 19, 25, 4, 42, 25),
                dc.point(0, 'Hf6q', 'Funken', 4, 21, 45, 4, 34, 45),
                dc.point(0, 'LLz2', 'Dornerei', 4, 22, 49, 5, 45, 53),
                dc.point(0, 'ox0d', 'Dornerei', 4, 38, 49, 4, 48, 21),
                dc.point(0, 'Hf6q', 'Funken', 4, 40, 25, 4, 46, 45),
                dc.point(0, 'n4gK', 'Funken', 4, 42, 25, 4, 49, 25),
                dc.point(0, 'Hf6q', 'Roboter', 4, 46, 45, 4, 59, 7),
                dc.point(0, 'ox0d', 'Stanzen', 4, 48, 21, 5, 22, 49),
                dc.point(0, 'n4gK', 'Funken', 4, 54, 25, 5, 30, 45),
                dc.point(0, 'Hf6q', 'Roboter', 5, 4, 45, 5, 27, 5),
                dc.point(0, 'pMaq', 'Funken', 5, 14, 27, 5, 23, 25),
                dc.point(0, 'ox0d', 'Dornerei', 5, 22, 49, 5, 35, 5),
                dc.point(0, 'pMaq', 'Roboter', 5, 23, 25, 5, 44, 33),
                dc.point(0, 'UUWO', 'Funken', 5, 26, 25, 5, 43, 53),
                dc.point(0, 'Hf6q', 'Roboter', 5, 28, 45, 6, 34, 33),
                dc.point(0, 'lwFq', 'Funken', 5, 32, 27, 5, 43, 53),
                dc.point(0, 'ox0d', 'Funken', 5, 35, 5, 6, 21, 47),
                dc.point(0, 'n4gK', 'Roboter', 5, 39, 25, 5, 47, 45),
                dc.point(0, 'lwFq', 'Stanzen', 5, 43, 53, 18, 10, 11),
                dc.point(0, 'LLz2', 'Stanzen', 5, 45, 53, 7, 58, 9),
                dc.point(0, 'n4gK', 'Funken', 5, 47, 45, 7, 15, 47),
                dc.point(0, 'GmK6', 'Stanzen', 5, 50, 33, 8, 14, 5),
                dc.point(0, 'pMaq', 'Stanzen', 5, 58, 33, 6, 16, 5),
                dc.point(0, 'ofEz', 'Funken', 6, 5, 45, 6, 21, 53),
                dc.point(0, 'pMaq', 'Stanzen', 6, 18, 33, 6, 26, 5),
                dc.point(0, 'ofEz', 'Stanzen', 6, 21, 53, 6, 47, 45),
                dc.point(0, 'ox0d', 'Funken', 6, 23, 45, 7, 31, 47),
                dc.point(0, 'pMaq', 'Roboter', 6, 26, 5, 6, 38, 33),
                dc.point(0, 'Hf6q', 'Roboter', 6, 38, 5, 7, 46, 25),
                dc.point(0, 'pMaq', 'Funken', 6, 45, 45, 6, 57, 53),
                dc.point(0, 'ofEz', 'Funken', 6, 47, 45, 7, 21, 53),
                dc.point(0, 'pMaq', 'Roboter', 7, 1, 25, 7, 15, 53),
                dc.point(0, 'pMaq', 'Stanzen', 7, 15, 53, 7, 22, 45),
                dc.point(0, 'n4gK', 'Funken', 7, 17, 45, 7, 36, 5),
                dc.point(0, 'ofEz', 'Stanzen', 7, 21, 53, 7, 53, 45),
                dc.point(0, 'pMaq', 'Roboter', 7, 22, 45, 7, 36, 33),
                dc.point(0, 'ox0d', 'Funken', 7, 31, 47, 7, 39, 45),
                dc.point(0, 'n4gK', 'Roboter', 7, 36, 5, 7, 51, 45),
                dc.point(0, 'ox0d', 'Funken', 7, 39, 45, 8, 47, 48),
                dc.point(0, 'pMaq', 'Stanzen', 7, 42, 33, 8, 10, 45),
                dc.point(0, 'Hf6q', 'Stanzen', 7, 49, 13, 8, 0, 5),
                dc.point(0, 'n4gK', 'Funken', 7, 51, 45, 8, 24, 5),
                dc.point(0, 'ofEz', 'Stanzen', 7, 55, 53, 9, 55, 45),
                dc.point(0, 'LLz2', 'Dornerei', 7, 58, 9, 8, 19, 53),
                dc.point(0, 'Hf6q', 'Roboter', 8, 0, 5, 8, 32, 25),
                dc.point(0, 'pMaq', 'Roboter', 8, 10, 45, 8, 17, 53),
                dc.point(0, 'GmK6', 'Roboter', 8, 14, 5, 13, 38, 26),
                dc.point(0, 'LLz2', 'Stanzen', 8, 19, 53, 8, 46, 9),
                dc.point(0, 'n4gK', 'Funken', 8, 25, 45, 9, 16, 10),
                dc.point(0, 'pMaq', 'Funken', 8, 28, 25, 8, 34, 45),
                dc.point(0, 'Hf6q', 'Funken', 8, 32, 25, 8, 37, 48),
                dc.point(0, 'pMaq', 'Roboter', 8, 34, 45, 8, 39, 53),
                dc.point(0, 'Hf6q', 'Funken', 8, 41, 45, 8, 48, 5),
                dc.point(0, 'pMaq', 'Funken', 8, 47, 45, 8, 54, 33),
                dc.point(0, 'LLz2', 'Stanzen', 8, 47, 53, 20, 58, 11),
                dc.point(0, 'Xgti', 'Stanzen', 8, 47, 53, 10, 2, 10),
                dc.point(0, 'Hf6q', 'Roboter', 8, 48, 5, 8, 57, 14),
                dc.point(0, 'ox0d', 'Funken', 8, 51, 45, 12, 45, 48),
                dc.point(0, 'pMaq', 'Stanzen', 8, 54, 33, 9, 0, 25),
                dc.point(0, 'Hf6q', 'Stanzen', 8, 57, 14, 9, 15, 45),
                dc.point(0, 'pMaq', 'Stanzen', 9, 5, 54, 9, 19, 45),
                dc.point(0, 'pMaq', 'Funken', 9, 19, 45, 9, 25, 48),
                dc.point(0, 'Hf6q', 'Stanzen', 9, 19, 54, 9, 59, 25),
                dc.point(0, 'pMaq', 'Funken', 9, 28, 25, 9, 36, 5),
                dc.point(0, 'Sfo7', 'Funken', 9, 33, 45, 9, 56, 34),
                dc.point(0, 'pMaq', 'Funken', 9, 37, 45, 9, 46, 45),
                dc.point(0, 'pMaq', 'Roboter', 9, 46, 45, 10, 15, 14),
                dc.point(0, 'ofEz', 'Funken', 9, 55, 45, 10, 1, 54),
                dc.point(0, 'Hf6q', 'Roboter', 9, 59, 25, 10, 7, 54),
                dc.point(0, 'ofEz', 'Stanzen', 10, 1, 54, 13, 51, 46),
                dc.point(0, 'Xgti', 'Dornerei', 10, 2, 10, 10, 21, 54),
                dc.point(0, 'Hf6q', 'Stanzen', 10, 13, 54, 10, 28, 25),
                dc.point(0, 'pMaq', 'Roboter', 10, 20, 5, 10, 30, 25),
                dc.point(0, 'Xgti', 'Stanzen', 10, 21, 54, 10, 28, 10),
                dc.point(0, 'Xgti', 'Dornerei', 10, 28, 10, 10, 41, 54),
                dc.point(0, 'pMaq', 'Roboter', 10, 32, 5, 10, 39, 45),
                dc.point(0, 'Hf6q', 'Funken', 10, 33, 45, 10, 42, 45),
                dc.point(0, 'Xgti', 'Stanzen', 10, 41, 54, 10, 51, 30),
                dc.point(0, 'pMaq', 'Roboter', 10, 42, 45, 10, 59, 48),
                dc.point(0, 'Hf6q', 'Roboter', 10, 42, 45, 10, 49, 54),
                dc.point(0, 'Xgti', 'Dornerei', 10, 51, 30, 10, 59, 54),
                dc.point(0, 'Hf6q', 'Roboter', 10, 52, 5, 11, 27, 46),
                dc.point(0, 'pMaq', 'Funken', 10, 59, 48, 11, 28, 5),
                dc.point(0, 'Xgti', 'Stanzen', 10, 59, 54, 12, 29, 30),
                dc.point(0, 'Hf6q', 'Funken', 11, 27, 46, 12, 14, 45),
                dc.point(0, 'pMaq', 'Funken', 11, 29, 48, 11, 36, 5),
                dc.point(0, 'pMaq', 'Roboter', 11, 36, 5, 11, 44, 28),
                dc.point(0, 'pMaq', 'Funken', 11, 44, 28, 11, 50, 5),
                dc.point(0, 'pMaq', 'Funken', 11, 51, 48, 12, 18, 26),
                dc.point(0, 'Hf6q', 'Roboter', 12, 14, 45, 12, 45, 6),
                dc.point(0, 'oiFK', 'Funken', 12, 19, 6, 17, 46, 6),
                dc.point(0, 'pMaq', 'Funken', 12, 19, 48, 12, 32, 6),
                dc.point(0, 'Xgti', 'Dornerei', 12, 29, 30, 13, 45, 14),
                dc.point(0, 'pMaq', 'Roboter', 12, 32, 6, 14, 59, 55),
                dc.point(0, 'ox0d', 'Funken', 12, 45, 48, 12, 53, 46),
                dc.point(0, 'Hf6q', 'Roboter', 12, 50, 6, 13, 23, 54),
                dc.point(0, 'ox0d', 'Funken', 12, 53, 46, 14, 31, 48),
                dc.point(0, 'Hf6q', 'Funken', 13, 28, 26, 13, 38, 6),
                dc.point(0, 'Hf6q', 'Roboter', 13, 38, 6, 13, 53, 54),
                dc.point(0, 'GmK6', 'Funken', 13, 38, 26, 13, 52, 6),
                dc.point(0, 'Xgti', 'Dornerei', 13, 46, 10, 13, 52, 34),
                dc.point(0, 'ofEz', 'Funken', 13, 51, 46, 14, 13, 54),
                dc.point(0, 'GmK6', 'Roboter', 13, 52, 6, 14, 48, 26),
                dc.point(0, 'Xgti', 'Stanzen', 13, 52, 34, 14, 0, 10),
                dc.point(0, 'Hf6q', 'Roboter', 14, 4, 6, 14, 13, 46),
                dc.point(0, 'Xgti', 'Dornerei', 14, 6, 50, 14, 23, 15),
                dc.point(0, 'Hf6q', 'Funken', 14, 13, 46, 14, 20, 46),
                dc.point(0, 'ofEz', 'Stanzen', 14, 13, 54, 14, 25, 46),
                dc.point(0, 'Hf6q', 'Roboter', 14, 20, 46, 14, 31, 46),
                dc.point(0, 'ofEz', 'Funken', 14, 25, 46, 14, 43, 55),
                dc.point(0, 'ox0d', 'Funken', 14, 31, 48, 14, 39, 46),
                dc.point(0, 'Hf6q', 'Roboter', 14, 34, 6, 14, 51, 55),
                dc.point(0, 'ox0d', 'Funken', 14, 39, 46, 15, 13, 48),
                dc.point(0, 'ofEz', 'Funken', 14, 47, 46, 15, 1, 55),
                dc.point(0, 'GmK6', 'Funken', 14, 48, 26, 16, 57, 26),
                dc.point(0, 'Hf6q', 'Stanzen', 14, 51, 55, 15, 1, 26),
                dc.point(0, 'pMaq', 'Stanzen', 14, 59, 55, 15, 9, 26),
                dc.point(0, 'Hf6q', 'Roboter', 15, 1, 26, 15, 28, 35),
                dc.point(0, 'ofEz', 'Stanzen', 15, 1, 55, 15, 31, 46),
                dc.point(0, 'pMaq', 'Roboter', 15, 9, 26, 16, 37, 46),
                dc.point(0, 'ox0d', 'Funken', 15, 13, 48, 15, 23, 46),
                dc.point(0, 'ox0d', 'Funken', 15, 23, 46, 15, 41, 49),
                dc.point(0, 'ofEz', 'Funken', 15, 31, 46, 15, 43, 55),
                dc.point(0, 'Hf6q', 'Roboter', 15, 35, 26, 15, 42, 35),
                dc.point(0, 'ox0d', 'Funken', 15, 41, 49, 15, 59, 46),
                dc.point(0, 'Hf6q', 'Stanzen', 15, 42, 35, 15, 48, 46),
                dc.point(0, 'ofEz', 'Stanzen', 15, 43, 55, 16, 1, 46),
                dc.point(0, 'Hf6q', 'Roboter', 15, 56, 6, 16, 34, 26),
                dc.point(0, 'ox0d', 'Funken', 15, 59, 46, 16, 5, 49),
                dc.point(0, 'ofEz', 'Funken', 16, 1, 46, 16, 31, 55),
                dc.point(0, 'ox0d', 'Funken', 16, 5, 49, 16, 11, 46),
                dc.point(0, 'ox0d', 'Funken', 16, 11, 46, 16, 35, 49),
                dc.point(0, 'ofEz', 'Funken', 16, 33, 46, 16, 43, 55),
                dc.point(0, 'ox0d', 'Funken', 16, 35, 49, 16, 43, 46),
                dc.point(0, 'Hf6q', 'Roboter', 16, 36, 6, 16, 57, 6),
                dc.point(0, 'pMaq', 'Funken', 16, 37, 46, 16, 49, 26),
                dc.point(0, 'ox0d', 'Funken', 16, 43, 46, 17, 31, 49),
                dc.point(0, 'ofEz', 'Funken', 16, 47, 46, 16, 53, 55),
                dc.point(0, 'pMaq', 'Roboter', 16, 49, 26, 16, 57, 46),
                dc.point(0, 'GmK6', 'Roboter', 16, 57, 26, 19, 37, 7),
                dc.point(0, 'ofEz', 'Funken', 16, 57, 46, 17, 5, 55),
                dc.point(0, 'pMaq', 'Funken', 16, 57, 46, 17, 30, 46),
                dc.point(0, 'Hf6q', 'Stanzen', 17, 1, 15, 17, 7, 26),
                dc.point(0, 'Hf6q', 'Roboter', 17, 7, 26, 17, 31, 56),
                dc.point(0, 'pMaq', 'Roboter', 17, 30, 46, 20, 21, 47),
                dc.point(0, 'ox0d', 'Funken', 17, 33, 46, 17, 55, 49),
                dc.point(0, 'Hf6q', 'Roboter', 17, 34, 46, 17, 55, 47),
                dc.point(0, 'Hf6q', 'Funken', 17, 55, 47, 18, 1, 26),
                dc.point(0, 'ox0d', 'Funken', 17, 55, 49, 18, 13, 47),
                dc.point(0, 'Hf6q', 'Roboter', 18, 1, 26, 18, 15, 56),
                dc.point(0, 'lwFq', 'Dornerei', 18, 10, 11, 18, 17, 56),
                dc.point(0, 'Hf6q', 'Stanzen', 18, 15, 56, 18, 37, 7),
                dc.point(0, 'ox0d', 'Funken', 18, 17, 49, 18, 25, 47),
                dc.point(0, 'lwFq', 'Stanzen', 18, 17, 56, 20, 26, 11),
                dc.point(0, 'ox0d', 'Funken', 18, 29, 49, 18, 47, 47),
                dc.point(0, 'Hf6q', 'Funken', 18, 37, 7, 18, 42, 46),
                dc.point(0, 'Hf6q', 'Funken', 18, 49, 47, 18, 56, 6),
                dc.point(0, 'ox0d', 'Funken', 18, 51, 49, 19, 5, 47),
                dc.point(0, 'Hf6q', 'Roboter', 18, 56, 6, 19, 1, 16),
                dc.point(0, 'ox0d', 'Funken', 19, 5, 47, 19, 11, 49),
                dc.point(0, 'Hf6q', 'Roboter', 19, 6, 6, 19, 29, 16),
                dc.point(0, 'ox0d', 'Funken', 19, 13, 47, 20, 57, 57),
                dc.point(0, 'Hf6q', 'Stanzen', 19, 29, 16, 19, 37, 7),
                dc.point(0, 'Hf6q', 'Funken', 19, 37, 7, 19, 42, 36),
                dc.point(0, 'GmK6', 'Funken', 19, 37, 7, 20, 16, 6),
                dc.point(0, 'Hf6q', 'Stanzen', 19, 42, 36, 19, 59, 47),
                dc.point(0, 'Hf6q', 'Funken', 19, 59, 47, 20, 7, 26),
                dc.point(0, 'Hf6q', 'Funken', 20, 11, 7, 20, 18, 6),
                dc.point(0, 'GmK6', 'Roboter', 20, 16, 6, 21, 59, 57),
                dc.point(0, 'Hf6q', 'Roboter', 20, 18, 6, 20, 37, 7),
                dc.point(0, 'pMaq', 'Funken', 20, 21, 47, 20, 32, 6),
                dc.point(0, 'lwFq', 'Dornerei', 20, 26, 11, 21, 5, 57),
                dc.point(0, 'pMaq', 'Roboter', 20, 32, 6, 20, 41, 47),
                dc.point(0, 'Hf6q', 'Funken', 20, 37, 7, 20, 48, 6),
                dc.point(0, 'pMaq', 'Funken', 20, 41, 47, 20, 56, 29),
                dc.point(0, 'Hf6q', 'Roboter', 20, 48, 6, 21, 11, 57),
                dc.point(0, 'pMaq', 'Roboter', 20, 58, 6, 21, 16, 29),
                dc.point(0, 'LLz2', 'Dornerei', 20, 58, 11, 21, 7, 58),
                dc.point(0, 'ox0d', 'Funken', 21, 1, 47, 21, 11, 57),
                dc.point(0, 'lwFq', 'Stanzen', 21, 5, 57, 21, 14, 11),
                dc.point(0, 'LLz2', 'Stanzen', 21, 7, 58, 21, 16, 11),
                dc.point(0, 'ox0d', 'Stanzen', 21, 11, 57, 21, 17, 49),
                dc.point(0, 'Hf6q', 'Stanzen', 21, 11, 57, 21, 30, 46),
                dc.point(0, 'lwFq', 'Dornerei', 21, 14, 11, 22, 9, 57),
                dc.point(0, 'LLz2', 'Dornerei', 21, 16, 11, 21, 37, 57),
                dc.point(0, 'pMaq', 'Funken', 21, 16, 29, 21, 29, 17),
                dc.point(0, 'ox0d', 'Funken', 21, 19, 48, 21, 55, 50),
                dc.point(0, 'pMaq', 'Funken', 21, 30, 29, 22, 1, 27),
                dc.point(0, 'Hf6q', 'Roboter', 21, 30, 46, 21, 40, 37),
                dc.point(0, 'LLz2', 'Stanzen', 21, 37, 57, 21, 44, 11),
                dc.point(0, 'Hf6q', 'Stanzen', 21, 40, 37, 21, 46, 7),
                dc.point(0, 'LLz2', 'Dornerei', 21, 44, 11, 21, 55, 57),
                dc.point(0, 'Hf6q', 'Roboter', 21, 46, 7, 22, 13, 57),
                dc.point(0, 'GmK6', 'Funken', 21, 59, 57, 22, 34, 47),
                dc.point(0, 'LLz2', 'Dornerei', 22, 0, 11, 22, 21, 57),
                dc.point(0, 'pMaq', 'Roboter', 22, 1, 27, 22, 29, 10),
                dc.point(0, 'ox0d', 'Funken', 22, 1, 58, 22, 14, 7),
                dc.point(0, 'lwFq', 'Dornerei', 22, 12, 11, 22, 27, 57),
                dc.point(0, 'ox0d', 'Funken', 22, 16, 2, 22, 21, 57),
                dc.point(0, 'Hf6q', 'Roboter', 22, 16, 7, 22, 27, 57),
                dc.point(0, 'lwFq', 'Stanzen', 22, 27, 57, 23, 8, 52),
                dc.point(0, 'ox0d', 'Roboter', 22, 28, 7, 23, 0, 46),
                dc.point(0, 'Hf6q', 'Roboter', 22, 30, 7, 23, 5, 59),
                dc.point(0, 'pMaq', 'Roboter', 22, 31, 27, 22, 53, 57),
                dc.point(0, 'GmK6', 'Roboter', 22, 34, 47, 22, 53, 57),
                dc.point(0, 'pMaq', 'Roboter', 22, 56, 7, 23, 27, 17),
                dc.point(0, 'Hf6q', 'Funken', 23, 5, 59, 23, 35, 27),
                dc.point(0, 'ox0d', 'Roboter', 23, 11, 27, 23, 19, 59),
                dc.point(0, 'ox0d', 'Roboter', 23, 21, 27, 23, 31, 19),
                dc.point(0, 'pMaq', 'Stanzen', 23, 27, 17, 23, 33, 27),
                dc.point(0, 'ox0d', 'Funken', 23, 31, 19, 23, 39, 27),
                dc.point(0, 'pMaq', 'Roboter', 23, 33, 27, 23, 53, 57)
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
export const DRILLDOWN_2019_01_18 = (dc) => {
    if (!typeCheck(dc, DataCruncher)) return [];
    return [
        SeriesDrill(BEACON(n4gK), dc.startDate, [
            dc.point(1, 'n4gK', 'Funken', 0, 14, 24, 0, 36, 26),
            dc.point(1, 'n4gK', 'Funken', 0, 36, 26, 0, 42, 44),
            dc.point(1, 'n4gK', 'Roboter', 0, 42, 44, 1, 2, 24),
            dc.point(1, 'n4gK', 'Roboter', 1, 6, 44, 2, 6, 24),
            dc.point(1, 'n4gK', 'Funken', 2, 6, 24, 2, 18, 44),
            dc.point(1, 'n4gK', 'Roboter', 2, 18, 44, 2, 30, 24),
            dc.point(1, 'n4gK', 'Funken', 2, 36, 24, 2, 49, 24),
            dc.point(1, 'n4gK', 'Roboter', 2, 52, 44, 3, 10, 24),
            dc.point(1, 'n4gK', 'Funken', 3, 10, 24, 3, 30, 44),
            dc.point(1, 'n4gK', 'Funken', 3, 34, 24, 4, 2, 45),
            dc.point(1, 'n4gK', 'Roboter', 4, 2, 45, 4, 16, 24),
            dc.point(1, 'n4gK', 'Roboter', 4, 19, 25, 4, 42, 25),
            dc.point(1, 'n4gK', 'Funken', 4, 42, 25, 4, 49, 25),
            dc.point(1, 'n4gK', 'Funken', 4, 54, 25, 5, 30, 45),
            dc.point(1, 'n4gK', 'Roboter', 5, 39, 25, 5, 47, 45),
            dc.point(1, 'n4gK', 'Funken', 5, 47, 45, 7, 15, 47),
            dc.point(1, 'n4gK', 'Funken', 7, 17, 45, 7, 36, 5),
            dc.point(1, 'n4gK', 'Roboter', 7, 36, 5, 7, 51, 45),
            dc.point(1, 'n4gK', 'Funken', 7, 51, 45, 8, 24, 5),
            dc.point(1, 'n4gK', 'Funken', 8, 25, 45, 9, 16, 10)
        ]),
        SeriesDrill(BEACON(ofEz), dc.startDate, [
            dc.point(1, 'ofEz', 'Stanzen', 0, 16, 20, 0, 22, 24),
            dc.point(1, 'ofEz', 'Funken', 0, 22, 24, 3, 2, 21),
            dc.point(1, 'ofEz', 'Funken', 3, 4, 24, 3, 18, 21),
            dc.point(1, 'ofEz', 'Stanzen', 3, 18, 21, 3, 28, 24),
            dc.point(1, 'ofEz', 'Funken', 3, 28, 24, 6, 1, 53),
            dc.point(1, 'ofEz', 'Funken', 6, 5, 45, 6, 21, 53),
            dc.point(1, 'ofEz', 'Stanzen', 6, 21, 53, 6, 47, 45),
            dc.point(1, 'ofEz', 'Funken', 6, 47, 45, 7, 21, 53),
            dc.point(1, 'ofEz', 'Stanzen', 7, 21, 53, 7, 53, 45),
            dc.point(1, 'ofEz', 'Stanzen', 7, 55, 53, 9, 55, 45),
            dc.point(1, 'ofEz', 'Funken', 9, 55, 45, 10, 1, 54),
            dc.point(1, 'ofEz', 'Stanzen', 10, 1, 54, 13, 51, 46),
            dc.point(1, 'ofEz', 'Funken', 13, 51, 46, 14, 13, 54),
            dc.point(1, 'ofEz', 'Stanzen', 14, 13, 54, 14, 25, 46),
            dc.point(1, 'ofEz', 'Funken', 14, 25, 46, 14, 43, 55),
            dc.point(1, 'ofEz', 'Funken', 14, 47, 46, 15, 1, 55),
            dc.point(1, 'ofEz', 'Stanzen', 15, 1, 55, 15, 31, 46),
            dc.point(1, 'ofEz', 'Funken', 15, 31, 46, 15, 43, 55),
            dc.point(1, 'ofEz', 'Stanzen', 15, 43, 55, 16, 1, 46),
            dc.point(1, 'ofEz', 'Funken', 16, 1, 46, 16, 31, 55),
            dc.point(1, 'ofEz', 'Funken', 16, 33, 46, 16, 43, 55),
            dc.point(1, 'ofEz', 'Funken', 16, 47, 46, 16, 53, 55),
            dc.point(1, 'ofEz', 'Funken', 16, 57, 46, 17, 5, 55)
        ]),
        SeriesDrill(BEACON(LLz2), dc.startDate, [
            dc.point(1, 'LLz2', 'Stanzen', 0, 38, 20, 0, 46, 48),
            dc.point(1, 'LLz2', 'Dornerei', 0, 46, 48, 0, 54, 20),
            dc.point(1, 'LLz2', 'Stanzen', 0, 54, 20, 4, 22, 49),
            dc.point(1, 'LLz2', 'Dornerei', 4, 22, 49, 5, 45, 53),
            dc.point(1, 'LLz2', 'Stanzen', 5, 45, 53, 7, 58, 9),
            dc.point(1, 'LLz2', 'Dornerei', 7, 58, 9, 8, 19, 53),
            dc.point(1, 'LLz2', 'Stanzen', 8, 19, 53, 8, 46, 9),
            dc.point(1, 'LLz2', 'Stanzen', 8, 47, 53, 20, 58, 11),
            dc.point(1, 'LLz2', 'Dornerei', 20, 58, 11, 21, 7, 58),
            dc.point(1, 'LLz2', 'Stanzen', 21, 7, 58, 21, 16, 11),
            dc.point(1, 'LLz2', 'Dornerei', 21, 16, 11, 21, 37, 57),
            dc.point(1, 'LLz2', 'Stanzen', 21, 37, 57, 21, 44, 11),
            dc.point(1, 'LLz2', 'Dornerei', 21, 44, 11, 21, 55, 57),
            dc.point(1, 'LLz2', 'Dornerei', 22, 0, 11, 22, 21, 57)
        ]),
        SeriesDrill(BEACON(Hf6q), dc.startDate, [
            dc.point(1, 'Hf6q', 'Roboter', 0, 44, 44, 1, 18, 27),
            dc.point(1, 'Hf6q', 'Funken', 1, 18, 27, 1, 44, 44),
            dc.point(1, 'Hf6q', 'Funken', 1, 49, 7, 1, 58, 24),
            dc.point(1, 'Hf6q', 'Funken', 2, 0, 27, 2, 7, 24),
            dc.point(1, 'Hf6q', 'Roboter', 2, 10, 44, 2, 19, 7),
            dc.point(1, 'Hf6q', 'Roboter', 2, 20, 44, 2, 40, 27),
            dc.point(1, 'Hf6q', 'Funken', 2, 40, 27, 2, 47, 24),
            dc.point(1, 'Hf6q', 'Funken', 2, 51, 47, 3, 18, 4),
            dc.point(1, 'Hf6q', 'Roboter', 3, 18, 4, 4, 21, 45),
            dc.point(1, 'Hf6q', 'Funken', 4, 21, 45, 4, 34, 45),
            dc.point(1, 'Hf6q', 'Funken', 4, 40, 25, 4, 46, 45),
            dc.point(1, 'Hf6q', 'Roboter', 4, 46, 45, 4, 59, 7),
            dc.point(1, 'Hf6q', 'Roboter', 5, 4, 45, 5, 27, 5),
            dc.point(1, 'Hf6q', 'Roboter', 5, 28, 45, 6, 34, 33),
            dc.point(1, 'Hf6q', 'Roboter', 6, 38, 5, 7, 46, 25),
            dc.point(1, 'Hf6q', 'Stanzen', 7, 49, 13, 8, 0, 5),
            dc.point(1, 'Hf6q', 'Roboter', 8, 0, 5, 8, 32, 25),
            dc.point(1, 'Hf6q', 'Funken', 8, 32, 25, 8, 37, 48),
            dc.point(1, 'Hf6q', 'Funken', 8, 41, 45, 8, 48, 5),
            dc.point(1, 'Hf6q', 'Roboter', 8, 48, 5, 8, 57, 14),
            dc.point(1, 'Hf6q', 'Stanzen', 8, 57, 14, 9, 15, 45),
            dc.point(1, 'Hf6q', 'Stanzen', 9, 19, 54, 9, 59, 25),
            dc.point(1, 'Hf6q', 'Roboter', 9, 59, 25, 10, 7, 54),
            dc.point(1, 'Hf6q', 'Stanzen', 10, 13, 54, 10, 28, 25),
            dc.point(1, 'Hf6q', 'Funken', 10, 33, 45, 10, 42, 45),
            dc.point(1, 'Hf6q', 'Roboter', 10, 42, 45, 10, 49, 54),
            dc.point(1, 'Hf6q', 'Roboter', 10, 52, 5, 11, 27, 46),
            dc.point(1, 'Hf6q', 'Funken', 11, 27, 46, 12, 14, 45),
            dc.point(1, 'Hf6q', 'Roboter', 12, 14, 45, 12, 45, 6),
            dc.point(1, 'Hf6q', 'Roboter', 12, 50, 6, 13, 23, 54),
            dc.point(1, 'Hf6q', 'Funken', 13, 28, 26, 13, 38, 6),
            dc.point(1, 'Hf6q', 'Roboter', 13, 38, 6, 13, 53, 54),
            dc.point(1, 'Hf6q', 'Roboter', 14, 4, 6, 14, 13, 46),
            dc.point(1, 'Hf6q', 'Funken', 14, 13, 46, 14, 20, 46),
            dc.point(1, 'Hf6q', 'Roboter', 14, 20, 46, 14, 31, 46),
            dc.point(1, 'Hf6q', 'Roboter', 14, 34, 6, 14, 51, 55),
            dc.point(1, 'Hf6q', 'Stanzen', 14, 51, 55, 15, 1, 26),
            dc.point(1, 'Hf6q', 'Roboter', 15, 1, 26, 15, 28, 35),
            dc.point(1, 'Hf6q', 'Roboter', 15, 35, 26, 15, 42, 35),
            dc.point(1, 'Hf6q', 'Stanzen', 15, 42, 35, 15, 48, 46),
            dc.point(1, 'Hf6q', 'Roboter', 15, 56, 6, 16, 34, 26),
            dc.point(1, 'Hf6q', 'Roboter', 16, 36, 6, 16, 57, 6),
            dc.point(1, 'Hf6q', 'Stanzen', 17, 1, 15, 17, 7, 26),
            dc.point(1, 'Hf6q', 'Roboter', 17, 7, 26, 17, 31, 56),
            dc.point(1, 'Hf6q', 'Roboter', 17, 34, 46, 17, 55, 47),
            dc.point(1, 'Hf6q', 'Funken', 17, 55, 47, 18, 1, 26),
            dc.point(1, 'Hf6q', 'Roboter', 18, 1, 26, 18, 15, 56),
            dc.point(1, 'Hf6q', 'Stanzen', 18, 15, 56, 18, 37, 7),
            dc.point(1, 'Hf6q', 'Funken', 18, 37, 7, 18, 42, 46),
            dc.point(1, 'Hf6q', 'Funken', 18, 49, 47, 18, 56, 6),
            dc.point(1, 'Hf6q', 'Roboter', 18, 56, 6, 19, 1, 16),
            dc.point(1, 'Hf6q', 'Roboter', 19, 6, 6, 19, 29, 16),
            dc.point(1, 'Hf6q', 'Stanzen', 19, 29, 16, 19, 37, 7),
            dc.point(1, 'Hf6q', 'Funken', 19, 37, 7, 19, 42, 36),
            dc.point(1, 'Hf6q', 'Stanzen', 19, 42, 36, 19, 59, 47),
            dc.point(1, 'Hf6q', 'Funken', 19, 59, 47, 20, 7, 26),
            dc.point(1, 'Hf6q', 'Funken', 20, 11, 7, 20, 18, 6),
            dc.point(1, 'Hf6q', 'Roboter', 20, 18, 6, 20, 37, 7),
            dc.point(1, 'Hf6q', 'Funken', 20, 37, 7, 20, 48, 6),
            dc.point(1, 'Hf6q', 'Roboter', 20, 48, 6, 21, 11, 57),
            dc.point(1, 'Hf6q', 'Stanzen', 21, 11, 57, 21, 30, 46),
            dc.point(1, 'Hf6q', 'Roboter', 21, 30, 46, 21, 40, 37),
            dc.point(1, 'Hf6q', 'Stanzen', 21, 40, 37, 21, 46, 7),
            dc.point(1, 'Hf6q', 'Roboter', 21, 46, 7, 22, 13, 57),
            dc.point(1, 'Hf6q', 'Roboter', 22, 16, 7, 22, 27, 57),
            dc.point(1, 'Hf6q', 'Roboter', 22, 30, 7, 23, 5, 59),
            dc.point(1, 'Hf6q', 'Funken', 23, 5, 59, 23, 35, 27)
        ]),
        SeriesDrill(BEACON(pMaq), dc.startDate, [
            dc.point(1, 'pMaq', 'Funken', 0, 50, 26, 1, 42, 44),
            dc.point(1, 'pMaq', 'Roboter', 1, 42, 44, 2, 46, 27),
            dc.point(1, 'pMaq', 'Funken', 2, 46, 27, 5, 13, 25),
            dc.point(1, 'pMaq', 'Funken', 5, 14, 27, 5, 23, 25),
            dc.point(1, 'pMaq', 'Roboter', 5, 23, 25, 5, 44, 33),
            dc.point(1, 'pMaq', 'Stanzen', 5, 58, 33, 6, 16, 5),
            dc.point(1, 'pMaq', 'Stanzen', 6, 18, 33, 6, 26, 5),
            dc.point(1, 'pMaq', 'Roboter', 6, 26, 5, 6, 38, 33),
            dc.point(1, 'pMaq', 'Funken', 6, 45, 45, 6, 57, 53),
            dc.point(1, 'pMaq', 'Roboter', 7, 1, 25, 7, 15, 53),
            dc.point(1, 'pMaq', 'Stanzen', 7, 15, 53, 7, 22, 45),
            dc.point(1, 'pMaq', 'Roboter', 7, 22, 45, 7, 36, 33),
            dc.point(1, 'pMaq', 'Stanzen', 7, 42, 33, 8, 10, 45),
            dc.point(1, 'pMaq', 'Roboter', 8, 10, 45, 8, 17, 53),
            dc.point(1, 'pMaq', 'Funken', 8, 28, 25, 8, 34, 45),
            dc.point(1, 'pMaq', 'Roboter', 8, 34, 45, 8, 39, 53),
            dc.point(1, 'pMaq', 'Funken', 8, 47, 45, 8, 54, 33),
            dc.point(1, 'pMaq', 'Stanzen', 8, 54, 33, 9, 0, 25),
            dc.point(1, 'pMaq', 'Stanzen', 9, 5, 54, 9, 19, 45),
            dc.point(1, 'pMaq', 'Funken', 9, 19, 45, 9, 25, 48),
            dc.point(1, 'pMaq', 'Funken', 9, 28, 25, 9, 36, 5),
            dc.point(1, 'pMaq', 'Funken', 9, 37, 45, 9, 46, 45),
            dc.point(1, 'pMaq', 'Roboter', 9, 46, 45, 10, 15, 14),
            dc.point(1, 'pMaq', 'Roboter', 10, 20, 5, 10, 30, 25),
            dc.point(1, 'pMaq', 'Roboter', 10, 32, 5, 10, 39, 45),
            dc.point(1, 'pMaq', 'Roboter', 10, 42, 45, 10, 59, 48),
            dc.point(1, 'pMaq', 'Funken', 10, 59, 48, 11, 28, 5),
            dc.point(1, 'pMaq', 'Funken', 11, 29, 48, 11, 36, 5),
            dc.point(1, 'pMaq', 'Roboter', 11, 36, 5, 11, 44, 28),
            dc.point(1, 'pMaq', 'Funken', 11, 44, 28, 11, 50, 5),
            dc.point(1, 'pMaq', 'Funken', 11, 51, 48, 12, 18, 26),
            dc.point(1, 'pMaq', 'Funken', 12, 19, 48, 12, 32, 6),
            dc.point(1, 'pMaq', 'Roboter', 12, 32, 6, 14, 59, 55),
            dc.point(1, 'pMaq', 'Stanzen', 14, 59, 55, 15, 9, 26),
            dc.point(1, 'pMaq', 'Roboter', 15, 9, 26, 16, 37, 46),
            dc.point(1, 'pMaq', 'Funken', 16, 37, 46, 16, 49, 26),
            dc.point(1, 'pMaq', 'Roboter', 16, 49, 26, 16, 57, 46),
            dc.point(1, 'pMaq', 'Funken', 16, 57, 46, 17, 30, 46),
            dc.point(1, 'pMaq', 'Roboter', 17, 30, 46, 20, 21, 47),
            dc.point(1, 'pMaq', 'Funken', 20, 21, 47, 20, 32, 6),
            dc.point(1, 'pMaq', 'Roboter', 20, 32, 6, 20, 41, 47),
            dc.point(1, 'pMaq', 'Funken', 20, 41, 47, 20, 56, 29),
            dc.point(1, 'pMaq', 'Roboter', 20, 58, 6, 21, 16, 29),
            dc.point(1, 'pMaq', 'Funken', 21, 16, 29, 21, 29, 17),
            dc.point(1, 'pMaq', 'Funken', 21, 30, 29, 22, 1, 27),
            dc.point(1, 'pMaq', 'Roboter', 22, 1, 27, 22, 29, 10),
            dc.point(1, 'pMaq', 'Roboter', 22, 31, 27, 22, 53, 57),
            dc.point(1, 'pMaq', 'Roboter', 22, 56, 7, 23, 27, 17),
            dc.point(1, 'pMaq', 'Stanzen', 23, 27, 17, 23, 33, 27),
            dc.point(1, 'pMaq', 'Roboter', 23, 33, 27, 23, 53, 57)
        ]),
        SeriesDrill(BEACON(GmK6), dc.startDate, [
            dc.point(1, 'GmK6', 'Funken', 1, 2, 24, 3, 35, 24),
            dc.point(1, 'GmK6', 'Roboter', 3, 35, 24, 5, 50, 33),
            dc.point(1, 'GmK6', 'Stanzen', 5, 50, 33, 8, 14, 5),
            dc.point(1, 'GmK6', 'Roboter', 8, 14, 5, 13, 38, 26),
            dc.point(1, 'GmK6', 'Funken', 13, 38, 26, 13, 52, 6),
            dc.point(1, 'GmK6', 'Roboter', 13, 52, 6, 14, 48, 26),
            dc.point(1, 'GmK6', 'Funken', 14, 48, 26, 16, 57, 26),
            dc.point(1, 'GmK6', 'Roboter', 16, 57, 26, 19, 37, 7),
            dc.point(1, 'GmK6', 'Funken', 19, 37, 7, 20, 16, 6),
            dc.point(1, 'GmK6', 'Roboter', 20, 16, 6, 21, 59, 57),
            dc.point(1, 'GmK6', 'Funken', 21, 59, 57, 22, 34, 47),
            dc.point(1, 'GmK6', 'Roboter', 22, 34, 47, 22, 53, 57)
        ]),
        SeriesDrill(BEACON(lwFq), dc.startDate, [
            dc.point(1, 'lwFq', 'Funken', 4, 2, 24, 4, 8, 27),
            dc.point(1, 'lwFq', 'Stanzen', 4, 10, 21, 5, 32, 27),
            dc.point(1, 'lwFq', 'Funken', 5, 32, 27, 5, 43, 53),
            dc.point(1, 'lwFq', 'Stanzen', 5, 43, 53, 18, 10, 11),
            dc.point(1, 'lwFq', 'Dornerei', 18, 10, 11, 18, 17, 56),
            dc.point(1, 'lwFq', 'Stanzen', 18, 17, 56, 20, 26, 11),
            dc.point(1, 'lwFq', 'Dornerei', 20, 26, 11, 21, 5, 57),
            dc.point(1, 'lwFq', 'Stanzen', 21, 5, 57, 21, 14, 11),
            dc.point(1, 'lwFq', 'Dornerei', 21, 14, 11, 22, 9, 57),
            dc.point(1, 'lwFq', 'Dornerei', 22, 12, 11, 22, 27, 57),
            dc.point(1, 'lwFq', 'Stanzen', 22, 27, 57, 23, 8, 52)
        ]),
        SeriesDrill(BEACON(ox0d), dc.startDate, [
            dc.point(1, 'ox0d', 'Dornerei', 4, 38, 49, 4, 48, 21),
            dc.point(1, 'ox0d', 'Stanzen', 4, 48, 21, 5, 22, 49),
            dc.point(1, 'ox0d', 'Dornerei', 5, 22, 49, 5, 35, 5),
            dc.point(1, 'ox0d', 'Funken', 5, 35, 5, 6, 21, 47),
            dc.point(1, 'ox0d', 'Funken', 6, 23, 45, 7, 31, 47),
            dc.point(1, 'ox0d', 'Funken', 7, 31, 47, 7, 39, 45),
            dc.point(1, 'ox0d', 'Funken', 7, 39, 45, 8, 47, 48),
            dc.point(1, 'ox0d', 'Funken', 8, 51, 45, 12, 45, 48),
            dc.point(1, 'ox0d', 'Funken', 12, 45, 48, 12, 53, 46),
            dc.point(1, 'ox0d', 'Funken', 12, 53, 46, 14, 31, 48),
            dc.point(1, 'ox0d', 'Funken', 14, 31, 48, 14, 39, 46),
            dc.point(1, 'ox0d', 'Funken', 14, 39, 46, 15, 13, 48),
            dc.point(1, 'ox0d', 'Funken', 15, 13, 48, 15, 23, 46),
            dc.point(1, 'ox0d', 'Funken', 15, 23, 46, 15, 41, 49),
            dc.point(1, 'ox0d', 'Funken', 15, 41, 49, 15, 59, 46),
            dc.point(1, 'ox0d', 'Funken', 15, 59, 46, 16, 5, 49),
            dc.point(1, 'ox0d', 'Funken', 16, 5, 49, 16, 11, 46),
            dc.point(1, 'ox0d', 'Funken', 16, 11, 46, 16, 35, 49),
            dc.point(1, 'ox0d', 'Funken', 16, 35, 49, 16, 43, 46),
            dc.point(1, 'ox0d', 'Funken', 16, 43, 46, 17, 31, 49),
            dc.point(1, 'ox0d', 'Funken', 17, 33, 46, 17, 55, 49),
            dc.point(1, 'ox0d', 'Funken', 17, 55, 49, 18, 13, 47),
            dc.point(1, 'ox0d', 'Funken', 18, 17, 49, 18, 25, 47),
            dc.point(1, 'ox0d', 'Funken', 18, 29, 49, 18, 47, 47),
            dc.point(1, 'ox0d', 'Funken', 18, 51, 49, 19, 5, 47),
            dc.point(1, 'ox0d', 'Funken', 19, 5, 47, 19, 11, 49),
            dc.point(1, 'ox0d', 'Funken', 19, 13, 47, 20, 57, 57),
            dc.point(1, 'ox0d', 'Funken', 21, 1, 47, 21, 11, 57),
            dc.point(1, 'ox0d', 'Stanzen', 21, 11, 57, 21, 17, 49),
            dc.point(1, 'ox0d', 'Funken', 21, 19, 48, 21, 55, 50),
            dc.point(1, 'ox0d', 'Funken', 22, 1, 58, 22, 14, 7),
            dc.point(1, 'ox0d', 'Funken', 22, 16, 2, 22, 21, 57),
            dc.point(1, 'ox0d', 'Roboter', 22, 28, 7, 23, 0, 46),
            dc.point(1, 'ox0d', 'Roboter', 23, 11, 27, 23, 19, 59),
            dc.point(1, 'ox0d', 'Roboter', 23, 21, 27, 23, 31, 19),
            dc.point(1, 'ox0d', 'Funken', 23, 31, 19, 23, 39, 27)
        ]),
        SeriesDrill(BEACON(UUWO), dc.startDate, [
            dc.point(1, 'UUWO', 'Funken', 5, 26, 25, 5, 43, 53),
        ]),
        SeriesDrill(BEACON(Xgti), dc.startDate, [
            dc.point(1, 'Xgti', 'Stanzen', 8, 47, 53, 10, 2, 10),
            dc.point(1, 'Xgti', 'Dornerei', 10, 2, 10, 10, 21, 54),
            dc.point(1, 'Xgti', 'Stanzen', 10, 21, 54, 10, 28, 10),
            dc.point(1, 'Xgti', 'Dornerei', 10, 28, 10, 10, 41, 54),
            dc.point(1, 'Xgti', 'Stanzen', 10, 41, 54, 10, 51, 30),
            dc.point(1, 'Xgti', 'Dornerei', 10, 51, 30, 10, 59, 54),
            dc.point(1, 'Xgti', 'Stanzen', 10, 59, 54, 12, 29, 30),
            dc.point(1, 'Xgti', 'Dornerei', 12, 29, 30, 13, 45, 14),
            dc.point(1, 'Xgti', 'Dornerei', 13, 46, 10, 13, 52, 34),
            dc.point(1, 'Xgti', 'Stanzen', 13, 52, 34, 14, 0, 10),
            dc.point(1, 'Xgti', 'Dornerei', 14, 6, 50, 14, 23, 15)
        ]),
        SeriesDrill(BEACON(Sfo7), dc.startDate, [
            dc.point(1, 'Sfo7', 'Funken', 9, 33, 45, 9, 56, 34)
        ]),
        SeriesDrill(BEACON(oiFK), dc.startDate, [
            dc.point(1, 'oiFK', 'Funken', 12, 19, 6, 17, 46, 6)
        ]),
    ]
};