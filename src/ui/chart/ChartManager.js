import React from 'react';
import Base from "./Base";
import "../../css/main.scss";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import PropTypes from "prop-types";
import {JAN_15, JAN_16, JAN_17} from "../../../constants";

export default class ChartManager extends Base {

    constructor(props, context) {
        super(props, context);
        this.state = {
            active: props.identifier,
            charts: {
                jan_15: this.getChartCfg(JAN_15),
                jan_16: this.getChartCfg(JAN_16),
                jan_17: this.getChartCfg(JAN_17)
            },
        };
    }

    isActive(identifier) {
        return this.state.active === identifier;
    }

    changeChart(identifier) {
        this.setState({active: identifier})
    }

    render() {
        return (<div>
                <h1> Chart Overview </h1>
                <p>Select the day you want to inspect:
                    <button onClick={() => this.changeChart(JAN_15)}> 15.01.2019</button>
                    <button onClick={() => this.changeChart(JAN_16)}> 16.01.2019</button>
                    <button onClick={() => this.changeChart(JAN_17)}> 17.01.2019</button>
                </p>
                <div className={this.isActive(JAN_15) ? "chart show" : "chart hide"}>
                    <HighchartsReact highcharts={Highcharts}
                                     options={this.state.charts.jan_15}
                                     constructorType={'ganttChart'}
                    />
                </div>
                <div className={this.isActive(JAN_16) ? "chart show" : "chart hide"}>
                    <HighchartsReact highcharts={Highcharts}
                                     options={this.state.charts.jan_16}
                                     constructorType={'ganttChart'}
                    />
                </div>
                <div className={this.isActive(JAN_17) ? "chart show" : "chart hide"}>
                    <HighchartsReact highcharts={Highcharts}
                                     options={this.state.charts.jan_17}
                                     constructorType={'ganttChart'}
                    />
                </div>
            </div>
        );
    }

}

ChartManager.propTypes = {
    identifier: PropTypes.string.isRequired,
};