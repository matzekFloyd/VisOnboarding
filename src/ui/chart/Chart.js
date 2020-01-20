import React from 'react';
import "../../css/main.scss";
import PropTypes from "prop-types";
import Base from "./Base";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default class Chart extends Base {

    constructor(props, context) {
        super(props, context);
        this.state = {
            cfg: this.getChartCfg(props.identifier)
        }
    }

    render() {
        return (
            <div className={this.props.active ? "chart show" : "chart hide"}>
                <HighchartsReact highcharts={Highcharts} options={this.state.cfg} constructorType={'ganttChart'}/>
            </div>
        );
    }

}

Chart.propTypes = {
    identifier: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};