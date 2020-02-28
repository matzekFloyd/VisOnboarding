import {sanitizeRouteUrl} from "src/util/helpers";

export const URL = {
    home: sanitizeRouteUrl("/"),
    assessment: sanitizeRouteUrl("/assessment"),
    context: sanitizeRouteUrl("/context"),
    onboarding: sanitizeRouteUrl("/onboarding"),
    visualisation: sanitizeRouteUrl("/visualisation"),
};