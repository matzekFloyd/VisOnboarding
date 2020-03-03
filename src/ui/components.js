import React from "react";
import PropTypes from 'prop-types';
import {sanitizePublicPath} from "../util/helpers";

export const Empty = React.memo(function Empty() {
    return <span/>
});

export const ButtonWhite = React.memo(function ButtonWhite(props) {
    return <button onClick={props.onClick}
                   className={"bg-white hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded " + props.className}>
        {props.title}
    </button>
});
ButtonWhite.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export const ButtonCta = React.memo(function ButtonCta(props) {
    return <button onClick={props.onClick}
                   className={"bg-green-500 hover:bg-blue-600 text-white font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded " + props.className}>
        {props.title}
    </button>
});
ButtonCta.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export const ButtonDisabled = React.memo(function ButtonDisabled(props) {
    return <button onClick={props.onClick}
                   className={"bg-white text-gray-900 font-semibold py-2 px-4 border border-gray-900 rounded opacity-50 cursor-not-allowed " + props.className}>
        {props.title}
    </button>
});
ButtonDisabled.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export const ButtonActive = React.memo(function ButtonActive(props) {
    return <button onClick={props.onClick}
                   className={"bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-600 rounded " + props.className}>
        {props.title}
    </button>
});
ButtonActive.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export const LoadingIndicator = React.memo(function LoadingIndicator() {
    return <div className="lds-ring">
        <div/>
        <div/>
        <div/>
        <div/>
    </div>;
});

export const PageHeadBox = React.memo(function PageHeadBox(props) {
    return <div className={"w-full mt-4"}>
        {props.children}
    </div>
});

export const PageHeadTitle = React.memo(function PageHeadTitle(props) {
    return <h1 className={"page-title"}>{props.title}</h1>
});
PageHeadTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export const PageHeadContent = React.memo(function PageHeadContent(props) {
    return <div className={"flex w-3/4 "}>
        {props.children}
    </div>
});

export const PageDescriptionInfoIcon = React.memo(function PageDescriptionInfoIcon() {
    return <img src={sanitizePublicPath("static/error_outline-24px.svg")} alt={""} className={"mr-2"}/>;
});