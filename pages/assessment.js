import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import AssessmentManager from "src/ui/assessment/AssessmentManager";
import {TASKS} from "src/util/assessment/constants";
import "../public/styles/assessment.scss";
import {PageHeadBox, PageHeadContent, PageHeadTitle} from "src/ui/components";

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
                        <br/>
                        <p>
                            Placeholder text for Assessment.
                        </p>
                        <br/>
                    </PageHeadContent>
                </PageHeadBox>
                <AssessmentManager tasks={this.tasks}/>
            </Layout>
        );
    }

}