import React from 'react';
import ChartManager from "./ChartManager";
import "../../css/main.scss";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import PropTypes from "prop-types";

export default class ChartOverview extends ChartManager {

    constructor(props, context) {
        super(props, context);
        this.state = {
            chartOptions: this.chartOptions
        };
    }

    updateSeries() {
        //TODO
        this.setState({
            chartOptions: {
                series: [
                    { data: [Math.random() * 5, 2, 1]}
                ]
            }
        });
    }

    render() {
        const {chartOptions} = this.state;

        return (<div>
                <h1> CHART OVERVIEW </h1>
                <HighchartsReact highcharts={Highcharts}
                                 options={chartOptions}
                                 constructorType={'ganttChart'}
                />
                <button onClick={this.updateSeries.bind(this)}>Update Series</button>
            </div>
        );
    }

}

ChartOverview.propTypes = {
    identifier: PropTypes.string.isRequired,
};