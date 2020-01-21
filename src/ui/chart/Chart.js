import React, {PureComponent} from 'react';
import "../../css/main.scss";
import PropTypes from "prop-types";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import {JAN_15, JAN_16, JAN_17} from "../../../constants";
import {D_JAN_15} from "../../data/2019-01-15";
import {D_JAN_16} from "../../data/2019-01-16";
import {D_JAN_17} from "../../data/2019-01-17";

export default class Chart extends PureComponent {

    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
        }
        this.state = {
            config: this.getChartCfg(props.identifier)
        }
    }

    getChartCfg(identifier) {
        switch (identifier) {
            case JAN_15:
                return D_JAN_15();
            case JAN_16:
                return D_JAN_16();
            case JAN_17:
                return D_JAN_17();
            default:
                return D_JAN_15();
        }
    }

    render() {
        const {config} = this.state;
        return (
            <div className={this.props.active ? "chart show" : "chart hide"}>
                <HighchartsReact highcharts={Highcharts} options={config} constructorType={'ganttChart'}/>
            </div>
        );
    }

}

Chart.propTypes = {
    identifier: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};