import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import {PageDescriptionIcon, PageHeadBox, PageHeadTitle, PageHeadContent} from "src/ui/components";

export default class Context extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <PageHeadBox>
                    <PageHeadTitle title={"Context"}/>
                    <PageHeadContent>
                        <ContextDescription/>
                    </PageHeadContent>
                </PageHeadBox>
                <div className={"flex flex-wrap w-full mt-12 bg-green-200"}>
                    Placeholder text
                </div>
            </Layout>
        );
    }

}

const ContextDescription = React.memo(function AssessmentDescription() {
    return <div className={"context-description"}>
        <p><PageDescriptionIcon icon={"static/check-24px.svg"}/>Assessment</p>
        <p><PageDescriptionIcon icon={"static/check-24px.svg"}/>Onboarding</p>
        <p><PageDescriptionIcon icon={"static/radio_button_unchecked-24px.svg"}/>Visualization Task</p>
    </div>
});