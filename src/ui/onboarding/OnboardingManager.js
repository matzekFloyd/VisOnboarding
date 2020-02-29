import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Chart from "./Chart";
import {ButtonWhite, ButtonDisabled, ButtonActive} from "../components";

export default class OnboardingManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeStep: 1
        }
    }

    setActiveStep(index) {
        this.setState({activeStep: index});
    }

    activeStep(index) {
        return this.state === index;
    }

    render() {
        return (<div className={"flex flex-wrap w-full mt-12"}>
            <div className={"w-full h-12 m-auto"}>
                <StepsOverview onClick={(index) => this.setActiveStep(index)} stepCount={this.props.config.steps}
                               activeStep={this.state.activeStep}/>
            </div>
            <div className={"flex w-full pt-16 ml-12 mr-12"}>
                <div className={"w-2/5 bg-red-200 mr-6"}>
                    Left Box
                </div>
                <div className={"w-3/5 bg-green-200 ml-6"}>
                    <Chart/>
                </div>
            </div>
            <div className={"flex w-full h-12 m-auto"}>
                <div className={"w-1/3 mr-auto ml-auto mt-8"}>
                    <div className={"flex w-full"}>
                        <ButtonWhite className={"w-1/4 m-auto"} onClick={() => {
                            console.log("BUTTON CLICKED")
                        }} title={"Previous"}/>
                        <ButtonDisabled className={"w-1/4 m-auto"} title={"Skip"} onClick={() => {
                            console.log("BUTTON CLICKED")
                        }}/>
                        <ButtonWhite className={"w-1/4 m-auto"} onClick={() => {
                            console.log("BUTTON CLICKED")
                        }} title={"Next"}/>
                    </div>
                </div>
            </div>
        </div>);
    }
}
OnboardingManager.propTypes = {
    config: PropTypes.object.isRequired
};

const StepNavigationBtn = React.memo(function StepNavigationBtn(props) {
    return <div className="steps-step">
        {props.active ? <ButtonActive title={"" + props.index} onClick={props.onClick}/> :
            <ButtonWhite title={"" + props.index} onClick={props.onClick}/>}
    </div>
});
StepNavigationBtn.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

const StepsOverview = React.memo(function StepsOverview(props) {
    let steps = [];
    for (let i = 0; i < props.stepCount; i++) {
        let index = i + 1;
        steps.push(<StepNavigationBtn key={"step_nav_btn_" + i} onClick={() => props.onClick(index)} index={index}
                                      active={props.activeStep === index}/>)
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
    onClick: PropTypes.func.isRequired
};
