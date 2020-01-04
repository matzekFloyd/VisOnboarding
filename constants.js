function sanitizeUrl(url) {
    let isProd = process.env.NODE_ENV === "production";
    if (url === "/" && isProd) return "/vis";
    return isProd ? "/vis" + url : url;
}

export const URL = {
    home: sanitizeUrl("/"),
    assessment: sanitizeUrl("/assessment"),
    onboarding: {
        basic: sanitizeUrl("/onboarding/basic"),
        advanced: sanitizeUrl("/onboarding/advanced"),
        proficient: sanitizeUrl("/onboarding/proficient"),
    },
    visualisation: sanitizeUrl("/visualisation"),
};