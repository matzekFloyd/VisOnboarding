import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import drilldown from 'highcharts/modules/drilldown';
import {DORNEREI, FUNKEN, ROBOTER, STANZEN} from "../../../constants";
import {Empty} from "../components";
import {ChartCfg} from "../../util/ChartCfg";
import {DataCruncher} from "../../util/DataCruncher";
import equal from 'fast-deep-equal';

export default class Chart extends PureComponent {

    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
            drilldown(Highcharts);
            Highcharts.Tick.prototype.drillable = function () {
            };
        }
        this.state = {config: null, loading: true, chartLoading: true};
        this.dataCruncher = new DataCruncher(props.date, props.categories);
    }

    componentDidMount() {
        this.setState({config: ChartCfg(this.dataCruncher)}, () => {
            this.setState({loading: false})
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.filter, prevProps.filter)) {
            this.filterByLocation();
        }

        if (!equal(this.props.active, prevProps.active)) {
            let chart = this.refs.chart.chart;
            chart.reflow();
        }
    }

    filterByLocation() {
        let chartEl = document.getElementsByClassName("chart block");
        let points = chartEl[0].getElementsByClassName("highcharts-point");

        let color;
        switch (this.props.filter) {
            case DORNEREI.name:
                color = DORNEREI.color;
                break;
            case FUNKEN.name:
                color = FUNKEN.color;
                break;
            case STANZEN.name:
                color = STANZEN.color;
                break;
            case ROBOTER.name:
                color = ROBOTER.color;
                break;
        }

        for (let i = 0; i < points.length; i++) {
            let point = points[i];
            let element;
            if (point.hasChildNodes()) {
                element = point.firstChild;
            } else {
                element = point;
            }
            element.getAttribute("fill") === color ? element.style.visibility = "visible" : element.style.visibility = "hidden";
        }

        let pathfinderGroup = document.getElementsByClassName("highcharts-pathfinder-group")[0];
        if (pathfinderGroup) pathfinderGroup.style.visibility = "hidden";
    }

    chartLoadedCallback() {
        this.setState({chartLoading: false}, () => {
            this.props.chartLoaded();
        });
    }

    render() {
        const {config} = this.state;
        let chartLoadedCallback = this.props.chartLoaded ? {callback: () => this.chartLoadedCallback()} : {};
        return (
            <div className={this.props.active ? "chart block " : "chart hidden "}>
                {this.state.loading ? <Empty/> :
                    <HighchartsReact highcharts={Highcharts} options={config} constructorType={'ganttChart'}
                                     ref={'chart'} {...chartLoadedCallback}/>}
            </div>
        );
    }

}

Chart.propTypes = {
    identifier: PropTypes.string.isRequired,
    //date: PropTypes.isRequired,
    //categories: PropTypes.array.isRequired,
    filter: PropTypes.string,
    active: PropTypes.bool.isRequired
};