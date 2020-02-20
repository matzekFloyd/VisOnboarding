import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import drilldown from 'highcharts/modules/drilldown';
import {Empty} from "../components";

export default class Chart extends PureComponent {

    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
            drilldown(Highcharts);
        }
        this.state = {
            config: props.config
        }
    }

    render() {
        const {config} = this.state;
        return (
            <div>
                {config ? <HighchartsReact highcharts={Highcharts} options={config} constructorType={'ganttChart'}
                                           ref={'chart'}/> : <Empty/>}
            </div>
        );
    }

}

Chart.propTypes = {
    config: PropTypes.object.isRequired
};