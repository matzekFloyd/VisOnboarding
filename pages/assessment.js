import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import AssessmentManager from "src/ui/assessment/AssessmentManager";
import {TASKS} from "src/util/assessment/constants";
import {
    PageHeadBox,
    PageHeadContent,
    PageHeadTitle,
    PageDescriptionIcon
} from "src/ui/components";
import {Empty} from "src/ui/components";

export default class Assessment extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {assessmentCompleted: false};
        this.tasks = TASKS;
    }

    assessmentCompleted() {
        this.setState({assessmentCompleted: true});
    }

    render() {
        return (
            <Layout>
                <PageHeadBox>
                    <PageHeadTitle title={"Assessment"}/>
                    <PageHeadContent>
                        {this.state.assessmentCompleted ? <Empty/> : <AssessmentDescription/>}
                    </PageHeadContent>
                </PageHeadBox>
                <AssessmentManager assessmentCompletedCb={() => this.assessmentCompleted()} tasks={this.tasks}/>
            </Layout>
        );
    }
}

const AssessmentDescription = React.memo(function AssessmentDescription() {
    return <div className={"assessment-description mb-2"}>
        <p><PageDescriptionIcon icon={"static/error_outline-24px.svg"}/>Please answer the questions by thoroughly
            examining the corresponding graph.</p>
        <p><PageDescriptionIcon icon={"static/error_outline-24px.svg"}/>It is possible that multiple options are
            correct!</p>
    </div>
});