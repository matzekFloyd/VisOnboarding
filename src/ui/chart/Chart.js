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
        this.state = {config: null, loading: true, filter: props.filter};
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
        cfg.series = [Series('Overview', 'overview', newData)];
        this.setState({config: cfg});
    }

    render() {
        const {config} = this.state;
        return (
            <div> {this.state.loading ? <Empty/> :
                <div className={this.props.active ? "chart show" : "chart hide"}>
                    <HighchartsReact highcharts={Highcharts} options={config} constructorType={'ganttChart'}/>
                </div>}
            </div>
        );
    }

}

Chart.propTypes = {
    identifier: PropTypes.string.isRequired,
    //date: PropTypes.isRequired,
    //categories: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};