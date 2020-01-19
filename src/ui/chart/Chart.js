import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import "../../css/main.scss";
import ChartOverview from "./ChartOverview";
import ChartDetail from "./ChartDetail";

export default class Chart extends PureComponent {

    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <ChartOverview identifier={this.props.identifier}/>
                <ChartDetail/>
            </div>
        );
    }

}

Chart.propTypes = {
    identifier: PropTypes.string.isRequired,
};