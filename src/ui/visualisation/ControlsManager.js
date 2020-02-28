import React, {PureComponent} from 'react';
import {DATES, DORNEREI, FUNKEN, ROBOTER, STANZEN} from "src/util/visualisation/constants";
import {sanitizePublicPath} from "src/util/helpers";
import {getEventEmitter} from "src/util/eventemitter";
import PropTypes from "prop-types";

export default class ControlsManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.eventEmitter = null;
    }

    componentDidMount() {
        this.eventEmitter = getEventEmitter();
        this.props.controlsManagerLoadedCallback();
    }

    initDatesNavigation() {
        let firstRow = [];
        let secondRow = [];
        let base_css = "chart-nav-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1 h-auto";

        for (let i = 0; i < DATES.length; i++) {
            let css = base_css;
            if (this.props.selected === DATES[i].selector) css += " active ";
            if (i === 4) css += " ml-12 ";

            let btn = <DateNavBtn key={"date_nav_btn_" + i} css={css}
                                  onClick={() => this.setSelected(DATES[i].selector)}
                                  text={DATES[i].btnTxt}/>;
            if (i < 4) {
                firstRow.push(btn)
            } else {
                secondRow.push(btn)
            }
        }
        return <div className={"w-1/4"}>
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
        return (<div id="controls-container" className={"w-1/4 h-auto"}>
                <div id={"controls-content ml-10 h-auto"}>
                    <div className={"w-1/4"}>
                        <div className={"map-container mt-32"}>
                            <MapImage src={sanitizePublicPath("static/gf_layout.png")} mapName={"layoutMap"}/>
                            <Map>
                                <MapArea id={"area-dornerei"} coords={"225,75,275,150"}
                                         onClick={() => this.setFilter(DORNEREI.name)}/>
                                <MapArea id="area-roboter" coords={"320,155,180,200"}
                                         onClick={() => this.setFilter(ROBOTER.name)}/>
                                <MapArea id="area-stanzen" coords={"160,210,255,300"}
                                         onClick={() => this.setFilter(STANZEN.name)}/>
                                <MapArea id="area-funken" coords={"270,215,408,300"}
                                         onClick={() => this.setFilter(FUNKEN.name)}/>
                                <MapArea id="area-fremdschleifen" coords={"5,87,123,165"}
                                         onClick={() => this.setFilter("Fremdschleifen")}/>
                                <MapArea id="area-lager-stanzen" coords={"100,210,153,305"}
                                         onClick={() => this.setFilter("LagerStanzen")}/>
                                <MapArea id="area-rohlager" coords={"283,74,450,153"}
                                         onClick={() => this.setFilter("Rohlager")}/>
                            </Map>
                        </div>
                    </div>
                    {this.initDatesNavigation()}
                </div>
            </div>
        );
    }

}
ControlsManager.propTypes = {
    selected: PropTypes.string.isRequired
};

const MapImage = React.memo(function MapImage(props) {
    return <img className={"image layout"} src={props.src} alt={"map_image"} useMap={"#" + props.mapName}/>
});
MapImage.propTypes = {
    src: PropTypes.string.isRequired,
    mapName: PropTypes.string.isRequired
};

const Map = React.memo(function Map(props) {
    return <map name={"layoutMap"}>{props.children}</map>;
});

const MapArea = React.memo(function MapArea(props) {
    return <area id={props.id} shape={"react"} href={"#"} coords={props.coords} onClick={props.onClick} alt={""}/>
});
MapArea.propTypes = {
    id: PropTypes.string.isRequired,
    coords: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const DateNavBtn = React.memo(function DateNavBtn(props) {
    return <button className={props.css} onClick={props.onClick}>{props.text}</button>;
});
DateNavBtn.propTypes = {
    css: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};