export function sanitizeImgUrl(img) {
    let isProd = process.env.NODE_ENV === "production";
    return isProd ? "/vis/static/" + img : "/static/" + img;
}

function sanitizeRouteUrl(url) {
    let isProd = process.env.NODE_ENV === "production";
    if (url === "/" && isProd) return "/vis";
    return isProd ? "/vis" + url : url;
}

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