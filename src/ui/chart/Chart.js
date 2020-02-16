import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import drilldown from 'highcharts/modules/drilldown';
import {LOCATIONS} from "../../../constants";
import {Empty} from "../components";
import {ChartCfg} from "../../util/ChartCfg";
import {DataCruncher} from "../../util/DataCruncher";
import {Series} from "../../util/models";
import equal from 'fast-deep-equal';

export default class Chart extends PureComponent {

    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
            drilldown(Highcharts);
        }
        this.state = {config: null, loading: true, chartLoading: true, filter: props.filter};
        this.dataCruncher = new DataCruncher(props.date, props.categories);
    }

    componentDidMount() {
        this.setState({config: ChartCfg(this.dataCruncher)}, () => {
            this.setState({loading: false})
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //TODO change filtering to persist only for one chart, not for all of them
        if (!equal(this.props.filter, prevProps.filter)) {
            this.filter();
        }

        if (!equal(this.props.active, prevProps.active)) {
            let chart = this.refs.chart.chart;
            chart.reflow();
        }
    }

    filter() {
        //TODO maybe indicate spinning/loading state here, until filtering is done
        let filter = this.props.filter;
        let cfg = ChartCfg(this.dataCruncher);

        if (!LOCATIONS.includes(filter)) {
            this.setState({config: cfg});
            return;
        }

        let series = this.dataCruncher.getSeries(0);
        let data = series[0].data;
        let newData = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].location === filter) {
                newData.push(data[i]);
            }
        }
        cfg.series = [Series(this.dataCruncher.startDate, newData)];
        this.setState({config: cfg});
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
            <div className={this.props.active ? "block " : "hidden "}>
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