import 'url-search-params-polyfill';
import {withRouter} from "next/router";
import React from "react";

export const withPageRouter = Component => {
    const routerWrapper = withRouter(({router, ...props}) => {
        router.query = [
            ...new URLSearchParams((router.asPath || '').split(/\?/)[1]).entries()
        ].reduce((q, [k, v]) => Object.assign(q, {[k]: v}), {});

        return <Component {...props} router={router}/>;
    });
    routerWrapper.getInitialProps = Component.getInitialProps;
    return routerWrapper;
};

export function sanitizePublicPath(path) {
    let isProd = process.env.NODE_ENV === "production";
    return isProd ? "/vis/" + path : path;
}

export function sanitizeRouteUrl(url) {
    let isProd = process.env.NODE_ENV === "production";
    if (url === "/" && isProd) return "/vis";
    return isProd ? "/vis" + url : url;
}