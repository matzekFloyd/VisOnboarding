import React from "react";
import PropTypes from 'prop-types';

export const Empty = React.memo(function Empty() {
    return <span/>
});

export const ButtonOutLine = React.memo(function Button(props) {
    return <button onClick={props.onClick}
                   className={"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}>
        {props.title}
    </button>
});
ButtonOutLine.propTypes = {
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
    return <div className={"mt-6"}>
        {props.children}
    </div>
});

export const PageHeadTitle = React.memo(function PageHeadTitle(props) {
    return <h1 className={"text-xl font-extrabold"}>{props.title}</h1>
});
PageHeadTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export const PageHeadContent = React.memo(function PageHeadContent(props) {
    return props.children;
});