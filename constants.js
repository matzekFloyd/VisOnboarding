function sanitizeUrl(url) {
    let isProd = process.env.NODE_ENV === "production";
    if (url === "/" && isProd) return "/vis";
    return isProd ? "/vis" + url : url;
}

export const URL = {
    home: sanitizeUrl("/"),
    assessment: sanitizeUrl("/assessment"),
    context: sanitizeUrl("/context"),
    onboarding: {
        basic: sanitizeUrl("/onboarding/basic"),
        advanced: sanitizeUrl("/onboarding/advanced"),
        proficient: sanitizeUrl("/onboarding/proficient"),
    },
    visualisation: sanitizeUrl("/visualisation"),
};

export const JAN_15 = "JAN_15";
export const JAN_16 = "JAN_16";
export const JAN_17 = "JAN_17";