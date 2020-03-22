import 'url-search-params-polyfill';
import Router, {withRouter} from "next/router";
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

export function redirect(url, as = url, options = {}, timeout = 0) {
    let push = () => Router.push(url, as, options).then(() => console.log("Redirecting: ", url));
    if (timeout > 0) {
        setTimeout(() => push(), timeout);
    } else { // noinspection JSIgnoredPromiseFromCall
        push();
    }
}

/**
 *
 * @param {string} path
 * @return {string}
 */
export function sanitizePublicPath(path) {
    let isProd = process.env.NODE_ENV === "production";
    return isProd ? "/vis/" + path : path;
}

/**
 *
 * @param {string} url
 * @return {string|*}
 */
export function sanitizeRouteUrl(url) {
    let isProd = process.env.NODE_ENV === "production";
    if (url === "/" && isProd) return "/vis";
    return isProd ? "/vis" + url : url;
}

/**
 *
 * @param parameter
 * @param type
 * @return {boolean}
 */
export function typeCheck(parameter, type) {
    if (!(parameter instanceof type)) {
        console.error("Passed parameter does not match the required type: \n", parameter);
        return false;
    }
    return true;
}

/**
 *
 * @param unix
 * @param incYear
 * @param incMonth
 * @param incDay
 * @param incWeekDay
 * @param incTime
 * @return {string}
 */
export function convertUnixToString(unix, incYear = true, incMonth = true, incDay = true, incWeekDay = true, incTime = true) {
    let date = new Date(unix);
    return formatDateString(date, incYear, incMonth, incDay, incWeekDay, incTime);
}

/**
 *
 * @param date
 * @param incYear
 * @param incMonth
 * @param incDay
 * @param incWeekDay
 * @param incTime
 * @return {string}
 */
export function formatDateString(date, incYear = true, incMonth = true, incDay = true, incWeekDay = true, incTime = true) {

    let days_arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let year = date.getUTCFullYear();
    let month = months_arr[date.getUTCMonth()];
    let day = date.getUTCDate();
    let weekDay = days_arr[date.getUTCDay()];
    let hours = date.getUTCHours();
    let minutes = "0" + date.getUTCMinutes();
    let seconds = "0" + date.getUTCSeconds();
    let dateString = "";

    if (incWeekDay) dateString += weekDay + " ";
    if (incMonth) dateString += month + " ";
    if (incDay) dateString += day + " ";
    if (incYear) dateString += year;
    if (incTime) dateString += ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return dateString;
}