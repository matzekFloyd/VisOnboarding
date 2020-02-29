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
        let buttons = [];
        let button_css = "w-32 mr-3 ml-3 chart-nav-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded h-auto";

        for (let i = 0; i < DATES.length; i++) {
            let css = button_css;
            if (this.props.selected === DATES[i].selector) css += " active ";
            let btn = <DateNavBtn key={"date_nav_btn_" + i} css={css}
                                  onClick={() => this.setSelected(DATES[i].selector)}
                                  text={DATES[i].btnTxt}/>;
            buttons.push(btn)
        }
        buttons.push(<DateNavBtn css={button_css} onClick={() => this.setSelected(DATES[0].selector)} text={"Reset date"}/>);
        return <div className="h-64 grid grid-rows-4 grid-flow-col gap-4">
            <DateNavRow className={"m-auto"}>
                {buttons[0]}
                {buttons[1]}
            </DateNavRow>
            <DateNavRow className={"m-auto"}>
                {buttons[2]}
                {buttons[3]}
            </DateNavRow>
            <DateNavRow className={"m-auto"}>
                {buttons[4]}
                {buttons[5]}
            </DateNavRow>
            <DateNavRow className={"m-auto"}>
                {buttons[6]}
                {buttons[7]}
            </DateNavRow>
        </div>
    }

    setSelected(identifier) {
        this.props.setSelected(identifier);
    }

    setFilter(location) {
        this.eventEmitter.emit("filterByLocation", location);
    }

    render() {
        return (<div id="controls-container" className={"w-1/4 h-auto ml-auto mr-auto"}>
                <MapContent className={"w-full mb-6 mt-12"}>
                    <MapImage src={sanitizePublicPath("static/visualisation/gf_layout.png")}
                              mapName={"layoutMap"}/>
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
                </MapContent>
                <DateNavContent className={"mt-8"}>
                    {this.initDatesNavigation()}
                </DateNavContent>
            </div>
        );
    }

}
ControlsManager.propTypes = {
    selected: PropTypes.string.isRequired
};

const MapContent = React.memo(function MapContent(props) {
    return <div className={props.className}>
        {props.children}
    </div>;
});
MapContent.propTypes = {
    className: PropTypes.string.isRequired
};

const MapImage = React.memo(function MapImage(props) {
    return <img className={"image layout m-auto"} src={props.src} alt={"map_image"} useMap={"#" + props.mapName}/>
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

const DateNavContent = React.memo(function DateNavContent(props) {
    return <div className={props.className}>
        {props.children}
    </div>;
});
DateNavContent.propTypes = {
    className: PropTypes.string.isRequired
};

const DateNavRow = React.memo(function DateNavRow(props) {
    return <div className={props.className}>
        {props.children}
    </div>;
});
DateNavRow.propTypes = {
    className: PropTypes.string.isRequired
};

const DateNavBtn = React.memo(function DateNavBtn(props) {
    return <button className={props.css} onClick={props.onClick}>{props.text}</button>;
});
DateNavBtn.propTypes = {
    css: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};