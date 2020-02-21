import {TASK_GANTT_RESOURCE_MANAGEMENT} from "../../../constants";
import {sanitizePublicPath} from "../../util/helpers";

export const GANTT_RESOURCE_MANAGEMENT = {
    identifier: TASK_GANTT_RESOURCE_MANAGEMENT,
    image: sanitizePublicPath("static/snow.png"),
    tasks: [
        {question: "Q", correct: false},
        {question: "W", correct: false},
        {question: "E", correct: true},
        {question: "R", correct: false},
    ]
};