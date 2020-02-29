import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import AssessmentManager from "src/ui/assessment/AssessmentManager";
import {TASKS} from "src/util/assessment/constants";
import "../public/styles/assessment.scss";
import {PageHeadBox, PageHeadContent, PageHeadTitle} from "src/ui/components";
import {sanitizePublicPath} from "../src/util/helpers";

export default class Assessment extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.tasks = TASKS;
    }

    render() {
        return (
            <Layout>
                <PageHeadBox>
                    <PageHeadTitle title={"Assessment"}/>
                    <PageHeadContent>
                        <AssessmentDescription/>
                        <br/>
                    </PageHeadContent>
                </PageHeadBox>
                <AssessmentManager tasks={this.tasks}/>
            </Layout>
        );
    }

}

const AssessmentDescription = React.memo(function AssessmentDescription() {
    return <p className={"assessment-description"}>
                            <span>Please answer the questions by thoroughly examining the corresponding graph.
                            </span>
        <span className={"ml-6 mr-2"}><img
            src={sanitizePublicPath("static/assessment/error_outline-24px.svg")}
            alt={""}/>It is possible that multiple options are correct!</span>
    </p>;
});