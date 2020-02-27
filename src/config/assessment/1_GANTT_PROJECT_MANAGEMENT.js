import {TASK_GANTT_PROJECT_MANAGEMENT} from "../../../constants";

export const GANTT_PROJECT_MANAGEMENT = {
    identifier: TASK_GANTT_PROJECT_MANAGEMENT,
    image: {id: "img-gantt-project-management", src: "gantt-project-management.png"},
    question: "<strong>Select all applicable statements</strong>:",
    options: [
        {text: "<i>New Offices</i> is dependent on <i>New Product Launch</i>.", correct: false},
        {text: "<i>Development</i> will be finished in Week 8.", correct: true},
        {text: "<i>Prepare Office Building</i> will be finished in Week 7.", correct: false},
        {text: "<i>Relocate Cantina</i> is dependent on <i>Inspect Building</i>.", correct: true},
    ],
    subQuestion: {
        question: "asdf",
        options: [
            {text: "a", correct: false},
            {text: "b", correct: false},
            {text: "c", correct: false},
            {text: "d", correct: false},
        ]
    }
};