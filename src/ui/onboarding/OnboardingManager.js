import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {ButtonWhite, ButtonDisabled, ButtonActive, ButtonCta} from "../components";
import dynamic from 'next/dynamic';
import {Empty} from "../components";
import {URL} from "../../../constants";
import Router from "next/router";

const Gantt = dynamic(() => import('./Gantt'));

export default class OnboardingManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeStep: 1,
            onboardingCompleted: false,
            processing: false
        };
        this.enableControlPanel = false;
    }

    setActiveStep(index) {
        if (!this.state.onboardingCompleted && !(index < this.state.activeStep) && !(index === this.state.activeStep + 1)) return;

        let onboardingCompleted = null;
        if (index === this.props.config.steps) onboardingCompleted = {onboardingCompleted: true};
        this.setState({activeStep: index, ...onboardingCompleted});
    }

    activeStep(index) {
        return this.state.activeStep === index;
    }

    previousStep(index) {
        let previous = index - 1;
        if (previous < 1) previous = 1;
        this.setActiveStep(previous);
    }

    nextStep(index) {
        let next = index + 1;
        let onboardingCompleted = null;

        if (next >= this.props.config.steps) {
            next = this.props.config.steps;
            onboardingCompleted = {onboardingCompleted: true};
        }
        this.setState({activeStep: next, ...onboardingCompleted});
    }

    chartLoaded() {
        this.setState({processing: false});
    }

    skip() {
        this.setState({activeStep: this.props.config.steps});
    }

    redirectToContext() {
        let href = URL.context;
        Router.push(href, href, {}).then(() => console.log("Redirecting: ", href));
    }

    render() {
        return (<div className={"flex flex-wrap w-full mt-12"}>
            <div className={"w-full h-12 m-auto"}>
                <StepsOverview onClick={(index) => this.setActiveStep(index)} stepCount={this.props.config.steps}
                               activeStep={this.state.activeStep} onboardingCompleted={this.state.onboardingCompleted}/>
            </div>
            <div className={"flex w-full pt-16 ml-12 mr-12"}>
                <div className={"w-2/5 mr-6 bg-green-200"}>
                    {this.state.activeStep % 2 === 0 ? "AAASDKALKSJDKLASJD" : "QWEQOWIEPOIQWEPOIQWE"}
                </div>
                <div className={"w-3/5 bg-green-200 ml-6"}>
                    {this.activeStep(1) ?
                        <Gantt chartLoadedCallback={() => this.chartLoaded()} activeStep={this.state.activeStep}/> :
                        <Empty/>}
                    {this.activeStep(2) ?
                        <Gantt chartLoadedCallback={() => this.chartLoaded()} activeStep={this.state.activeStep}/> :
                        <Empty/>}
                    {this.activeStep(3) ?
                        <Gantt chartLoadedCallback={() => this.chartLoaded()} activeStep={this.state.activeStep}/> :
                        <Empty/>}
                    {this.activeStep(4) ?
                        <Gantt chartLoadedCallback={() => this.chartLoaded()} activeStep={this.state.activeStep}/> :
                        <Empty/>}
                    {this.activeStep(5) ?
                        <Gantt chartLoadedCallback={() => this.chartLoaded()} activeStep={this.state.activeStep}/> :
                        <Empty/>}
                    {this.activeStep(6) ?
                        <Gantt chartLoadedCallback={() => this.chartLoaded()} activeStep={this.state.activeStep}/> :
                        <Empty/>}
                </div>
            </div>
            <div className={"flex w-full h-12 m-auto"}>
                <div className={"w-1/3 mr-auto ml-auto mt-8"}>
                    {this.enableControlPanel ? <ControlPanel activeStep={this.state.activeStep}
                                                             onboardingCompleted={this.state.onboardingCompleted}
                                                             steps={this.props.config.steps}
                                                             previousStep={(i) => this.previousStep(i)}
                                                             nextStep={(i) => this.nextStep(i)}
                                                             skip={() => this.skip()}/> :
                        <Empty/>}
                    {this.state.onboardingCompleted ?
                        <div className={"flex w-full"}>
                            <ButtonCta className={"w-2/4 m-auto"} title={"Go to Task!"}
                                       onClick={() => this.redirectToContext()}/>
                        </div> : <Empty/>}
                </div>
            </div>
        </div>);
    }
}
OnboardingManager.propTypes = {
    config: PropTypes.object.isRequired
};

const ControlPanel = React.memo(function ControlPanel(props) {
    let html = [];
    for (let i = 1; i <= props.steps; i++) {
        let step = i;
        let buttons = props.activeStep === step ?
            <div key={"control_panel_" + i} className={"flex w-full"}>{props.activeStep === 1 ?
                <ButtonDisabled className={"w-1/4 m-auto"} title={"Previous"}/> :
                <ButtonWhite className={"w-1/4 m-auto"} onClick={() => props.previousStep(step)}
                             title={"Previous"}/>}
                {props.onboardingCompleted ?
                    <ButtonWhite className={"w-1/4 m-auto"} title={"Skip"} onClick={() => props.skip()}/> :
                    <ButtonDisabled className={"w-1/4 m-auto"} title={"Skip"}/>}
                <ButtonWhite className={"w-1/4 m-auto"} onClick={() => props.nextStep(step)} title={"Next"}/></div> :
            <Empty key={"control_panel_" + i}/>;
        html.push(buttons);
    }
    return html;
});

const StepNavigationBtn = React.memo(function StepNavigationBtn(props) {
    let button;
    let title = "" + props.index;
    let onClick = props.onClick;
    console.log("INDEX ACTIVE ", props.index, props.activeStep);
    if (props.active) {
        button = <ButtonActive title={title} onClick={onClick}/>;
    } else {
        if (props.onboardingCompleted) {
            button = <ButtonWhite title={title} onClick={onClick}/>;
        } else {
            if (props.index < props.activeStep || (props.index === props.activeStep + 1)) {
                button = <ButtonWhite title={title} onClick={onClick}/>;
            } else {
                button = <StepButtonDisabled title={title} onClick={onClick}/>;
            }
        }
    }
    return <div className="steps-step">
        {button}
    </div>
});
StepNavigationBtn.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

const StepButtonDisabled = React.memo(function StepButtonDisabled(props) {
    let className = "bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-900 rounded cursor-not-allowed";
    return <button onClick={props.onClick}
                   className={className}>
        {props.title}
    </button>;
});

const StepsOverview = React.memo(function StepsOverview(props) {
    let steps = [];
    for (let i = 0; i < props.stepCount; i++) {
        let index = i + 1;
        steps.push(<StepNavigationBtn key={"step_nav_btn_" + i} onClick={() => props.onClick(index)} index={index}
                                      active={props.activeStep === index} activeStep={props.activeStep}
                                      onboardingCompleted={props.onboardingCompleted}/>)
    }
    return <div className="steps-form">
        <div className="steps-row setup-panel">
            {steps}
        </div>
    </div>;
});
StepsOverview.propTypes = {
    stepCount: PropTypes.number.isRequired,
    activeStep: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onboardingCompleted: PropTypes.bool.isRequired
};
