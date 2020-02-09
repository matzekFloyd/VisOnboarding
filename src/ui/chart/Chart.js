import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import highchartsGantt from "highcharts/modules/gantt";
import drilldown from 'highcharts/modules/drilldown';
import {
    BEACON, GmK6, GYPG, Hf6q, JAN_14, JAN_15, JAN_16, JAN_17, JAN_18, JAN_19, JAN_20, JWwq, LLz2, lwFq, n4gK, nnhk,
    ofEz, oiFK, ox0d, pMaq, QuLX, Sfo7, UUWO, WGSU, Xgti
} from "../../../constants";
import {Empty} from "../components";
import {ChartCfg} from "../../util/ChartCfg";

export default class Chart extends PureComponent {

    constructor(props, context) {
        super(props, context);
        if (typeof Highcharts === 'object') {
            HighchartsExporting(Highcharts);
            highchartsGantt(Highcharts);
            drilldown(Highcharts);
        }
        this.state = {config: null, loading: true};
    }

    componentDidMount() {
        this.setState({config: this.getChartCfg(this.props.identifier)}, () => {
            this.setState({loading: false})
        });
    }

    /**
     *
     * @param {string} identifier
     */
    getChartCfg(identifier) {
        switch (identifier) {
            case JAN_14:
            default:
                return ChartCfg(new Date('2019-01-14T01:00:00'), [
                    BEACON(GYPG), BEACON(Hf6q), BEACON(ofEz), BEACON(JWwq), BEACON(ox0d), BEACON(n4gK), BEACON(QuLX),
                    BEACON(pMaq), BEACON(GmK6), BEACON(lwFq), BEACON(oiFK)]);
            case JAN_15:
                return ChartCfg(new Date('2019-01-15T01:00:00'), [
                    BEACON(lwFq), BEACON(ofEz), BEACON(pMaq), BEACON(LLz2), BEACON(Hf6q), BEACON(Xgti), BEACON(GYPG),
                    BEACON(GmK6), BEACON(n4gK), BEACON(ox0d), BEACON(QuLX), BEACON(oiFK)
                ]);
            case JAN_16:
                return ChartCfg(new Date('2019-01-16T01:00:00'), [BEACON(n4gK), BEACON(ofEz),
                    BEACON(Xgti), BEACON(pMaq), BEACON(lwFq), BEACON(Hf6q), BEACON(LLz2), BEACON(ox0d),
                    BEACON(GmK6), BEACON(UUWO)]);
            case JAN_17:
                return ChartCfg(new Date('2019-01-17T01:00:00'), [BEACON(pMaq), BEACON(ox0d),
                    BEACON(Hf6q), BEACON(lwFq), BEACON(LLz2), BEACON(Xgti), BEACON(GmK6), BEACON(n4gK), BEACON(ofEz),
                    BEACON(WGSU), BEACON(nnhk)]);
            case JAN_18:
                return ChartCfg(new Date('2019-01-18T01:00:00'), [
                    BEACON(n4gK), BEACON(ofEz), BEACON(LLz2), BEACON(Hf6q), BEACON(pMaq), BEACON(GmK6), BEACON(lwFq),
                    BEACON(ox0d), BEACON(UUWO), BEACON(Xgti), BEACON(Sfo7), BEACON(oiFK)
                ]);
            case JAN_19:
                return ChartCfg(new Date('2019-01-19T01:00:00'), [
                    BEACON(ox0d), BEACON(GmK6), BEACON(Hf6q), BEACON(pMaq), BEACON(oiFK), BEACON(lwFq), BEACON(LLz2),
                    BEACON(Xgti), BEACON(ofEz)
                ]);
            case JAN_20:
                return ChartCfg(new Date('2019-01-20T01:00:00'), []);
        }
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
    active: PropTypes.bool.isRequired
};