import React, {PureComponent} from 'react';
import "../../css/main.scss";
import PropTypes from "prop-types";

export default class ChartDetail extends PureComponent {

    render() {
        return (
            <h1> CHART DETAIL </h1>
        );
    }

}

ChartDetail.propTypes = {
    identifier: PropTypes.string.isRequired,
};