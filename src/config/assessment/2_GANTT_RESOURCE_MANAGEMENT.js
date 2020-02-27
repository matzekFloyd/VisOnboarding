import {TASK_GANTT_RESOURCE_MANAGEMENT} from "../../../constants";

export const GANTT_RESOURCE_MANAGEMENT = {
    identifier: TASK_GANTT_RESOURCE_MANAGEMENT,
    image: {id: "img-car-rental-schedule", src: "car-rental-schedule.png"},
    question: "<strong>Which assumptions can be made from reading this chart</strong>:",
    options: [
        {text: "A car of the type <i>Nissan leaf</i> is available for renting on february 26th.", correct: true},
        {text: "The most popular car model is the <i>Volvo V60</i>.", correct: false},
        {text: "Cars of type <i>Peugot 208</i> are rented for the longest time among all models.", correct: false},
        {text: "On February 19 all cars were rented.", correct: true},
    ]
};