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