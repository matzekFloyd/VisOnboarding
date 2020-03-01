import {STEP_1} from "src/config/onboarding/1_Step";
import {STEP_2} from "src/config/onboarding/2_Step";

export const BASIC_CONFIG = {
    steps: 6,
    html: [
        {header: "Description", body: "asdf", footer: ""},
        {header: "Description", body: "qwer", footer: ""},
        {header: "Description", body: "", footer: ""},
        {header: "Description", body: "", footer: ""},
        {header: "Description", body: "", footer: ""},
        {header: "Description", body: "", footer: ""},
    ],
    chartCfg: [
        STEP_1, STEP_2
    ]
};