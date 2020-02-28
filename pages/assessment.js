import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import AssessmentManager from "src/ui/assessment/AssessmentManager";
import {TASKS} from "src/util/assessment/constants";

export default class Assessment extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.tasks = TASKS;
    }

    render() {
        return (
            <Layout>
                <AssessmentManager tasks={this.tasks}/>
            </Layout>
        );
    }

}