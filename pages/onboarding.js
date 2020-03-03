import React, {PureComponent} from 'react';
import Layout from "src/ui/Layout";
import {withPageRouter} from "src/util/helpers";
import OnboardingManager from "src/ui/onboarding/OnboardingManager";
import {BASIC, EXPERT, PROFICIENT} from "src/util/onboarding/constants";
import {PageHeadBox, PageHeadContent, PageHeadTitle, PageDescriptionInfoIcon} from "src/ui/components";

class Onboarding extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        let points = parseInt(props.router.query.pts) || 0;
        let onboardingCfg = this.setOnboarding(points);
        this.identifier = onboardingCfg.identifier;
        this.steps = onboardingCfg.steps;
    }

    setOnboarding(assessmentScore) {
        const ACCESS_BASIC = (points) => points <= 45;
        const ACCESS_PROFICIENT = (points) => points >= 46 && points <= 90;
        const ACCESS_EXPERT = (points) => points >= 91;

        let config = {};
        if (ACCESS_BASIC(assessmentScore)) {
            config = {identifier: BASIC, steps: 6};
        }

        if (ACCESS_PROFICIENT(assessmentScore)) {
            config = {identifier: PROFICIENT, steps: 4};
        }

        if (ACCESS_EXPERT(assessmentScore)) {
            config = {identifier: EXPERT, steps: 2};
        }
        return config;
    }

    render() {
        return (
            <Layout>
                <PageHeadBox>
                    <PageHeadTitle title={"Onboarding"}/>
                    <PageHeadContent>
                        <OnboardingDescription/>
                    </PageHeadContent>
                </PageHeadBox>
                <OnboardingManager identifier={this.identifier} steps={this.steps}/>
            </Layout>
        );
    }
}

const OnboardingDescription = React.memo(function OnboardingDescription() {
    return <div className={"assessment-description mb-2"}>
    <p><PageDescriptionInfoIcon/>Please complete the onboarding by using the numbered navigation.</p>
    <p><PageDescriptionInfoIcon/>Each step provides information and explanation that is helpful for the final task.</p>
    </div>
});


export default withPageRouter(Onboarding)