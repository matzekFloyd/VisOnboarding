import React, {PureComponent} from 'react';
import {Empty, LoadingIndicator} from "../components";
import ControlsManager from "./ControlsManager";
import ChartsManager from "./ChartsManager";
import {DATES} from "src/util/visualisation/constants";

export default class VisualisationManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: DATES[0].selector,
            chartsManagerLoaded: false,
            controlsManagerLoaded: false
        };
    }

    setSelected(identifier) {
        this.setState({selected: identifier});
    }

    render() {
        let chartsManagerLoadedFunction = this.state.chartsManagerLoaded ? {} : {chartManagerLoadedCallback: () => this.setState({chartsManagerLoaded: true})};
        let controlsManagerLoadedFunction = this.state.controlsManagerLoaded ? {} : {controlsManagerLoadedCallback: () => this.setState({controlsManagerLoaded: true})};
        return (<div className={this.state.chartsManagerLoaded ? "flex w-full mt-6 " : "flex w-full mt-6 hidden"}>
                {this.state.chartsManagerLoaded && this.state.controlsManagerLoaded ? <Empty/> : <LoadingMessage/>}
                <ChartsManager {...chartsManagerLoadedFunction} selected={this.state.selected}/>
                <ControlsManager {...controlsManagerLoadedFunction} selected={this.state.selected}
                                 setSelected={(identifier) => this.setSelected(identifier)}/>
            </div>
        );
    }

}

export const LoadingMessage = React.memo(function LoadingMessage() {
    return <div className={"mt-3"}><LoadingIndicator/> <b className={"ml-3"}>Initializing
        charts... </b></div>;
});