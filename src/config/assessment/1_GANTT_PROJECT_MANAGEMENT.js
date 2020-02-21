import {TASK_GANTT_PROJECT_MANAGEMENT} from "../../../constants";
import {sanitizePublicPath} from "../../util/helpers";

export const GANTT_PROJECT_MANAGEMENT = {
    identifier: TASK_GANTT_PROJECT_MANAGEMENT,
    image: sanitizePublicPath("static/gantt-project-management.png"),
    tasks: [
        {question: "A", correct: true},
        {question: "B", correct: false},
        {question: "C", correct: true},
        {question: "D", correct: false},
    ]
};