import {TASK_LINE_TIME_SERIES} from "../../util/assessment/constants";

export const LINE_TIME_SERIES = {
    identifier: TASK_LINE_TIME_SERIES,
    points: 18,
    image: {id: "img-usd-to-eur-exchange-rate", src: "usd-to-eur-exchange-rate.png"},
    question: "<strong>Select all applicable statements</strong>:",
    options: [
        {text: "In the second half of 2012 the exchange rate was rising.", correct: false},
        {text: "The highest exchange rate was 0.988.", correct: false},
        {text: "The exchange rate has fallen between 2013 and 2018.", correct: false},
        {text: "On average the exchange rate is lower than 0.9.", correct: true},
    ],
    subQuestion: {
        question: "<strong>Select all applicable statements</strong>:",
        options: [
            {text: "The lowest point of the exchange rate was reached on March 25th 2011.", correct: false},
            {text: "The highest point of the exchange rate was reached on December 20th 2016.", correct: true},
            {text: "The highest point of the exchange rate was reached on March 13th 2015.", correct: false},
            {text: "The lowest point of the exchange rate was reached on July 15th 2008.", correct: true}
        ]
    }
};