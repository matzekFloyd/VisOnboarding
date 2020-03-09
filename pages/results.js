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
        let collection = process.env.NODE_ENV === "production" ? "[PROD] assessments" : "[DEV] assessments";
        let snapshot = await fireBase.firestore()
            .collection(collection)
            .orderBy('timeCreated', 'desc')
            .limit(4)
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

    initAssessments() {
        let html = [];
        let assessments = this.props.assessments;
        for (let i = 0; i < assessments.length; i++) {
            let current = assessments[i];
            html.push(
                <div className={"mt-2 mb-2 mr-auto ml-auto border rounded p-6"}>
                    <h3 className={"text-green-800"}>{assessments.length - i}</h3>
                    <span className={"float-left "}>{current.user}</span>
                    <span className={"float-right"}>{this.convertTimeStamp(current.timeCreated.seconds)}</span>
                    <br/>
                    <TaskResultsTable taskResults={current.finishedTasks}/>
                </div>)
        }

        return html;
    }

    convertTimeStamp(unixTime) {
        let date = new Date(unixTime * 1000);
        return date.toUTCString();
    }

    render() {
        return <Layout>
            <PageHeadBox>
                <PageHeadTitle title={"Results"}/>
            </PageHeadBox>
            <div className={"results-container flex flex-wrap w-full"}>
                {this.initAssessments()}
            </div>
        </Layout>
    }
};
Results.propTypes = {};

const TaskResultsTable = React.memo(function TaskResultsTable(props) {
    let rows = [];
    for (let i = 0; i < props.taskResults.length; i++) {
        let current = props.taskResults[i];
        let title = TASK_TEXT_MAPPING(current.task).title;
        let category = TASK_TEXT_MAPPING(current.task).category;
        let min = Math.floor(current.time / 60);
        let sec = Math.floor(current.time % 60);
        rows.push(
            <AssessmentResult key={"assessment_result_" + i} index={i + 1} title={title} category={category}
                              min={min} sec={sec} skipped={current.skipped}
                              success={current.success} points={current.points}/>
        )
    }

    return <table className="table-auto">
        <thead>
        <AssessmentResultHeading/>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
});