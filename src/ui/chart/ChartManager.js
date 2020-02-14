import React, {PureComponent} from 'react';
import {
    BEACON,
    DORNEREI,
    FUNKEN, GmK6, GYPG, Hf6q,
    JAN_14,
    JAN_15,
    JAN_16,
    JAN_17,
    JAN_18,
    JAN_19,
    JAN_20, JWwq, LLz2, lwFq, n4gK, nnhk, ofEz, oiFK, ox0d, pMaq, QuLX,
    ROBOTER, Sfo7,
    STANZEN, UUWO, WGSU, Xgti
} from "../../../constants";
import Chart from "./Chart";
import {sanitizePublicPath} from "../../util/helpers";

const btn_styling = "chart-nav-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1 w-1/3 h-auto";

const CHARTS_CONTAINER_WIDTH = "w-3/4";
const CONTROLS_CONTAINER_WIDTH = "w-1/4";

const DATES = [
    {selector: JAN_14, btnTxt: "14.01.2019"},
    {selector: JAN_15, btnTxt: "15.01.2019"},
    {selector: JAN_16, btnTxt: "16.01.2019"},
    {selector: JAN_17, btnTxt: "17.01.2019"},
    {selector: JAN_18, btnTxt: "18.01.2019"},
    {selector: JAN_19, btnTxt: "19.01.2019"},
    {selector: JAN_20, btnTxt: "20.01.2019"}
];

export default class ChartManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: DATES[0].selector,
            filter: null,
            hidden: []
        };
    }

    isSelected(identifier) {
        return this.state.selected === identifier;
    }

    setSelected(identifier) {
        this.setState({selected: identifier})
    }

    initChartNav() {
        let firstRow = [];
        let secondRow = [];

        for (let i = 0; i < DATES.length; i++) {
            let btn = <button key={"btn_" + DATES[i].selector}
                              className={this.state.selected === DATES[i].selector ? btn_styling + " active" : btn_styling}
                              onClick={() => this.setSelected(DATES[i].selector)}>{DATES[i].btnTxt}</button>;
            if (i < 3) {
                firstRow.push(btn)
            } else {
                secondRow.push(btn)
            }
        }
        return <div className={"chart-nav mt-12"}>
            <div className={"flex mb-4"}>
                {firstRow}
            </div>
            <div className={"flex mb-4"}>
                {secondRow}
            </div>
        </div>;
    }

    initCharts() {
        let charts = [];
        for (let i = 0; i < DATES.length; i++) {
            let date = "";
            let categories = "";
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
            charts.push(<Chart date={date} categories={categories}
                               filter={this.state.filter}
                               key={"chart_" + DATES[i].selector}
                               identifier={DATES[i].selector}
                               active={this.isSelected(DATES[i].selector)}/>);
        }
        return charts;
    }

    initFilter() {
        //TODO
        let html = [];
        html.push(<span>Active filter: {this.state.filter}</span>);
        return html;
    }

    setFilter(location) {
        this.setState({filter: location});
    }

    toggleControlsPanel(event) {
        event.preventDefault();

        let controlsDiv = document.getElementById("controls-container");
        let chartsDiv = document.getElementById("charts-container");

        controlsDiv.classList.toggle(CONTROLS_CONTAINER_WIDTH);
        controlsDiv.style.display === "none" ? controlsDiv.style.display = "block" : controlsDiv.style.display = "none";

        chartsDiv.classList.toggle(CONTROLS_CONTAINER_WIDTH);
        chartsDiv.classList.toggle("w-full");

        window.dispatchEvent(new Event('resize'));
    }

    render() {
        return (<div>
                <div className={"flex flex-wrap"}>
                    <div id="charts-container" className={CHARTS_CONTAINER_WIDTH + " h-auto"}>
                        <div id={"charts-content"} className={"mt-6 mr-16 h-auto"}>
                            {this.initCharts()}
                            <button id={"toggle-control"} onClick={(e) => this.toggleControlsPanel(e)}>toggle</button>
                        </div>
                    </div>
                    <div id="controls-container" className={CONTROLS_CONTAINER_WIDTH + " h-auto"}>
                        <div id={"controls-content"}>
                            {this.initFilter()}
                            <img className={"mt-48 image layout"} src={sanitizePublicPath("static/gf_layout.png")}
                                 alt="map" useMap={"#layoutMap"}/>
                            <map name={"layoutMap"}>
                                <area id="area-dornerei" shape={"react"} href={"#"}
                                      coords={"225,75,275,150"}
                                      onClick={() => this.setFilter(DORNEREI.name)} alt={""}/>
                                <area id="area-roboter" shape={"react"} href={"#"}
                                      coords={"320,155,180,200"}
                                      onClick={() => this.setFilter(ROBOTER.name)} alt={""}/>
                                <area id="area-stanzen" shape={"react"} href={"#"}
                                      coords={"160,210,255,300"}
                                      onClick={() => this.setFilter(STANZEN.name)} alt={""}/>
                                <area id="area-funken" shape={"react"} href={"#"}
                                      coords={"270,215,408,300"}
                                      onClick={() => this.setFilter(FUNKEN.name)} alt={""}/>
                            </map>
                            {this.initChartNav()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}