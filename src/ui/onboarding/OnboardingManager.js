import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

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
        return (<div>
            <div className={"flex"}>
                <div className={"w-3/4 h-12 m-auto content-center"}>
                    <StepsOverview onClick={(index) => this.setActiveStep(index)} stepCount={this.props.config.steps}
                                   activeStep={this.state.activeStep}/>
                </div>
            </div>
            <div className={"flex pt-16 ml-12 mr-12"}>
                <div className={"w-2/5 bg-red-200 mr-6"}>
                    Left Box
                </div>
                <div className={"w-3/5 bg-green-200 ml-6"}>
                    Right Box
                </div>
            </div>
        </div>);
    }
}
OnboardingManager.propTypes = {};

const StepNavigationBtn = React.memo(function StepNavigationBtn(props) {
    let inActiveBtn = "bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
    let activeBtn = "bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded";

    return <div className="steps-step">
        <button className={props.active ? activeBtn : inActiveBtn} onClick={props.onClick}>{props.index} </button>
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
