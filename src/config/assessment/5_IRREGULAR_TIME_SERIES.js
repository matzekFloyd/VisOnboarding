import {TASK_IRREGULAR_TIME_SERIES} from "../../../constants";

export const IRREGULAR_TIME_SERIES = {
    identifier: TASK_IRREGULAR_TIME_SERIES,
    points: 18,
    image: {id: "img-snow-depth-at-vikjafjell", src: "snow-depth-at-vikjafjell.png"},
    question: "<strong>When was the snow depth higher than 2 meters?</strong>",
    options: [
        {text: "Winter 2015-2016: April - June", correct: false},
        {text: "Winter 2015-2016: March - April", correct: true},
        {text: "Winter 2016-2017: March - April", correct: false},
        {text: "Winter 2014-2015: January - February", correct: false},
    ],
    subQuestion: {
        question: "<strong>What was the snow depth on the first of March in 2014?</strong>:",
        options: [
            {text: "2.5 metres.", correct: false},
            {text: "2.95 metres.", correct: false},
            {text: "2.75 metres.", correct: true},
            {text: "2.3 metres.", correct: false}
        ]
    }
};