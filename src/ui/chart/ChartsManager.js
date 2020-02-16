import React, {PureComponent} from 'react';
import {
    DATES,
    CONTROLS_CONTAINER_WIDTH,
    CHARTS_CONTAINER_WIDTH,
    JAN_14,
    BEACON,
    GYPG,
    Hf6q,
    ofEz,
    JWwq,
    ox0d,
    n4gK,
    QuLX,
    pMaq,
    GmK6,
    lwFq,
    oiFK,
    JAN_15,
    LLz2, Xgti, JAN_16, UUWO, JAN_17, WGSU, nnhk, JAN_18, Sfo7, JAN_19, JAN_20
} from "../../../constants";
import {sanitizePublicPath} from "../../util/helpers";
import {getEventEmitter} from "../../util/eventemitter";
import Chart from "./Chart";

export default class ChartsManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            controlsCollapsed: false,
            filter: null,
            chartsLoaded: null,
            chartsLoading: true
        };
        this.chartCount = DATES.length;
        this.eventEmitter = null;
        this.resetLocationFilterHandler = () => {
            this.setState({filter: null});
        };
        this.activeLocationFilterHandler = (location) => {
            this.setState({filter: location});
        };
    }

    componentDidMount() {
        this.eventEmitter = getEventEmitter();
        this.eventEmitter.on("resetLocationFilter", this.resetLocationFilterHandler);
        this.eventEmitter.on("activeLocationFilter", this.activeLocationFilterHandler);
    }

    componentWillUnmount() {
        this.eventEmitter.removeListener("resetLocationFilter", this.resetLocationFilterHandler);
        this.eventEmitter.removeListener("activeLocationFilter", this.activeLocationFilterHandler);
    }

    chartLoaded() {
        let newCount = this.state.chartLoaded === null ? 1 : ++this.state.chartsLoaded;
        this.setState({chartsLoaded: newCount}, () => {
            if (this.state.chartsLoaded === this.chartCount) {
                this.setState({chartsLoading: false}, () => {
                    this.props.chartManagerLoadedCallback();
                });
            }
        });
    }

    initCharts() {
        let charts = [];
        for (let i = 0; i < DATES.length; i++) {
            let date = null;
            let categories = [];
            switch (DATES[i].selector) {
                case JAN_14:
                    date = new Date('2019-01-14T01:00:00');
                    categories = [
                        BEACON(GYPG), BEACON(Hf6q), BEACON(ofEz), BEACON(JWwq), BEACON(ox0d), BEACON(n4gK), BEACON(QuLX),
                        BEACON(pMaq), BEACON(GmK6), BEACON(lwFq), BEACON(oiFK)];
                    break;
                case JAN_15:
                    date = new Date('2019-01-15T01:00:00');
                    categories = [
                        BEACON(lwFq), BEACON(ofEz), BEACON(pMaq), BEACON(LLz2), BEACON(Hf6q), BEACON(Xgti), BEACON(GYPG),
                        BEACON(GmK6), BEACON(n4gK), BEACON(ox0d), BEACON(QuLX), BEACON(oiFK)
                    ];
                    break;
                case JAN_16:
                    date = new Date('2019-01-16T01:00:00');
                    categories = [BEACON(n4gK), BEACON(ofEz),
                        BEACON(Xgti), BEACON(pMaq), BEACON(lwFq), BEACON(Hf6q), BEACON(LLz2), BEACON(ox0d),
                        BEACON(GmK6), BEACON(UUWO)
                    ];
                    break;
                case JAN_17:
                    date = new Date('2019-01-17T01:00:00');
                    categories = [BEACON(pMaq), BEACON(ox0d),
                        BEACON(Hf6q), BEACON(lwFq), BEACON(LLz2), BEACON(Xgti), BEACON(GmK6), BEACON(n4gK), BEACON(ofEz),
                        BEACON(WGSU), BEACON(nnhk)
                    ];
                    break;
                case JAN_18:
                    date = new Date('2019-01-18T01:00:00');
                    categories = [
                        BEACON(n4gK), BEACON(ofEz), BEACON(LLz2), BEACON(Hf6q), BEACON(pMaq), BEACON(GmK6), BEACON(lwFq),
                        BEACON(ox0d), BEACON(UUWO), BEACON(Xgti), BEACON(Sfo7), BEACON(oiFK)
                    ];
                    break;
                case JAN_19:
                    date = new Date('2019-01-19T01:00:00');
                    categories = [
                        BEACON(ox0d), BEACON(GmK6), BEACON(Hf6q), BEACON(pMaq), BEACON(oiFK), BEACON(lwFq), BEACON(LLz2),
                        BEACON(Xgti), BEACON(ofEz)
                    ];
                    break;
                case JAN_20:
                    date = new Date('2019-01-20T01:00:00');
                    categories = [
                        BEACON(pMaq), BEACON(ox0d), BEACON(GmK6), BEACON(Hf6q), BEACON(ofEz), BEACON(LLz2), BEACON(Xgti),
                        BEACON(lwFq), BEACON(oiFK), BEACON(UUWO), BEACON(WGSU), BEACON(n4gK), BEACON(nnhk)
                    ];
                    break;
            }
            let chartLoadedFunction = this.state.chartsLoading ? {chartLoaded: () => this.chartLoaded()} : {};
            let chartId = "chart_" + i + "_" + DATES[i].selector;
            charts.push(<Chart id={chartId} date={date} categories={categories} key={"chart_" + DATES[i].selector}
                               identifier={DATES[i].selector} active={this.props.selected === DATES[i].selector}
                               {...chartLoadedFunction}/>);
        }
        return charts;
    }

    toggleControlsPanel(event) {
        event.preventDefault();
        this.setState({controlsCollapsed: !this.state.controlsCollapsed}, () => {
            let controlsDiv = document.getElementById("controls-container");
            let chartsDiv = document.getElementById("charts-container");

            controlsDiv.classList.toggle(CONTROLS_CONTAINER_WIDTH);
            controlsDiv.style.display === "none" ? controlsDiv.style.display = "block" : controlsDiv.style.display = "none";

            chartsDiv.classList.toggle(CONTROLS_CONTAINER_WIDTH);
            chartsDiv.classList.toggle("w-full");
            chartsDiv.firstChild.classList.toggle("mr-10");

            window.dispatchEvent(new Event('resize'));
        });
    }

    render() {
        return (
            <div id="charts-container" className={CHARTS_CONTAINER_WIDTH + " h-auto"}>
                <div id={"charts-content"} className={"mr-10 h-auto"}>
                    {this.initCharts()}
                    <div id={"toggle-control"}>
                        {this.state.controlsCollapsed ?
                            <img src={sanitizePublicPath("static/collapse_decrease.png")}
                                 onClick={(e) => this.toggleControlsPanel(e)} alt={"collapse_decrease"}/> :
                            <img src={sanitizePublicPath("static/collapse_increase.png")}
                                 onClick={(e) => this.toggleControlsPanel(e)} alt={"collapse_increase"}/>
                        }
                    </div>
                </div>
            </div>
        );
    }

}