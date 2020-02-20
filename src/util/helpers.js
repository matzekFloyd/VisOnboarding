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

    let year = date.getFullYear();
    let month = months_arr[date.getMonth()];
    let day = date.getDate();
    let weekDay = days_arr[date.getDay()];
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let dateString = "";

    if (incWeekDay) dateString += weekDay + " ";
    if (incMonth) dateString += month + " ";
    if (incDay) dateString += day + " ";
    if (incYear) dateString += year;
    if (incTime) dateString += ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return dateString;
}