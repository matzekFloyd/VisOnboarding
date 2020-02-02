export function sanitizePublicPath(path) {
    let isProd = process.env.NODE_ENV === "production";
    return isProd ? "/vis/" + path : path;
}

export function sanitizeRouteUrl(url) {
    let isProd = process.env.NODE_ENV === "production";
    if (url === "/" && isProd) return "/vis";
    return isProd ? "/vis" + url : url;
}