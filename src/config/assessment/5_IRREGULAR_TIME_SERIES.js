import {TASK_IRREGULAR_TIME_SERIES} from "../../../constants";

export const IRREGULAR_TIME_SERIES = {
    identifier: TASK_IRREGULAR_TIME_SERIES,
    image: {id: "img-snow-depth-at-vikjafjell", src: "snow-depth-at-vikjafjell.png"},
    task: "When was the snow depth higher than 2 meters?",
    options: [
        {text: "Winter 2015-2016: April - June", correct: false},
        {text: "Winter 2015-2016: March - April", correct: true},
        {text: "Winter 2016-2017: March - April", correct: false},
        {text: "Winter 2014-2015: January - February", correct: false},
    ]
};