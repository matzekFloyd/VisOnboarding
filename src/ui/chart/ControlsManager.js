import React, {PureComponent} from 'react';
import {DATES, DORNEREI, FUNKEN, ROBOTER, STANZEN, CONTROLS_CONTAINER_WIDTH} from "../../../constants";
import {sanitizePublicPath} from "../../util/helpers";
import {getEventEmitter} from "../../util/eventemitter";

export default class ControlsManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.eventEmitter = null;
    }

    componentDidMount() {
        this.eventEmitter = getEventEmitter();
    }

    initMap() {
        return <div className={CONTROLS_CONTAINER_WIDTH}>
            <div className={"map-container mt-32"}>
                <img className={"image layout"} src={sanitizePublicPath("static/gf_layout.png")}
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
                    <area id="area-fremdschleifen" shape={"react"} href={"#"}
                          coords={"5,87,123,165"}
                          onClick={() => this.setFilter("Fremdschleifen")} alt={""}/>
                    <area id="area-lager-stanzen" shape={"react"} href={"#"}
                          coords={"100,210,153,305"}
                          onClick={() => this.setFilter("LagerStanzen")} alt={""}/>
                    <area id="area-rohlager" shape={"react"} href={"#"}
                          coords={"283,74,450,153"}
                          onClick={() => this.setFilter("Rohlager")} alt={""}/>
                </map>
            </div>
        </div>;
    }

    initDatesNavigation() {
        let firstRow = [];
        let secondRow = [];
        let base_css = "chart-nav-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1 h-auto";

        for (let i = 0; i < DATES.length; i++) {
            let css = base_css;
            if (this.props.selected === DATES[i].selector) css += " active ";
            if (i === 4) css += " ml-12 ";

            let btn = <button key={"btn_" + DATES[i].selector}
                              className={css}
                              onClick={() => this.setSelected(DATES[i].selector)}>{DATES[i].btnTxt}</button>;
            if (i < 4) {
                firstRow.push(btn)
            } else {
                secondRow.push(btn)
            }
        }
        return <div className={CONTROLS_CONTAINER_WIDTH}>
            <div className={"chart-nav-container mt-12"}>
                <div className={"flex mb-4"}>
                    {firstRow}
                </div>
                <div className={"flex mb-4"}>
                    {secondRow}
                </div>
            </div>
        </div>;
    }

    setSelected(identifier) {
        this.props.setSelected(identifier);
    }

    setFilter(location) {
        this.eventEmitter.emit("filterByLocation", location);
    }

    render() {
        return (<div id="controls-container" className={CONTROLS_CONTAINER_WIDTH + " h-auto"}>
                <div id={"controls-content ml-10 h-auto"}>
                    {this.initMap()}
                    {this.initDatesNavigation()}
                </div>
            </div>
        );
    }

}