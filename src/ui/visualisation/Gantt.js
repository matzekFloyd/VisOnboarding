import React from 'react';
import PropTypes from "prop-types";
import HighchartsReact from "highcharts-react-official";
import {DORNEREI, FUNKEN, LOCATIONS, ROBOTER, STANZEN} from "../../util/visualisation/constants";
import {ChartCfg} from "src/config/visualisation/ChartCfg";
import {DataCruncher} from "src/util/visualisation/DataCruncher";
import {getEventEmitter} from "src/util/eventemitter";
import {Empty} from "../components";
import Chart from "../Chart";

export default class Gantt extends Chart {

    constructor(props, context) {
        super(props, context);
        this.id = props.id;
        this.state = {config: null, filter: null, loading: true};
        this.dataCruncher = new DataCruncher(props.date, props.categories);
        this.eventEmitter = null;
        this.filterByLocationHandler = (filter) => {
            if (!LOCATIONS.includes(filter)) {
                this.resetFilter();
            } else if (this.state.filter !== filter) {
                this.filterByLocation(filter);
            } else {
                this.resetFilter();
            }
        };
        this.resetLocationFilterHandler = () => {
            this.resetFilter();
        }
    }

    componentDidMount() {
        this.setState({config: ChartCfg(this.dataCruncher)}, () => {
            this.eventEmitter = getEventEmitter();
            this.eventEmitter.on("filterByLocation", this.filterByLocationHandler);
            this.eventEmitter.on("resetLocationFilter", this.resetLocationFilterHandler);
        });
    }

    componentWillUnmount() {
        this.eventEmitter.removeListener("filterByLocation", this.filterByLocationHandler);
        this.eventEmitter.removeListener("resetLocationFilter", this.resetLocationFilterHandler);
    }

    filterByLocation(location) {
        this.setState({filter: location}, () => {
            let chartEl = document.getElementsByClassName("chart");
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

            let pathfinderGroups = document.getElementsByClassName("highcharts-pathfinder-group");
            for (let i = 0; i < pathfinderGroups.length; i++) {
                pathfinderGroups[i].style.visibility = "hidden";
            }
            this.eventEmitter.emit("activeLocationFilter", this.state.filter);
        });
    }

    resetFilter() {
        this.setState({filter: null}, () => {
            let chartEl = document.getElementsByClassName("chart");
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
            let pathfinderGroups = document.getElementsByClassName("highcharts-pathfinder-group");
            for (let i = 0; i < pathfinderGroups.length; i++) {
                pathfinderGroups[i].style.visibility = "visible";
            }
        })
    }

    chartLoadedCallback() {
        this.setState({loading: false}, () => {
            this.props.chartLoaded();
        });
    }

    render() {
        const {config} = this.state;
        let chartLoadedCallback = this.props.chartLoaded ? {callback: () => this.chartLoadedCallback()} : {};
        return (
            <div className={"chart"}>
                {config ? <HighchartsReact highcharts={this.Highcharts} options={config} constructorType={'ganttChart'}
                                           ref={'chart'} {...chartLoadedCallback}/> : <Empty/>}
            </div>
        );
    }

}
Gantt.propTypes = {
    id: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    identifier: PropTypes.string.isRequired
};