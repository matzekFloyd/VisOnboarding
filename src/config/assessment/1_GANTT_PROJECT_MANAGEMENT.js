import {TASK_GANTT_PROJECT_MANAGEMENT} from "../../../constants";

export const GANTT_PROJECT_MANAGEMENT = {
    identifier: TASK_GANTT_PROJECT_MANAGEMENT,
    image: "gantt-project-management.png",
    task: "Select the statements that are correct",
    options: [
        {text: "\"New Offices\" is dependent on \"New Product Launch\"", correct: false},
        {text: "\"Development\" will be finished in Week 8", correct: true},
        {text: "\"Prepare Office Building\" will be finished in Week 7", correct: false},
        {text: "\"Relocate Cantina\" is dependent on \"Inspect Building\"", correct: true},
    ]
};