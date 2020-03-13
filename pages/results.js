import React, {PureComponent} from 'react';
import {loadFireBase} from "lib/db";
import Layout from "src/ui/Layout";
import {PageHeadBox, PageHeadTitle} from "src/ui/components";
import {
    AssessmentResult,
    AssessmentResultHeading,
    TASK_TEXT_MAPPING
} from "src/ui/assessment/AssessmentCompletedScreen";

export default class Results extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    static async getInitialProps() {
        let fireBase = await loadFireBase();
        let collection = "";
        let env = process.env.NODE_ENV === "production" ? "[PROD] " : "[DEV] ";
        collection += env;
        let today = new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear();
        collection += today;
        let snapshot = await fireBase.firestore()
            .collection(collection)
            .orderBy('timeCreated', 'desc')
            .get()
            .then((snapshot) => {
                return snapshot;
            });
        let data = [];
        await snapshot.forEach((doc) => {
            data.push(
                Object.assign(
                    {id: doc.id}, doc.data()
                )
            )
        });
        return {assessments: data};
    }

    render() {
        let results = this.props.assessments;
        let resultsStr = JSON.stringify(this.props.assessments, null, 3);
        console.warn("Results: ", results);
        return <Layout>
            <PageHeadBox>
                <PageHeadTitle title={"Results"}/>
            </PageHeadBox>
            <pre>{resultsStr}</pre>
        </Layout>
    }
};