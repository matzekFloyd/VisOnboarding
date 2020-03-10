import React, {PureComponent} from 'react';
import {Empty, LoadingMessage} from "../components";
import ControlsManager from "./ControlsManager";
import ChartsManager from "./ChartsManager";
import {DATES} from "src/util/visualisation/constants";
import ContextManager from "./context/ContextManager";

export default class VisualisationManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: DATES[0].selector,
            chartsManagerLoaded: false,
            controlsManagerLoaded: false,
            contextManagerLoaded: false
        };
    }

    setSelected(identifier) {
        this.setState({selected: identifier});
    }

    render() {
        let chartsManagerLoadedFunction = this.state.chartsManagerLoaded ? {} : {chartManagerLoadedCallback: () => this.setState({chartsManagerLoaded: true})};
        let controlsManagerLoadedFunction = this.state.controlsManagerLoaded ? {} : {controlsManagerLoadedCallback: () => this.setState({controlsManagerLoaded: true})};
        let contextManagerLoadedFunction = this.state.contextManagerLoadedFunction ? {} : {contextManagerLoadedCallback: () => this.setState({contextManagerLoaded: true})};
        let visualisationManagerLoaded = this.state.chartsManagerLoaded && this.state.controlsManagerLoaded && this.state.contextManagerLoaded;
        return (
            <div className={"flex w-full mt-6"}>
                <div>
                    {visualisationManagerLoaded ? <Empty/> : <LoadingMessage/>}
                </div>
                <div className={visualisationManagerLoaded ? "flex w-full mt-2 block" : "flex w-full mt-2 hidden"}>
                    <ContextManager {...contextManagerLoadedFunction} />
                    <ChartsManager {...chartsManagerLoadedFunction} selected={this.state.selected}/>
                    <ControlsManager {...controlsManagerLoadedFunction} selected={this.state.selected}
                                     setSelected={(identifier) => this.setSelected(identifier)}/>
                </div>
            </div>
        );
    }

}