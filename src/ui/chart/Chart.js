import React, {PureComponent} from 'react';
import "../../css/main.scss";
import PropTypes from "prop-types";

export default class Chart extends PureComponent {

    render() {
        return (
            <h1> CHART DETAIL </h1>
        );
    }

}

Chart.propTypes = {
    identifier: PropTypes.string.isRequired,
};