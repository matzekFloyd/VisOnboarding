import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {ButtonWhite, ButtonActive, ButtonCta} from "../components";
import dynamic from 'next/dynamic';
import {Empty, LoadingMessage} from "../components";
import {URL} from "../../../constants";
import {BASIC, EXPERT, PROFICIENT} from "../../util/onboarding/constants";
import Error from "next/error";
import {redirect} from "src/util/helpers";

const Gantt = dynamic(() => import('./Gantt'));
const Description = dynamic(() => import('./Description'));

export default class OnboardingManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeStep: 1,
            onboardingCompleted: false,
            chartLoading: true,
            descriptionConfig: null,
            chartConfig: null,
            loading: true
        };
        this.identifier = props.identifier;
        this.steps = props.steps;
    }

    async componentDidMount() {
        let descriptionConfig = await this.getDescriptionCfg().catch((error) => console.error(error));

        let chartCfg = [];
        for (let i = 0; i < this.steps; i++) {
            let cfg;
            cfg = await this.getChartCfg(i + 1).catch((error) => console.error(error));
            chartCfg.push(cfg)
        }

        this.setState({descriptionConfig: descriptionConfig, chartConfig: chartCfg}, () => {
            this.setState({loading: false});
        });
    }

    async getDescriptionCfg() {
        if (this.props.identifier) {
            switch (this.props.identifier) {
                case BASIC:
                    return await import("src/config/onboarding/" + this.props.identifier + "/config").then((mod) => mod.BASIC_DESCRIPTION);
                case PROFICIENT:
                    return await import("src/config/onboarding/" + this.props.identifier + "/config").then((mod) => mod.PROFCIENT_DESCRIPTION);
                case EXPERT:
                    return await import("src/config/onboarding/" + this.props.identifier + "/config").then((mod) => mod.EXPERT_DESCRIPTION);
            }
        } else {
            throw new Error("No identifier set! ", this.props.identifier);
        }
    }

    async getChartCfg(index) {
        if (index) {
            switch (index) {
                case 1:
                    return await import("src/config/onboarding/" + this.props.identifier + "/charts/1_STEP").then((mod) => mod.STEP_1);
                case 2:
                    return await import("src/config/onboarding/" + this.props.identifier + "/charts/2_STEP").then((mod) => mod.STEP_2);
                case 3:
                    return await import("src/config/onboarding/" + this.props.identifier + "/charts/3_STEP").then((mod) => mod.STEP_3);
                case 4:
                    return await import("src/config/onboarding/" + this.props.identifier + "/charts/4_STEP").then((mod) => mod.STEP_4);
                case 5:
                    return await import("src/config/onboarding/" + this.props.identifier + "/charts/5_STEP").then((mod) => mod.STEP_5);
                case 6:
                    return await import("src/config/onboarding/" + this.props.identifier + "/charts/6_STEP").then((mod) => mod.STEP_6);
            }
        } else {
            throw new Error("No index set! ", index);
        }
    }

    setActiveStep(index) {
        if (!this.state.onboardingCompleted && !(index < this.state.activeStep) && !(index === this.state.activeStep + 1)) return;

        let onboardingCompleted = null;
        if (index === this.steps) onboardingCompleted = {onboardingCompleted: true};
        this.setState({activeStep: index, ...onboardingCompleted});
    }

    activeStep(index) {
        return this.state.activeStep === index;
    }

    chartLoaded() {
        this.setState({chartLoading: false});
    }

    redirectToVisualisation() {
        this.setState({loading: true}, () => {
            let href = URL.visualisation;
            redirect(href, href, {}, 250);
        });
    }

    initDescription() {
        let description = [];
        for (let i = 0; i < this.steps; i++) {
            let index = i + 1;
            this.activeStep(index) ? description.push(<Description key={"description_" + i}
                                                                   html={this.state.descriptionConfig.html[i]}
                                                                   activeStep={index}/>) : description.push(<Empty
                key={"description_" + i}/>);
        }
        return description;
    }

    initChart() {
        let chart = [];
        for (let i = 0; i < this.steps; i++) {
            let index = i + 1;
            this.activeStep(index) ? chart.push(<Gantt key={"gantt_" + i} config={this.state.chartConfig[i]}
                                                       chartLoadedCallback={() => this.chartLoaded()}/>) :
                chart.push(<Empty key={"gantt_" + i}/>)
        }
        return chart;
    }

    render() {
        return (
            this.state.loading ?
                <div className={"flex flex-wrap w-full mt-6"}>
                    <LoadingMessage/>
                </div> :
                <div className={"flex flex-wrap w-full mt-6"}>
                    <div className={"w-full h-12 m-auto"}>
                        <StepsOverview onClick={(index) => this.setActiveStep(index)} stepCount={this.steps}
                                       activeStep={this.state.activeStep}
                                       onboardingCompleted={this.state.onboardingCompleted}/>
                    </div>
                    <div className={"flex w-full pt-12 ml-12 mr-12"}>
                        <div className={"w-1/2 mr-6"}>
                            {this.initDescription()}
                        </div>
                        <div className={"w-1/2 ml-6"}>
                            {this.initChart()}
                        </div>
                    </div>
                    <div className={"flex w-full h-12 m-auto"}>
                        <div className={"w-1/3 mr-auto ml-auto mt-6"}>
                            {this.state.onboardingCompleted && !this.state.chartLoading ?
                                <div className={"flex w-full"}>
                                    <ButtonCta className={"w-2/4 m-auto"} title={"Continue to the visualisation "}
                                               onClick={() => this.redirectToVisualisation()}/>
                                </div> : <Empty/>}
                        </div>
                    </div>
                </div>);
    }
}
OnboardingManager.propTypes = {
    identifier: PropTypes.string.isRequired
};

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
