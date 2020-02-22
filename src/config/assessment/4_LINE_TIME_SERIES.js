import {TASK_LINE_TIME_SERIES} from "../../../constants";

export const LINE_TIME_SERIES = {
    identifier: TASK_LINE_TIME_SERIES,
    image: {id: "img-usd-to-eur-exchange-rate", src: "usd-to-eur-exchange-rate.png"},
    task: "Select the statements that are correct:",
    options: [
        {text: "In the second half of 2012 the exchange rate was rising", correct: false},
        {text: "The highest exchange rate was 0.988", correct: false},
        {text: "The exchange rate has fallen between 2013 and 2018", correct: false},
        {text: "On average the exchange rate is higher than 0.9", correct: false},
    ]
};