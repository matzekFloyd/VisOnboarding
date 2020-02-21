import {sanitizeRouteUrl} from "./src/util/helpers";

export const URL = {
    home: sanitizeRouteUrl("/"),
    assessment: sanitizeRouteUrl("/assessment"),
    context: sanitizeRouteUrl("/context"),
    onboarding: {
        basic: sanitizeRouteUrl("/onboarding/basic"),
        advanced: sanitizeRouteUrl("/onboarding/advanced"),
        proficient: sanitizeRouteUrl("/onboarding/proficient"),
    },
    visualisation: sanitizeRouteUrl("/visualisation"),
};

export const JAN_14 = "JAN_14";
export const JAN_15 = "JAN_15";
export const JAN_16 = "JAN_16";
export const JAN_17 = "JAN_17";
export const JAN_18 = "JAN_18";
export const JAN_19 = "JAN_19";
export const JAN_20 = "JAN_20";

export const DATES = [
    {selector: JAN_14, btnTxt: "14.01.2019"},
    {selector: JAN_15, btnTxt: "15.01.2019"},
    {selector: JAN_16, btnTxt: "16.01.2019"},
    {selector: JAN_17, btnTxt: "17.01.2019"},
    {selector: JAN_18, btnTxt: "18.01.2019"},
    {selector: JAN_19, btnTxt: "19.01.2019"},
    {selector: JAN_20, btnTxt: "20.01.2019"}
];

export const FUNKEN = {name: "Funken", color: "#7F3C8D"};
export const ROBOTER = {name: "Roboter", color: "#11A579"};
export const DORNEREI = {name: "Dornerei", color: "#3969AC"};
export const STANZEN = {name: "Stanzen", color: "#F2B701"};

export const LOCATIONS = [FUNKEN.name, ROBOTER.name, DORNEREI.name, STANZEN.name];

export const LLz2 = "LLz2";
export const GmK6 = "GmK6";
export const pMaq = "pMaq";
export const oiFK = "oiFK";
export const dPd9 = "dPd9";
export const ofEz = "ofEz";
export const UUWO = "UUWO";
export const WGSU = "WGSU";
export const Sfo7 = "Sfo7";
export const nnhk = "nnhk";
export const Xgti = "Xgti";
export const cS4e = "cS4e";
export const n4gK = "n4gK";
export const FFms = "FFms";
export const GYPG = "GYPG";
export const GpfO = "GpfO";
export const Hf6q = "Hf6q";
export const IHp9 = "IHp9";
export const JWwq = "JWwq";
export const QuLX = "QuLX";
export const e1lh = "e1lh";
export const lwFq = "lwFq";
export const o31S = "o31S";
export const ox0d = "ox0d";
export const xHvM = "xHvM";

export const BEACON = function (key) {
    switch (key) {
        case LLz2:
            return {id: "LLz2", name: "Beacon Pro 1"};
        case GmK6:
            return {id: "GmK6", name: "Beacon Pro 2"};
        case pMaq:
            return {id: "pMaq", name: "Beacon Pro 3"};
        case oiFK:
            return {id: "oiFK", name: "Beacon Pro 4"};
        case dPd9:
            return {id: "dPd9", name: "Beacon Pro 5"};
        case ofEz:
            return {id: "ofEz", name: "Beacon Pro 6"};
        case UUWO:
            return {id: "UUWO", name: "Beacon Pro 7"};
        case WGSU:
            return {id: "WGSU", name: "Beacon Pro 8"};
        case Sfo7:
            return {id: "Sfo7", name: "Beacon Pro 9"};
        case nnhk:
            return {id: "nnhk", name: "Beacon Pro 10"};
        case Xgti:
            return {id: "Xgti", name: "Beacon Pro 11"};
        case cS4e:
            return {id: "cS4e", name: "Beacon Pro 12"};
        case n4gK:
            return {id: "n4gK", name: "Beacon Pro 13"};
        case FFms:
            return {id: "FFms", name: "Beacon Pro 14"};
        case GYPG:
            return {id: "GYPG", name: "Beacon Pro 15"};
        case GpfO:
            return {id: "GpfO", name: "Beacon Pro 16"};
        case Hf6q:
            return {id: "Hf6q", name: "Beacon Pro 17"};
        case IHp9:
            return {id: "IHp9", name: "Beacon Pro 18"};
        case JWwq:
            return {id: "JWwq", name: "Beacon Pro 19"};
        case QuLX:
            return {id: "QuLX", name: "Beacon Pro 20"};
        case e1lh:
            return {id: "e1lh", name: "Beacon Pro 21"};
        case lwFq:
            return {id: "lwFq", name: "Beacon Pro 22"};
        case o31S:
            return {id: "o31S", name: "Beacon Pro 23"};
        case ox0d:
            return {id: "ox0d", name: "Beacon Pro 24"};
        case xHvM:
            return {id: "xHvM", name: "Beacon Pro 25"};
        default:
            console.warn("Unknown beacon key: ", key);
            return {};
    }
};

export const TASK_GANTT_PROJECT_MANAGEMENT = 'TASK_GANTT_PROJECT_MANAGEMENT';
export const TASK_GANTT_RESOURCE_MANAGEMENT = 'TASK_GANTT_RESOURCE_MANAGEMENT';
export const TASK_DATA_SET_VISUALISATION = 'TASK_DATA_SET_VISUALISATION';
export const TASK_LINE_TIME_SERIES = 'TASK_LINE_TIME_SERIES';
export const TASK_IRREGULAR_TIME_SERIES = 'TASK_IRREGULAR_TIME_SERIES';

export const TASKS = () => {
    let tasks = [TASK_GANTT_PROJECT_MANAGEMENT, TASK_GANTT_RESOURCE_MANAGEMENT, TASK_DATA_SET_VISUALISATION, TASK_LINE_TIME_SERIES, TASK_IRREGULAR_TIME_SERIES];
    let currentIndex = tasks.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = tasks[currentIndex];
        tasks[currentIndex] = tasks[randomIndex];
        tasks[randomIndex] = temporaryValue;
    }
    return tasks;
};