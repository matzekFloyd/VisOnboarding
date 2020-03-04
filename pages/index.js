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
            mode: null
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
        Router.push(to).then(() => console.log("Redirecting: ", to));
    }

    initCards() {
        let cards = [];
        if (this.activeMode(OPTIONAL)) {
            cards.push(<OnboardingCard key={"card_1"} className={"mr-6 ml-auto"} onClick={(e) => this.navigate(e, URL.assessment)}/>);
            cards.push(<TaskCard key={"card_2"} className={"ml-6 mr-auto"} onClick={(e) => this.navigate(e, URL.context)}/>)
        } else if (this.activeMode(ONBOARDING)) {
            cards.push(<OnboardingCard className={"m-auto"} onClick={(e) => this.navigate(e, URL.assessment)}/>);
        } else if (this.activeMode(TASK)) {
            cards.push(<TaskCard className={"m-auto"} onClick={(e) => this.navigate(e, URL.context)}/>);
        }
        return cards;
    }

    render() {
        return (
            <Layout>
                {this.state.loading ? <Empty/> :
                    <div className={"flex flex-wrap w-full h-screen"}>
                        {this.initCards()}
                    </div>
                }
            </Layout>
        );
    }
}

const OnboardingCard = React.memo(function OnboardingCard(props) {
    return <ModeCard className={props.className} image={props.image} onClick={props.onClick} title={props.title}>
        <ModeCardText>
            Start a data visualization onboarding tour consisting of 4 phases: Assessment,
            Onboarding, Task, Visualisation.
        </ModeCardText>
    </ModeCard>;
});
OnboardingCard.defaultProps = {
    title: "Option A",
    image: "static/visOnboarding_onboarding.png"
};
OnboardingCard.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const TaskCard = React.memo(function TaskCard(props) {
    return <ModeCard className={props.className} image={props.image} onClick={props.onClick} title={props.title}>
        <ModeCardText>
            Start without onboarding and navigate directly to the task.
        </ModeCardText>
    </ModeCard>;
});
TaskCard.defaultProps = {
    title: "Option B",
    image: "static/visOnboarding_task.png"
};
TaskCard.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const ModeCard = React.memo(function ModeCard(props) {
    let className = props.className + " bg-gray-100 flex hover:bg-blue-600 hover:text-white max-w-lg mt-auto mb-auto rounded overflow-hidden shadow-lg cursor-pointer p-2";
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
    onClick: PropTypes.func.isRequired
};

const ModeCardText = React.memo(function ModeCardText(props) {
    return <p>
        {props.children}
    </p>
});

export default withPageRouter(Home)