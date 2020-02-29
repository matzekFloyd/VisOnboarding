import React, {PureComponent} from 'react';
import Layout from "src/ui/Layout";
import {withPageRouter} from "src/util/helpers";
import OnboardingManager from "src/ui/onboarding/OnboardingManager";
import {BASIC, EXPERT, PROFICIENT} from "src/util/onboarding/constants";
import "../public/styles/onboarding.scss";

class Onboarding extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.config = this.getConfig(parseInt(props.router.query.pts) || 0);
    }

    getConfig(assessmentScore) {
        const ACCESS_BASIC = (points) => points >= 0 && points <= 45;
        const ACCESS_PROFICIENT = (points) => points >= 46 && points <= 90;
        const ACCESS_EXPERT = (points) => points >= 91 && points <= 100;

        if (ACCESS_BASIC(assessmentScore)) {
            return {identifier: BASIC, steps: 6};
        }

        if (ACCESS_PROFICIENT(assessmentScore)) {
            return {identifier: PROFICIENT, steps: 4};
        }

        if (ACCESS_EXPERT(assessmentScore)) {
            return {identifier: EXPERT, steps: 2};
        }
    }

    render() {
        return (
            <Layout>
                <div className={"h-screen pt-8"}>
                    <OnboardingManager config={this.config}/>
                </div>
            </Layout>
        );
    }

}

export default withPageRouter(Onboarding)