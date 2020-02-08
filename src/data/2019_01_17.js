import {DataCruncher} from "../util/DataCruncher";
import {Series, SeriesDrill} from "../util/models";
import {BEACON, GmK6, GYPG, Hf6q, LLz2, lwFq, n4gK, ofEZ, oiFK, ox0d, pMaq, QuLX, Xgti} from "../../constants";

//TODO add drilldown date
export const OVERVIEW_2019_01_17 = (dc) => {
    return [
        Series('Overview', 'overview', [
                dc.point(0, 'pMaq', 'Roboter', 0, 10, 19, 0, 21, 3),
                dc.point(0, 'ox0d', 'Stanzen', 0, 12, 56, 0, 29, 2),
                dc.point(0, 'pMaq', 'Roboter', 0, 22, 59, 1, 7, 3),
                dc.point(0, 'ox0d', 'Stanzen', 0, 32, 56, 1, 19, 2),
                dc.point(0, 'Hf6q', 'Roboter', 0, 40, 59, 2, 21, 41),
                dc.point(0, 'lwFq', 'Roboter', 0, 57, 39, 1, 11, 43),
                dc.point(0, 'pMaq', 'Funken', 1, 7, 3, 1, 53, 39),
                dc.point(0, 'lwFq', 'Funken', 1, 15, 3, 1, 23, 39),
                dc.point(0, 'ox0d', 'Dornerei', 1, 19, 2, 1, 28, 56),
                dc.point(0, 'lwFq', 'Funken', 1, 27, 3, 1, 32, 21),
                dc.point(0, 'ox0d', 'Stanzen', 1, 28, 56, 1, 35, 2),
                dc.point(0, 'lwFq', 'Funken', 1, 33, 3, 1, 50, 59),
                dc.point(0, 'ox0d', 'Dornerei', 1, 35, 2, 1, 46, 56),
                dc.point(0, 'LLz2', 'Stanzen', 1, 40, 56, 2, 23, 2),
                dc.point(0, 'ox0d', 'Stanzen', 1, 46, 56, 1, 57, 3),
                dc.point(0, 'Xgti', 'Funken', 1, 47, 1, 2, 19, 3),
                dc.point(0, 'ox0d', 'Dornerei', 1, 57, 3, 2, 38, 56),
                dc.point(0, 'pMaq', 'Funken', 1, 57, 3, 3, 21, 41),
                dc.point(0, 'lwFq', 'Funken', 2, 1, 3, 2, 54, 56),
                dc.point(0, 'Xgti', 'Funken', 2, 19, 3, 2, 31, 1),
                dc.point(0, 'Hf6q', 'Funken', 2, 21, 41, 4, 34, 59),
                dc.point(0, 'LLz2', 'Stanzen', 2, 26, 56, 2, 49, 3),
                dc.point(0, 'Xgti', 'Funken', 2, 33, 4, 3, 44, 57),
                dc.point(0, 'ox0d', 'Stanzen', 2, 38, 56, 2, 47, 3),
                dc.point(0, 'GmK6', 'Roboter', 2, 42, 19, 7, 59, 1),
                dc.point(0, 'ox0d', 'Dornerei', 2, 47, 3, 3, 6, 56),
                dc.point(0, 'LLz2', 'Stanzen', 2, 54, 56, 3, 17, 3),
                dc.point(0, 'lwFq', 'Roboter', 2, 57, 39, 3, 5, 1),
                dc.point(0, 'ox0d', 'Stanzen', 3, 6, 56, 4, 3, 3),
                dc.point(0, 'lwFq', 'Funken', 3, 7, 3, 3, 12, 59),
                dc.point(0, 'lwFq', 'Roboter', 3, 12, 59, 3, 18, 21),
                dc.point(0, 'LLz2', 'Dornerei', 3, 17, 3, 3, 50, 57),
                dc.point(0, 'lwFq', 'Roboter', 3, 21, 39, 3, 32, 21),
                dc.point(0, 'pMaq', 'Funken', 3, 21, 41, 4, 6, 19),
                dc.point(0, 'lwFq', 'Roboter', 3, 34, 59, 3, 46, 24),
                dc.point(0, 'Xgti', 'Stanzen', 3, 44, 57, 3, 51, 4),
                dc.point(0, 'Xgti', 'Stanzen', 3, 52, 57, 4, 1, 1),
                dc.point(0, 'lwFq', 'Roboter', 3, 52, 59, 4, 37, 1),
                dc.point(0, 'LLz2', 'Dornerei', 3, 55, 3, 4, 30, 57),
                dc.point(0, 'ox0d', 'Dornerei', 4, 3, 3, 4, 12, 57),
                dc.point(0, 'pMaq', 'Roboter', 4, 6, 19, 4, 15, 44),
                dc.point(0, 'ox0d', 'Dornerei', 4, 17, 3, 4, 44, 57),
                dc.point(0, 'pMaq', 'Roboter', 4, 18, 59, 4, 53, 41),
                dc.point(0, 'n4gK', 'Funken', 4, 19, 1, 4, 37, 4),
                dc.point(0, 'Hf6q', 'Roboter', 4, 34, 59, 4, 42, 21),
                dc.point(0, 'LLz2', 'Dornerei', 4, 35, 3, 4, 40, 57),
                dc.point(0, 'n4gK', 'Funken', 4, 37, 4, 4, 55, 1),
                dc.point(0, 'Hf6q', 'Funken', 4, 42, 21, 4, 47, 39),
                dc.point(0, 'lwFq', 'Roboter', 4, 42, 59, 4, 57, 4),
                dc.point(0, 'LLz2', 'Dornerei', 4, 43, 3, 8, 20, 57),
                dc.point(0, 'ox0d', 'Stanzen', 4, 44, 57, 4, 59, 3),
                dc.point(0, 'Hf6q', 'Funken', 4, 51, 41, 4, 58, 59),
                dc.point(0, 'n4gK', 'Funken', 4, 55, 1, 5, 17, 4),
                dc.point(0, 'pMaq', 'Roboter', 4, 58, 19, 5, 9, 41),
                dc.point(0, 'Hf6q', 'Roboter', 4, 58, 59, 5, 13, 41),
                dc.point(0, 'lwFq', 'Roboter', 4, 58, 59, 5, 15, 4),
                dc.point(0, 'ox0d', 'Dornerei', 4, 59, 3, 5, 6, 57),
                dc.point(0, 'ox0d', 'Stanzen', 5, 6, 57, 9, 33, 4),
                dc.point(0, 'pMaq', 'Funken', 5, 9, 41, 5, 18, 59),
                dc.point(0, 'lwFq', 'Funken', 5, 15, 4, 5, 20, 59),
                dc.point(0, 'n4gK', 'Funken', 5, 17, 4, 5, 25, 1),
                dc.point(0, 'Hf6q', 'Roboter', 5, 17, 39, 5, 27, 1),
                dc.point(0, 'pMaq', 'Roboter', 5, 18, 59, 5, 27, 1),
                dc.point(0, 'lwFq', 'Roboter', 5, 20, 59, 6, 7, 1),
                dc.point(0, 'n4gK', 'Funken', 5, 25, 1, 5, 39, 4),
                dc.point(0, 'Hf6q', 'Funken', 5, 27, 1, 5, 44, 19),
                dc.point(0, 'pMaq', 'Funken', 5, 27, 1, 5, 44, 19),
                dc.point(0, 'n4gK', 'Funken', 5, 39, 4, 6, 19, 1),
                dc.point(0, 'pMaq', 'Roboter', 5, 44, 19, 5, 58, 21),
                dc.point(0, 'Hf6q', 'Funken', 5, 51, 1, 5, 56, 59),
                dc.point(0, 'Hf6q', 'Roboter', 5, 56, 59, 6, 34, 21),
                dc.point(0, 'pMaq', 'Funken', 5, 58, 21, 6, 4, 19),
                dc.point(0, 'pMaq', 'Roboter', 6, 4, 19, 6, 19, 1),
                dc.point(0, 'lwFq', 'Roboter', 6, 10, 59, 6, 31, 4),
                dc.point(0, 'n4gK', 'Funken', 6, 19, 1, 6, 29, 6),
                dc.point(0, 'pMaq', 'Funken', 6, 19, 1, 6, 27, 44),
                dc.point(0, 'pMaq', 'Funken', 6, 27, 44, 6, 45, 21),
                dc.point(0, 'n4gK', 'Funken', 6, 29, 6, 7, 15, 1),
                dc.point(0, 'lwFq', 'Roboter', 6, 37, 21, 7, 15, 1),
                dc.point(0, 'pMaq', 'Roboter', 6, 45, 21, 7, 30, 24),
                dc.point(0, 'Hf6q', 'Roboter', 6, 46, 1, 7, 9, 1),
                dc.point(0, 'Hf6q', 'Roboter', 7, 12, 1, 8, 3, 2),
                dc.point(0, 'n4gK', 'Funken', 7, 15, 1, 7, 21, 4),
                dc.point(0, 'lwFq', 'Funken', 7, 15, 1, 7, 21, 21),
                dc.point(0, 'n4gK', 'Funken', 7, 21, 4, 7, 41, 1),
                dc.point(0, 'lwFq', 'Roboter', 7, 21, 21, 8, 7, 4),
                dc.point(0, 'pMaq', 'Funken', 7, 38, 24, 8, 4, 1),
                dc.point(0, 'n4gK', 'Funken', 7, 41, 1, 8, 33, 4),
                dc.point(0, 'Hf6q', 'Roboter', 8, 6, 1, 9, 13, 42),
                dc.point(0, 'pMaq', 'Funken', 8, 8, 24, 8, 14, 1),
                dc.point(0, 'lwFq', 'Roboter', 8, 11, 21, 14, 2, 58),
                dc.point(0, 'pMaq', 'Roboter', 8, 14, 1, 11, 2, 25),
                dc.point(0, 'LLz2', 'Stanzen', 8, 20, 57, 8, 31, 4),
                dc.point(0, 'LLz2', 'Dornerei', 8, 31, 4, 8, 42, 57),
                dc.point(0, 'n4gK', 'Funken', 8, 33, 4, 8, 41, 2),
                dc.point(0, 'n4gK', 'Funken', 8, 41, 2, 10, 1, 4),
                dc.point(0, 'LLz2', 'Stanzen', 8, 42, 57, 8, 57, 4),
                dc.point(0, 'LLz2', 'Dornerei', 8, 57, 4, 9, 8, 57),
                dc.point(0, 'LLz2', 'Dornerei', 9, 13, 4, 11, 38, 58),
                dc.point(0, 'Hf6q', 'Roboter', 9, 18, 2, 9, 25, 2),
                dc.point(0, 'Hf6q', 'Funken', 9, 25, 2, 9, 30, 42),
                dc.point(0, 'Hf6q', 'Roboter', 9, 30, 42, 9, 43, 2),
                dc.point(0, 'ox0d', 'Stanzen', 9, 34, 58, 9, 57, 4),
                dc.point(0, 'Hf6q', 'Roboter', 9, 45, 22, 10, 23, 42),
                dc.point(0, 'ox0d', 'Dornerei', 9, 57, 4, 10, 10, 58),
                dc.point(0, 'n4gK', 'Funken', 10, 1, 4, 10, 11, 2),
                dc.point(0, 'n4gK', 'Funken', 10, 11, 2, 10, 39, 5),
                dc.point(0, 'ox0d', 'Dornerei', 10, 15, 4, 10, 34, 58),
                dc.point(0, 'Hf6q', 'Funken', 10, 23, 42, 10, 29, 22),
                dc.point(0, 'Hf6q', 'Roboter', 10, 29, 22, 10, 37, 5),
                dc.point(0, 'ofEz', 'Funken', 10, 31, 4, 10, 41, 22),
                dc.point(0, 'ox0d', 'Stanzen', 10, 34, 58, 11, 21, 4),
                dc.point(0, 'Hf6q', 'Roboter', 10, 39, 22, 11, 4, 22),
                dc.point(0, 'ofEz', 'Roboter', 10, 41, 22, 12, 3, 2),
                dc.point(0, 'n4gK', 'Funken', 10, 45, 5, 11, 9, 2),
                dc.point(0, 'pMaq', 'Funken', 11, 2, 25, 11, 9, 22),
                dc.point(0, 'Hf6q', 'Roboter', 11, 6, 2, 11, 17, 42),
                dc.point(0, 'pMaq', 'Roboter', 11, 9, 22, 11, 19, 45),
                dc.point(0, 'n4gK', 'Funken', 11, 13, 5, 11, 31, 2),
                dc.point(0, 'Hf6q', 'Funken', 11, 17, 42, 11, 24, 2),
                dc.point(0, 'ox0d', 'Dornerei', 11, 21, 4, 11, 26, 58),
                dc.point(0, 'Hf6q', 'Roboter', 11, 24, 2, 11, 29, 42),
                dc.point(0, 'ox0d', 'Stanzen', 11, 26, 58, 11, 39, 4),
                dc.point(0, 'pMaq', 'Roboter', 11, 27, 22, 12, 31, 2),
                dc.point(0, 'Hf6q', 'Funken', 11, 29, 42, 11, 39, 22),
                dc.point(0, 'n4gK', 'Funken', 11, 31, 2, 13, 25, 5),
                dc.point(0, 'Hf6q', 'Roboter', 11, 39, 22, 11, 53, 2),
                dc.point(0, 'LLz2', 'Dornerei', 11, 41, 4, 12, 0, 58),
                dc.point(0, 'Hf6q', 'Funken', 11, 53, 2, 12, 1, 22),
                dc.point(0, 'Hf6q', 'Roboter', 12, 1, 22, 12, 7, 2),
                dc.point(0, 'ofEz', 'Funken', 12, 3, 2, 12, 17, 22),
                dc.point(0, 'LLz2', 'Dornerei', 12, 5, 4, 12, 56, 58),
                dc.point(0, 'Hf6q', 'Roboter', 12, 9, 22, 12, 19, 2),
                dc.point(0, 'ofEz', 'Funken', 12, 21, 2, 12, 49, 22),
                dc.point(0, 'Hf6q', 'Roboter', 12, 21, 22, 15, 23, 43),
                dc.point(0, 'pMaq', 'Roboter', 12, 33, 22, 15, 20, 23),
                dc.point(0, 'ofEz', 'Roboter', 12, 49, 22, 12, 55, 2),
                dc.point(0, 'ofEz', 'Funken', 12, 55, 2, 13, 19, 5),
                dc.point(0, 'LLz2', 'Dornerei', 12, 59, 4, 13, 6, 58),
                dc.point(0, 'LLz2', 'Dornerei', 13, 10, 46, 14, 2, 58),
                dc.point(0, 'ofEz', 'Funken', 13, 19, 5, 13, 25, 2),
                dc.point(0, 'n4gK', 'Funken', 13, 31, 5, 13, 45, 2),
                dc.point(0, 'ofEz', 'Funken', 13, 33, 2, 14, 10, 58),
                dc.point(0, 'n4gK', 'Funken', 13, 47, 5, 14, 11, 2),
                dc.point(0, 'lwFq', 'Stanzen', 14, 2, 58, 14, 28, 2),
                dc.point(0, 'LLz2', 'Dornerei', 14, 6, 46, 15, 22, 58),
                dc.point(0, 'ofEz', 'Stanzen', 14, 10, 58, 14, 25, 2),
                dc.point(0, 'n4gK', 'Funken', 14, 11, 2, 15, 9, 5),
                dc.point(0, 'lwFq', 'Roboter', 14, 28, 2, 16, 6, 25),
                dc.point(0, 'ofEz', 'Funken', 14, 29, 2, 15, 14, 58),
                dc.point(0, 'n4gK', 'Funken', 15, 9, 5, 15, 33, 3),
                dc.point(0, 'ofEz', 'Stanzen', 15, 14, 58, 15, 49, 3),
                dc.point(0, 'pMaq', 'Roboter', 15, 21, 23, 16, 59, 45),
                dc.point(0, 'LLz2', 'Stanzen', 15, 22, 58, 16, 20, 47),
                dc.point(0, 'Hf6q', 'Funken', 15, 29, 5, 16, 4, 43),
                dc.point(0, 'n4gK', 'Funken', 15, 33, 3, 15, 47, 5),
                dc.point(0, 'WGSU', 'Funken', 15, 47, 3, 16, 0, 19),
                dc.point(0, 'n4gK', 'Funken', 15, 49, 3, 16, 10, 25),
                dc.point(0, 'ofEz', 'Funken', 15, 49, 3, 16, 0, 19),
                dc.point(0, 'nnhk', 'Stanzen', 15, 50, 58, 16, 2, 47),
                dc.point(0, 'ofEz', 'Funken', 16, 2, 23, 16, 18, 19),
                dc.point(0, 'Hf6q', 'Funken', 16, 6, 25, 16, 13, 23),
                dc.point(0, 'lwFq', 'Funken', 16, 10, 23, 19, 52, 26),
                dc.point(0, 'n4gK', 'Funken', 16, 10, 25, 16, 56, 23),
                dc.point(0, 'Hf6q', 'Roboter', 16, 13, 23, 16, 37, 5),
                dc.point(0, 'ofEz', 'Stanzen', 16, 18, 19, 16, 24, 23),
                dc.point(0, 'LLz2', 'Dornerei', 16, 20, 47, 16, 40, 19),
                dc.point(0, 'ofEz', 'Funken', 16, 24, 23, 16, 46, 19),
                dc.point(0, 'LLz2', 'Stanzen', 16, 40, 19, 16, 46, 47),
                dc.point(0, 'Hf6q', 'Roboter', 16, 40, 43, 16, 48, 25),
                dc.point(0, 'ofEz', 'Funken', 16, 48, 23, 17, 10, 19),
                dc.point(0, 'LLz2', 'Stanzen', 16, 50, 19, 17, 30, 47),
                dc.point(0, 'n4gK', 'Funken', 16, 56, 23, 17, 14, 25),
                dc.point(0, 'Hf6q', 'Roboter', 16, 57, 23, 17, 21, 43),
                dc.point(0, 'pMaq', 'Roboter', 17, 10, 3, 17, 24, 26),
                dc.point(0, 'ofEz', 'Stanzen', 17, 10, 19, 17, 22, 23),
                dc.point(0, 'n4gK', 'Funken', 17, 14, 25, 17, 32, 23),
                dc.point(0, 'ofEz', 'Funken', 17, 22, 23, 17, 28, 19),
                dc.point(0, 'pMaq', 'Funken', 17, 24, 26, 17, 32, 43),
                dc.point(0, 'Hf6q', 'Roboter', 17, 24, 43, 17, 45, 5),
                dc.point(0, 'ofEz', 'Stanzen', 17, 28, 19, 17, 34, 23),
                dc.point(0, 'n4gK', 'Funken', 17, 32, 23, 17, 50, 26),
                dc.point(0, 'pMaq', 'Roboter', 17, 32, 43, 17, 38, 25),
                dc.point(0, 'LLz2', 'Stanzen', 17, 34, 19, 18, 4, 47),
                dc.point(0, 'ofEz', 'Funken', 17, 34, 23, 18, 6, 26),
                dc.point(0, 'pMaq', 'Funken', 17, 38, 25, 17, 44, 3),
                dc.point(0, 'pMaq', 'Roboter', 17, 44, 3, 17, 49, 6),
                dc.point(0, 'Hf6q', 'Roboter', 17, 47, 23, 17, 56, 26),
                dc.point(0, 'pMaq', 'Funken', 17, 49, 6, 17, 54, 43),
                dc.point(0, 'n4gK', 'Funken', 17, 50, 26, 18, 16, 23),
                dc.point(0, 'Hf6q', 'Roboter', 17, 58, 43, 19, 7, 6),
                dc.point(0, 'pMaq', 'Funken', 18, 3, 6, 18, 40, 43),
                dc.point(0, 'LLz2', 'Dornerei', 18, 4, 47, 18, 12, 19),
                dc.point(0, 'ofEz', 'Funken', 18, 10, 23, 18, 34, 19),
                dc.point(0, 'LLz2', 'Stanzen', 18, 12, 19, 18, 26, 47),
                dc.point(0, 'n4gK', 'Funken', 18, 16, 23, 18, 24, 26),
                dc.point(0, 'n4gK', 'Funken', 18, 24, 26, 18, 44, 23),
                dc.point(0, 'LLz2', 'Stanzen', 18, 30, 19, 20, 18, 47),
                dc.point(0, 'ofEz', 'Stanzen', 18, 34, 19, 18, 40, 23),
                dc.point(0, 'ofEz', 'Funken', 18, 40, 23, 19, 54, 19),
                dc.point(0, 'pMaq', 'Roboter', 18, 40, 43, 18, 58, 59),
                dc.point(0, 'n4gK', 'Funken', 18, 44, 23, 19, 14, 26),
                dc.point(0, 'Hf6q', 'Funken', 19, 7, 6, 19, 20, 43),
                dc.point(0, 'pMaq', 'Roboter', 19, 7, 23, 19, 18, 26),
                dc.point(0, 'n4gK', 'Funken', 19, 16, 23, 19, 48, 26),
                dc.point(0, 'pMaq', 'Funken', 19, 18, 26, 19, 32, 3),
                dc.point(0, 'Hf6q', 'Roboter', 19, 20, 43, 19, 31, 46),
                dc.point(0, 'Hf6q', 'Roboter', 19, 32, 43, 19, 51, 46),
                dc.point(0, 'pMaq', 'Funken', 19, 35, 6, 19, 47, 23),
                dc.point(0, 'pMaq', 'Roboter', 19, 47, 23, 19, 53, 46),
                dc.point(0, 'n4gK', 'Funken', 19, 50, 23, 20, 0, 26),
                dc.point(0, 'Hf6q', 'Funken', 19, 51, 46, 20, 4, 43),
                dc.point(0, 'pMaq', 'Funken', 19, 53, 46, 20, 2, 43),
                dc.point(0, 'lwFq', 'Funken', 19, 54, 23, 20, 40, 26),
                dc.point(0, 'ofEz', 'Funken', 19, 56, 23, 21, 38, 20),
                dc.point(0, 'pMaq', 'Roboter', 20, 2, 43, 21, 2, 26),
                dc.point(0, 'n4gK', 'Funken', 20, 4, 23, 22, 40, 26),
                dc.point(0, 'Hf6q', 'Roboter', 20, 4, 43, 20, 14, 26),
                dc.point(0, 'LLz2', 'Dornerei', 20, 18, 47, 20, 30, 19),
                dc.point(0, 'Hf6q', 'Funken', 20, 20, 26, 20, 30, 43),
                dc.point(0, 'LLz2', 'Stanzen', 20, 30, 19, 21, 20, 48),
                dc.point(0, 'Hf6q', 'Roboter', 20, 30, 43, 20, 45, 6),
                dc.point(0, 'lwFq', 'Funken', 20, 40, 26, 20, 58, 23),
                dc.point(0, 'Hf6q', 'Funken', 20, 52, 26, 21, 6, 44),
                dc.point(0, 'lwFq', 'Funken', 20, 58, 23, 21, 6, 26),
                dc.point(0, 'pMaq', 'Funken', 21, 2, 26, 21, 10, 44),
                dc.point(0, 'lwFq', 'Funken', 21, 6, 26, 21, 14, 23),
                dc.point(0, 'Hf6q', 'Roboter', 21, 6, 44, 21, 14, 26),
                dc.point(0, 'pMaq', 'Roboter', 21, 10, 44, 21, 22, 26),
                dc.point(0, 'lwFq', 'Funken', 21, 14, 23, 21, 28, 26),
                dc.point(0, 'Hf6q', 'Funken', 21, 14, 26, 21, 26, 23),
                dc.point(0, 'LLz2', 'Dornerei', 21, 20, 48, 21, 28, 20),
                dc.point(0, 'Hf6q', 'Funken', 21, 26, 23, 21, 32, 26),
                dc.point(0, 'lwFq', 'Funken', 21, 28, 26, 23, 2, 20),
                dc.point(0, 'pMaq', 'Funken', 21, 28, 26, 21, 40, 4),
                dc.point(0, 'Hf6q', 'Funken', 21, 32, 26, 21, 42, 44),
                dc.point(0, 'pMaq', 'Roboter', 21, 40, 4, 22, 17, 6),
                dc.point(0, 'Hf6q', 'Roboter', 21, 42, 44, 22, 19, 44),
                dc.point(0, 'pMaq', 'Funken', 22, 17, 6, 22, 32, 4),
                dc.point(0, 'Hf6q', 'Funken', 22, 19, 44, 22, 36, 44),
                dc.point(0, 'pMaq', 'Roboter', 22, 34, 44, 22, 49, 6),
                dc.point(0, 'Hf6q', 'Funken', 22, 38, 24, 22, 45, 24),
                dc.point(0, 'n4gK', 'Funken', 22, 40, 26, 22, 46, 24),
                dc.point(0, 'n4gK', 'Funken', 22, 46, 24, 23, 54, 26),
                dc.point(0, 'pMaq', 'Roboter', 22, 54, 4, 22, 59, 6),
                dc.point(0, 'pMaq', 'Roboter', 23, 4, 44, 23, 15, 6),
                dc.point(0, 'pMaq', 'Funken', 23, 15, 6, 23, 26, 44),
            ]
        )
    ]
};

export const DRILLDOWN_2019_01_17 = (dc) => {
    return []
};