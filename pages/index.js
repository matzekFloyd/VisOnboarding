import Layout from 'src/ui/Layout';
import React, {PureComponent} from 'react';
import Router from "next/router";
import {sanitizePublicPath, withPageRouter} from "../src/util/helpers";
import {Empty} from "../src/ui/components";
import PropTypes from "prop-types";
import {URL} from "../constants";

const OPTIONAL = "optional";
const ONBOARDING = "onboarding";
const TASK = "task";
const MODES = [OPTIONAL, ONBOARDING, TASK];

class Home extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: true,
            mode: null,
            user: null,
            inputValid: false,
            inputError: null
        };
    }

    componentDidMount() {
        let mode = MODES.includes(this.props.router.query.md) ? this.props.router.query.md : OPTIONAL;
        this.setState({mode: mode}, () => {
            this.setState({loading: false});
        })
    }

    activeMode(identifier) {
        return this.state.mode === identifier;
    }

    navigate(event, to) {
        event.preventDefault();
        if (!this.state.inputValid) return;
        let href = to;
        if (to === URL.assessment) {
            href += "?uid=" + this.state.user;
        }
        Router.push(href, href, {}).then(() => console.log("Redirecting: ", href));
    }

    initCards() {
        let cards = [];
        let enabled = this.state.inputValid;
        if (this.activeMode(OPTIONAL)) {
            cards.push(<OnboardingCard key={"card_1"} className={"mr-6 ml-auto"} enabled={enabled}
                                       onClick={(e) => this.navigate(e, URL.assessment)}/>);
            cards.push(<TaskCard key={"card_2"} className={"ml-6 mr-auto"} enabled={enabled}
                                 onClick={(e) => this.navigate(e, URL.context)}/>)
        } else if (this.activeMode(ONBOARDING)) {
            cards.push(<OnboardingCard key={"card_1"} className={"m-auto"}
                                       onClick={(e) => this.navigate(e, URL.assessment)}
                                       enabled={enabled}/>);
        } else if (this.activeMode(TASK)) {
            cards.push(<TaskCard key={"card_2"} className={"m-auto"} onClick={(e) => this.navigate(e, URL.context)}
                                 enabled={enabled}/>);
        }
        return cards;
    }

    handleInputChange(e) {
        this.setState({user: e.target.value}, () => {
            this.validateInput()
        });
    }

    validateInput() {
        let input = this.state.user;
        if (typeof input !== "undefined" && input !== null) {
            if (!input.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)) {
                this.setState({inputValid: false, inputError: "Only letters (a-z) and numbers (0-9) allowed!"});
            } else {
                this.setState({inputValid: true, inputError: null});
            }
        }
    }

    render() {
        return (
            <Layout>
                {this.state.loading ? <Empty/> :
                    <div className={"mt-32 w-full"}>
                        <div className={"flex w-full"}>
                            {this.initCards()}
                        </div>
                        <div className={"flex w-full"}>
                            <InputPanel inputError={this.state.inputError} onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                    </div>
                }
            </Layout>
        );
    }
}

const InputPanel = React.memo(function InputPanel(props) {
    return <div className={"w-2/5 mr-auto ml-auto mt-12"}>
            <span className="w-full block ml-auto mr-auto align-middle text-center">
                <img src={sanitizePublicPath("static/error_outline-24px.svg")} alt={""}
                     className={"inline mr-2 align-top"}/>
                {props.text}
                </span>
        <label className="w-1/2 block ml-auto mr-auto mt-3">
            <input type={"text"} onChange={props.onChange}
                   className="form-input mt-1 block w-full" placeholder={props.placeholderText}/>
            <span className={"text-red-600"}>{props.inputError}</span>
        </label>
    </div>
});
InputPanel.defaultProps = {
    text: "Please enter either your student registration number or your name and choose a path.",
    placeholderText: "it181508 / mayrhofer"
};
InputPanel.propTypes = {
    text: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

const OnboardingCard = React.memo(function OnboardingCard(props) {
    return <ModeCard className={props.className} image={props.image} onClick={props.onClick} title={props.title}
                     enabled={props.enabled}>
        <ModeCardText>
            Start a data visualization onboarding tour consisting of 4
            phases: <i>Assessment</i>, <i>Onboarding</i>, <i>Task</i>, <i>Visualisation</i>.
        </ModeCardText>
    </ModeCard>;
});
OnboardingCard.defaultProps = {
    title: "Path: Onboarding",
    image: "static/visOnboarding_onboarding.png"
};
OnboardingCard.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    enabled: PropTypes.bool.isRequired
};

const TaskCard = React.memo(function TaskCard(props) {
    return <ModeCard className={props.className} image={props.image} onClick={props.onClick} title={props.title}
                     enabled={props.enabled}>
        <ModeCardText>
            Start without onboarding and navigate directly to the task explanation.
            Phases: <i>Task</i>, <i>Visualisation</i>.
        </ModeCardText>
    </ModeCard>;
});
TaskCard.defaultProps = {
    title: "Path: Task",
    image: "static/visOnboarding_task.png"
};
TaskCard.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    enabled: PropTypes.bool.isRequired
};

const ModeCard = React.memo(function ModeCard(props) {
    let className = props.className + " bg-gray-300 flex max-w-lg mt-auto mb-auto rounded overflow-hidden shadow-lg p-2";
    let active = " hover:bg-blue-600 hover:text-white cursor-pointer";
    let inActive = " cursor-not-allowed";
    props.enabled ? className += active : className += inActive;
    return <div className={className} onClick={props.onClick}>
        <div className={""}>
            <img src={sanitizePublicPath(props.image)} alt=""/>
            <div className="px-6 py-4">
                <h2 className={"mb-2"}>{props.title}</h2>
                {props.children}
            </div>
        </div>
    </div>
});
ModeCard.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    enabled: PropTypes.bool.isRequired
};

const ModeCardText = React.memo(function ModeCardText(props) {
    return <p>
        {props.children}
    </p>
});

export default withPageRouter(Home)