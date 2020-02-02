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

export const JAN_15 = "JAN_15";
export const JAN_16 = "JAN_16";
export const JAN_17 = "JAN_17";