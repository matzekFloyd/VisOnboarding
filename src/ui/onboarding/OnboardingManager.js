import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {ButtonWhite, ButtonDisabled, ButtonActive, ButtonCta} from "../components";
import dynamic from 'next/dynamic';
import {Empty} from "../components";
import {URL} from "../../../constants";
import Router from "next/router";
import {BASIC, EXPERT, PROFICIENT} from "../../util/onboarding/constants";
import {BASIC_CONFIG} from "../../config/onboarding/basic/config";
import {PROFICIENT_CONFIG} from "../../config/onboarding/proficient/config";
import {EXPERT_CONFIG} from "../../config/onboarding/expert/config";

const Gantt = dynamic(() => import('./Gantt'));
const Description = dynamic(() => import('./Description'));

export default class OnboardingManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            config: null,
            activeStep: 1,
            onboardingCompleted: false,
            processing: false
        };
        this.enableControlPanel = false;
    }

    componentDidMount() {
        let cfg = null;

        switch (this.props.identifier) {
            case BASIC:
            default:
                cfg = BASIC_CONFIG;
                break;
            case PROFICIENT:
                cfg = PROFICIENT_CONFIG;
                break;
            case EXPERT:
                cfg = EXPERT_CONFIG;
                break;
        }
        this.setState({config: cfg});
    }

    setActiveStep(index) {
        if (!this.state.onboardingCompleted && !(index < this.state.activeStep) && !(index === this.state.activeStep + 1)) return;

        let onboardingCompleted = null;
        if (index === this.state.config.steps) onboardingCompleted = {onboardingCompleted: true};
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

        if (next >= this.state.config.steps) {
            next = this.state.config.steps;
            onboardingCompleted = {onboardingCompleted: true};
        }
        this.setState({activeStep: next, ...onboardingCompleted});
    }

    chartLoaded() {
        this.setState({processing: false});
    }

    skip() {
        this.setState({activeStep: this.state.config.steps});
    }

    redirectToContext() {
        let href = URL.context;
        Router.push(href, href, {}).then(() => console.log("Redirecting: ", href));
    }

    initDescription() {
        let description = [];
        for (let i = 0; i < this.state.config.steps; i++) {
            let index = i + 1;
            this.activeStep(index) ? description.push(<Description key={"description_" + i}
                                                                   html={this.state.config.html[i]}
                                                                   activeStep={index}/>) : description.push(<Empty
                key={"description_" + i}/>);
        }
        return description;
    }

    initChart() {
        let chart = [];
        for (let i = 0; i < this.state.config.steps; i++) {
            let index = i + 1;
            this.activeStep(index) ? chart.push(<Gantt key={"gantt_" + i} config={this.state.config.chartCfg[i]}
                                                       chartLoadedCallback={() => this.chartLoaded()}
                                                       activeStep={index}/>) :
                chart.push(<Empty key={"gantt_" + i}/>)
        }
        return chart;
    }

    render() {
        return (
            this.state.config ? <div className={"flex flex-wrap w-full mt-12"}>
                <div className={"w-full h-12 m-auto"}>
                    <StepsOverview onClick={(index) => this.setActiveStep(index)} stepCount={this.state.config.steps}
                                   activeStep={this.state.activeStep}
                                   onboardingCompleted={this.state.onboardingCompleted}/>
                </div>
                <div className={"flex w-full pt-16 ml-12 mr-12"}>
                    <div className={"w-1/2 mr-6"}>
                        {this.initDescription()}
                    </div>
                    <div className={"w-1/2 ml-6"}>
                        {this.initChart()}
                    </div>
                </div>
                <div className={"flex w-full h-12 m-auto"}>
                    <div className={"w-1/3 mr-auto ml-auto mt-8"}>
                        {this.enableControlPanel ? <ControlPanel activeStep={this.state.activeStep}
                                                                 onboardingCompleted={this.state.onboardingCompleted}
                                                                 steps={this.state.config.steps}
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
            </div> : <Empty/>);
    }
}
OnboardingManager.propTypes = {
    identifier: PropTypes.string.isRequired
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
                <ButtonWhite className={"w-1/4 m-auto"} onClick={() => props.nextStep(step)} title={"Next"}/>
            </div> :
            <Empty key={"control_panel_" + i}/>;
        html.push(buttons);
    }
    return html;
});

const StepNavigationBtn = React.memo(function StepNavigationBtn(props) {
    let button;
    let title = "" + props.index;
    let onClick = props.onClick;
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
