import {sanitizeRouteUrl} from "src/util/helpers";

export const URL = {
    home: sanitizeRouteUrl("/"),
    assessment: sanitizeRouteUrl("/assessment"),
    onboarding: sanitizeRouteUrl("/onboarding"),
    visualisation: sanitizeRouteUrl("/visualisation"),
};