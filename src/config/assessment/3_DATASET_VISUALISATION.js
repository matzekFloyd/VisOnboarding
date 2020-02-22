import {TASK_DATA_SET_VISUALISATION} from "../../../constants";

export const DATA_SET_VISUALISATION = {
    identifier: TASK_DATA_SET_VISUALISATION,
    image: {id: "img-georg-fischer-data-set", src: "georg-fischer-data-set.png"},
    task: "Which of the following visualization techniques would be suitable here:",
    options: [
        {text: "GanttChart", correct: true},
        {text: "Treemap", correct: false},
        {text: "LineGraph", correct: true},
        {text: "Venn Diagram", correct: false},
    ]
};