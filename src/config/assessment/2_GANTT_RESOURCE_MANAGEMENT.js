import {TASK_GANTT_RESOURCE_MANAGEMENT} from "src/util/assessment/constants";

export const GANTT_RESOURCE_MANAGEMENT = {
    identifier: TASK_GANTT_RESOURCE_MANAGEMENT,
    points: 21,
    image: {id: "img-car-rental-schedule", src: "car-rental-schedule.png"},
    question: "<strong>Which assumptions can be made from reading this chart</strong>:",
    options: [
        {text: "A car of the type <i>Nissan leaf</i> is available for renting on March 2nd.", correct: true},
        {text: "The most rented car model is the <i>Volvo V60</i>.", correct: false},
        {text: "Cars of type <i>Peugot 208</i> are rented for the longest time among all models.", correct: false},
        {text: "On February 25th all cars were rented.", correct: true},
    ],
    subQuestion: {
        question: "<strong>Which assumptions can be made from reading this chart</strong>:",
        options: [
            {text: "The least popular car model is the <i>Jaguar E-type</i>.", correct: true},
            {
                text: "On February 29th <i>Nissan Leaf</i>, as well as <i>Peugot 208</i> are available for renting.",
                correct: true
            },
        ]
    }
};