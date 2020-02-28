import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

export default class OnboardingManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            step: 1
        }
    }

    setActiveStep(index) {
        this.setState({step: index});
    }

    activeStep(index) {
        return this.state === index;
    }

    render() {
        return (<div className={"flex"}>
            <div className={"w-3/4 m-auto content-center"}>
                <StepsManager onClick={(index) => this.setActiveStep(index)} stepCount={3}
                              activeStep={this.state.step}/>
            </div>
        </div>);
    }
}
OnboardingManager.propTypes = {};

const Step = React.memo(function Step(props) {
    let inActiveBtn = "bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
    let activeBtn = "bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded";

    return <div className="steps-step">
        <button className={props.active ? activeBtn : inActiveBtn} onClick={props.onClick}>{props.index} </button>
    </div>
});
Step.propTypes = {
    index: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

const StepsManager = React.memo(function StepsManager(props) {
    let steps = [];
    for (let i = 0; i < props.stepCount; i++) {
        let index = i + 1;
        steps.push(<Step key={"step_" + i} onClick={() => props.onClick(index)} index={index}
                         active={props.activeStep === index}/>)
    }
    return <div className="steps-form">
        <div className="steps-row setup-panel">
            {steps}
        </div>
    </div>;
});
StepsManager.propTypes = {
    stepCount: PropTypes.number.isRequired,
    activeStep: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};
