import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import drilldown from 'highcharts/modules/drilldown';
import {DORNEREI, FUNKEN, LOCATIONS, ROBOTER, STANZEN} from "../../../constants";
import {Empty} from "../components";
import {ChartCfg} from "../../util/ChartCfg";
import {DataCruncher} from "../../util/DataCruncher";
import equal from 'fast-deep-equal';
import {getEventEmitter} from "../../util/eventemitter";

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
        this.id = props.id;
        this.state = {config: null, filter: null, loading: true, chartLoading: true};
        this.dataCruncher = new DataCruncher(props.date, props.categories);
        this.eventEmitter = null;
        this.filterByLocationHandler = (filter) => {
            if (this.props.active === true) {
                if (!LOCATIONS.includes(filter)) {
                    this.resetFilter();
                } else if (this.state.filter !== filter) {
                    this.filterByLocation(filter);
                } else {
                    this.resetFilter();
                }
            }
        };
    }

    componentDidMount() {
        this.setState({config: ChartCfg(this.dataCruncher)}, () => {
            this.eventEmitter = getEventEmitter();
            this.eventEmitter.on("filterByLocation", this.filterByLocationHandler);
            this.setState({loading: false})
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.active, prevProps.active)) {
            let chart = this.refs.chart.chart;
            chart.reflow();
        }
    }

    componentWillUnmount() {
        this.eventEmitter.removeListener("filterByLocation", this.filterByLocationHandler);
    }

    filterByLocation(location) {
        this.setState({filter: location}, () => {
            let chartEl = document.getElementsByClassName("chart block");
            let points = chartEl[0].getElementsByClassName("highcharts-point");

            let color;
            switch (this.state.filter) {
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
            this.eventEmitter.emit("activeLocationFilter", this.state.filter);
        });
    }

    resetFilter() {
        this.setState({filter: null}, () => {
            let chartEl = document.getElementsByClassName("chart block");
            let points = chartEl[0].getElementsByClassName("highcharts-point");

            for (let i = 0; i < points.length; i++) {
                let point = points[i];
                let element;
                if (point.hasChildNodes()) {
                    element = point.firstChild;
                } else {
                    element = point;
                }
                element.style.visibility = "visible";
            }
            let pathfinderGroup = document.getElementsByClassName("highcharts-pathfinder-group")[0];
            if (pathfinderGroup) pathfinderGroup.style.visibility = "visible";
            this.eventEmitter.emit("resetLocationFilter");
        })
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