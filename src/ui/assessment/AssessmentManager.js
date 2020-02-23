import React, {PureComponent} from 'react';
import {
    TASK_DATA_SET_VISUALISATION,
    TASK_GANTT_PROJECT_MANAGEMENT,
    TASK_GANTT_RESOURCE_MANAGEMENT, TASK_IRREGULAR_TIME_SERIES, TASK_LINE_TIME_SERIES,
} from "../../../constants";
import {GANTT_PROJECT_MANAGEMENT} from "../../config/assessment/1_GANTT_PROJECT_MANAGEMENT";
import {GANTT_RESOURCE_MANAGEMENT} from "../../config/assessment/2_GANTT_RESOURCE_MANAGEMENT";
import {DATA_SET_VISUALISATION} from "../../config/assessment/3_DATASET_VISUALISATION";
import {LINE_TIME_SERIES} from "../../config/assessment/4_LINE_TIME_SERIES";
import {IRREGULAR_TIME_SERIES} from "../../config/assessment/5_IRREGULAR_TIME_SERIES";
import {Empty} from "../components";
import Router from "next/router";
import {URL} from "../../../constants";
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import {sanitizePublicPath} from "../../util/helpers";

const Task = dynamic(() => import('./Task'));

const TASK_TEXT_MAPPING = (task) => {
    switch (task) {
        case TASK_GANTT_PROJECT_MANAGEMENT:
            return {title: "Project management", category: "Gantt Chart"};
        case TASK_DATA_SET_VISUALISATION:
            return {title: "Dataset visualisation", category: ""};
        case TASK_IRREGULAR_TIME_SERIES:
            return {title: "Snow depth at Vikjafjell", category: "Data over time"};
        case TASK_GANTT_RESOURCE_MANAGEMENT:
            return {title: "Car rental schedule", category: "Gantt Chart"};
        case TASK_LINE_TIME_SERIES:
            return {title: "USD to EUR exchange rate", category: "Data over time"};
    }
};

export default class AssessmentManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 0,
            finishedTasks: [],
            assessmentCompleted: false
        };
    }

    addCompletedTask(index, identifier, success, time) {
        let newIndex = index + 1;
        this.setState({current: newIndex}, () => {
            this.state.finishedTasks.push({task: identifier, success: success, time: time});
            if (newIndex >= this.props.tasks.length) {
                //TODO
                this.setState({assessmentCompleted: true}, () => {
                    // let to = URL.onboarding.basic;
                    // let rand = Math.floor(Math.random() * 100);
                    // let href = to + "?res=" + rand.toString();
                    // Router.push(href, href, {}).then(() => console.log("Redirecting: ", to));
                });
            }
        });
    }

    redirect() {
        let to = URL.onboarding.basic;
        let rand = Math.floor(Math.random() * 100);
        let href = to + "?res=" + rand.toString();
        Router.push(href, href, {}).then(() => console.log("Redirecting: ", to));
    }

    getConfig(identifier) {
        switch (identifier) {
            case TASK_GANTT_PROJECT_MANAGEMENT:
                return GANTT_PROJECT_MANAGEMENT;
            case TASK_GANTT_RESOURCE_MANAGEMENT:
                return GANTT_RESOURCE_MANAGEMENT;
            case TASK_DATA_SET_VISUALISATION:
                return DATA_SET_VISUALISATION;
            case TASK_LINE_TIME_SERIES:
                return LINE_TIME_SERIES;
            case TASK_IRREGULAR_TIME_SERIES:
                return IRREGULAR_TIME_SERIES;
        }
    }

    task() {
        let html = [];
        for (let i = 0; i < this.props.tasks.length; i++) {
            let task = this.state.current === i ? <Task key={"task_" + i} index={i}
                                                        taskCompleted={(index, taskIdentifier, success, time) => this.addCompletedTask(index, taskIdentifier, success, time)}
                                                        config={this.getConfig(this.props.tasks[i])}/> :
                <Empty key={"task_" + i}/>;
            html.push(task);
        }
        return html;
    }

    render() {
        return (this.state.assessmentCompleted ?
            <AssessmentCompletedScreen finishedTasks={tasks} onClick={() => this.redirect()}/> : this.task());
    }

}
AssessmentManager.propTypes = {
    tasks: PropTypes.array.isRequired
};

