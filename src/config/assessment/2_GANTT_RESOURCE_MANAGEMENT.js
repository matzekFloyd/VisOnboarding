import {TASK_GANTT_RESOURCE_MANAGEMENT} from "../../../constants";

export const GANTT_RESOURCE_MANAGEMENT = {
    identifier: TASK_GANTT_RESOURCE_MANAGEMENT,
    image: {id: "img-car-rental-schedule", src: "car-rental-schedule.png"},
    task: "What assumptions can be made from reading the chart:",
    options: [
        {text: "<i>Nissan Leaf</i> is available for renting on February 26th.", correct: true},
        {text: "The most popular car is the <i>Volvo V60</i>.", correct: false},
        {text: "<i>Peugot</i> 208 is not available for the longest time.", correct: false},
        {text: "On February 19 all cars were rented.", correct: true},
    ]
};