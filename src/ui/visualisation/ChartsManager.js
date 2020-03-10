import React, {PureComponent} from 'react';
import {
    DATES,
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
} from "../../util/visualisation/constants";
import {sanitizePublicPath} from "src/util/helpers";
import {getEventEmitter} from "src/util/eventemitter";
import dynamic from 'next/dynamic';
import {Empty} from "../components";
import PropTypes from "prop-types";

const Chart = dynamic(() => import('./Gantt'));

const TOGGLE_CONTROL_ID = "toggle-control";
const TOGGLE_CONTEXT_ID = "toggle-context";

export default class ChartsManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            controlsCollapsed: false,
            contextCollapsed: false,
            filter: null,
            chartLoading: true
        };
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

    chart(date) {
        if (this.props.selected === date) {
            let date = null;
            let categories = [];
            let selectors = [];
            for (let i = 0; i < DATES.length; i++) {
                selectors.push(DATES[i].selector);
            }
            let i = selectors.indexOf(this.props.selected);
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
            let chartLoadedFunction = this.state.chartLoading ? {chartLoaded: () => this.chartLoaded()} : {};
            let chartId = "chart_" + i + "_" + DATES[i].selector;
            return <Chart id={chartId} date={date} categories={categories} key={"chart_" + DATES[i].selector}
                          identifier={DATES[i].selector} {...chartLoadedFunction}/>;
        } else {
            return <Empty/>;
        }
    }

    chartLoaded() {
        this.setState({chartLoading: false}, () => {
            this.props.chartManagerLoadedCallback();
        });
    }

    togglePanel(event) {
        event.preventDefault();
        let div = <div/>;
        let targetId = event.target.parentElement.id;
        let newState = null;
        if (targetId === TOGGLE_CONTROL_ID) {
            div = document.getElementById("controls-container");
            newState = {controlsCollapsed: !this.state.controlsCollapsed}
        }

        if (targetId === TOGGLE_CONTEXT_ID) {
            div = document.getElementById("context-container");
            newState = {contextCollapsed: !this.state.contextCollapsed}
        }

        this.setState({...newState}, () => {
            let chartsDiv = document.getElementById("charts-container");

            div.classList.toggle("block");
            div.classList.toggle("hidden");

            let bothCollapsed = this.state.contextCollapsed && this.state.controlsCollapsed;
            let neitherCollapsed = !this.state.contextCollapsed && !this.state.controlsCollapsed;
            let oneCollapsed = this.state.contextCollapsed || this.state.controlsCollapsed;

            if (bothCollapsed) {
                if (chartsDiv.classList.contains("w-2/4")) chartsDiv.classList.remove("w-2/4");
                if (chartsDiv.classList.contains("w-3/4")) chartsDiv.classList.remove("w-3/4");
                chartsDiv.classList.add("w-full");
            } else if (neitherCollapsed) {
                if (chartsDiv.classList.contains("w-3/4")) chartsDiv.classList.remove("w-3/4");
                if (chartsDiv.classList.contains("w-full")) chartsDiv.classList.remove("w-full");
                chartsDiv.classList.add("w-2/4");
            } else {
                let previousFullScreen = chartsDiv.classList.contains("w-full");
                if (previousFullScreen && oneCollapsed) {
                    chartsDiv.classList.remove("w-full");
                    chartsDiv.classList.add("w-3/4")
                } else if (previousFullScreen) {
                    chartsDiv.classList.remove("w-full");
                    chartsDiv.classList.add("w-2/4");
                } else {
                    chartsDiv.classList.toggle("w-2/4");
                    chartsDiv.classList.toggle("w-3/4");
                }
            }
            window.dispatchEvent(new Event('resize'));
        });
    }

    render() {
        return (
            <div id={"charts-container"} className={"w-2/4 h-auto block "}>
                <div id={"charts-content"} className={"mr-10 h-auto"}>
                    {this.chart(JAN_14)}
                    {this.chart(JAN_15)}
                    {this.chart(JAN_16)}
                    {this.chart(JAN_17)}
                    {this.chart(JAN_18)}
                    {this.chart(JAN_19)}
                    {this.chart(JAN_20)}
                    <TogglePanel id={"toggle-control"} controlsCollapsed={this.state.controlsCollapsed}
                                 onClick={(e) => this.togglePanel(e)}/>
                    <TogglePanel id={"toggle-context"} controlsCollapsed={this.state.contextCollapsed}
                                 onClick={(e) => this.togglePanel(e)}/>
                </div>
            </div>
        );
    }

}
ChartsManager.propTypes = {
    chartManagerLoadedCallback: PropTypes.func,
    selected: PropTypes.string.isRequired
};

const TogglePanel = React.memo(function ControlsToggle(props) {
    let active = null;
    let inActive = null;
    if (props.id === TOGGLE_CONTROL_ID) {
        active = <img src={sanitizePublicPath("static/visualisation/collapse_decrease.png")}
                      onClick={props.onClick} alt={"collapse_decrease"}/>;
        inActive = <img src={sanitizePublicPath("static/visualisation/collapse_increase.png")}
                        onClick={props.onClick} alt={"collapse_increase"}/>;
    }

    if (props.id === TOGGLE_CONTEXT_ID) {
        active = <img src={sanitizePublicPath("static/visualisation/collapse_increase.png")}
                      onClick={props.onClick} alt={"collapse_increase"}/>;
        inActive = <img src={sanitizePublicPath("static/visualisation/collapse_decrease.png")}
                        onClick={props.onClick} alt={"collapse_decrease"}/>;
    }

    return <div id={props.id}> {props.controlsCollapsed ? active : inActive} </div>;
});
TogglePanel.propTypes = {
    id: PropTypes.string.isRequired,
    controlsCollapsed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};