const AssessmentCompletedTitle = React.memo(function AssessmentCompletedTitle() {
    return <p className={"text-center"}><strong>You have successfully passed the assessment test!</strong></p>;
});

const AssessmentResultHeading = React.memo(function AssessmentResultHeading() {
    return <tr>
        <th className="px-4 py-2">#</th>
        <th className="px-4 py-2">Task</th>
        <th className="px-4 py-2">Category</th>
        <th className="px-4 py-2">Time</th>
        <th className="px-4 py-2">Result</th>
        <th className="px-4 py-2">Points</th>
    </tr>
});

const AssessmentResult = React.memo(function AssessmentResult(props) {
    let classes = "border px-4 py-2";
    return <tr>
        <td className={classes}>{props.index}</td>
        <td className={classes}>{props.title}</td>
        <td className={classes}>{props.category}</td>
        <td className={classes}>{props.min + "m " + props.sec + "s"}</td>
        <td align={"center"}
            className={props.success ? "bg-green-300 " + classes : "bg-red-300 " + classes}>{props.success ?
            <img src={sanitizePublicPath("static/check-24px.svg")} alt={""}/> :
            <img src={sanitizePublicPath("static/close-24px.svg")} alt={""}/>}
        </td>
        <td align={"center"}
            className={props.success ? "bg-green-300 " + classes : "bg-red-300 " + classes}>{props.points}</td>
    </tr>
});
AssessmentResult.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    sec: PropTypes.number.isRequired,
    success: PropTypes.bool.isRequired,
    points: PropTypes.number.isRequired,
};

const AssessmentResultTotal = React.memo(function AssessmentResultTotal(props) {
    return <tr>
        <td className="invisible border px-4 py-2"/>
        <td className="invisible border px-4 py-2"/>
        <td className="invisible border px-4 py-2"/>
        <td className="invisible border px-4 py-2"/>
        <td className="invisible border px-4 py-2"/>
        <td align={"center"} className="bg-green-300 font-bold border border-black px-4 py-2">{props.pointsTotal}</td>
    </tr>
});
AssessmentResultTotal.propTypes = {
    pointsTotal: PropTypes.number.isRequired
};

const RedirectOnboardingBtn = React.memo(function RedirectOnboardingBtn(props) {
    return <button
        className={"m-auto content-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}
        onClick={props.onClick}>
        Go to Onboarding
    </button>
});
RedirectOnboardingBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const AssessmentCompletedScreen = React.memo(function AssessmentCompletedScreen(props) {
    let results = [];
    let pointsTotal = 0;
    for (let i = 0; i < props.finishedTasks.length; i++) {
        let cur = props.finishedTasks[i];

        let index = i + 1;
        let title = TASK_TEXT_MAPPING(cur.task).title;
        let category = TASK_TEXT_MAPPING(cur.task).category;
        let min = Math.floor(cur.time / 60);
        let sec = Math.floor(cur.time % 60);

        let points = 0;
        if (cur.success) {
            points = 20;
            if (min >= 2) points = points - min;
        }
        pointsTotal = pointsTotal + points;

        results.push(<AssessmentResult key={"assessment_result_" + i} index={index} title={title} category={category}
                                       min={min} sec={sec}
                                       success={cur.success} points={points}/>);
    }
    results.push(<AssessmentResultTotal pointsTotal={pointsTotal}/>);

    return <div className="flex h-screen">
        <div className={"w-2/4 m-auto border border-solid h-auto"}>
            <div className={"flex"}>
                <div className={"m-auto p-8"}>
                    <AssessmentCompletedTitle/>
                    <br/>
                    <table className="table-auto">
                        <thead>
                        <AssessmentResultHeading/>
                        </thead>
                        <tbody>
                        {results}
                        </tbody>
                    </table>
                    <br/>
                    <div className={"flex"}>
                        <RedirectOnboardingBtn onClick={props.onClick}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
});
AssessmentCompletedScreen.propTypes = {
    finishedTasks: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};