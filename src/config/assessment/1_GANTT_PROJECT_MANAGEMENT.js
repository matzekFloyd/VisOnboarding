import {TASK_GANTT_PROJECT_MANAGEMENT} from "src/util/assessment/constants";

export const GANTT_PROJECT_MANAGEMENT = {
    identifier: TASK_GANTT_PROJECT_MANAGEMENT,
    points: 21,
    image: {id: "img-gantt-project-management", src: "gantt-project-management.png"},
    question: "<strong>Select all applicable statements</strong>:",
    options: [
        {text: "<i>New Offices</i> is dependent on <i>New Product Launch</i>.", correct: false},
        {text: "<i>Development</i> will probably be finished in Week 9.", correct: true},
        {text: "<i>Prepare Office Building</i> will most likely be finished in Week 8.", correct: false},
        {text: "<i>Relocate Cantina</i> is dependent on <i>Inspect Building</i>.", correct: true},
    ],
    subQuestion: {
        question: "<strong>Select all applicable statements</strong>:",
        options: [
            {text: "<i>Prepare office building</i> is already 20% completed.", correct: true},
            {text: "<i>New product launch</i> has started after <i>New offices</i>.", correct: true},
            {text: "<i>Final development</i> is dependent on <i>Relocate cantina</i>.", correct: false}
        ]
    }
};