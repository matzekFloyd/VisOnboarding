import React, {PureComponent} from 'react';
import {DATES} from "../../../constants";
import {Empty, LoadingIndicator} from "../components";
import ControlsManager from "./ControlsManager";
import ChartsManager from "./ChartsManager";

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
        return (<div>
                {this.state.chartsManagerLoaded && this.state.controlsManagerLoaded ? <Empty/> :
                    <div className={"mt-3"}><LoadingIndicator/> <b className={"ml-3"}>Initializing
                        charts... </b></div>}
                <div className={this.state.chartsManagerLoaded ? "flex mt-6 " : "flex mt-6 hidden"}>
                    <ChartsManager {...chartsManagerLoadedFunction} selected={this.state.selected}/>
                    <ControlsManager {...controlsManagerLoadedFunction} selected={this.state.selected}
                                     setSelected={(identifier) => this.setSelected(identifier)}/>
                </div>
            </div>
        );
    }

}