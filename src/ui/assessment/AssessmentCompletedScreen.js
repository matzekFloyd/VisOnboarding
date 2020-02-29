import React from "react";
import PropTypes from "prop-types";
import {sanitizePublicPath} from "src/util/helpers";
import {
    TASK_DATA_SET_VISUALISATION,
    TASK_GANTT_PROJECT_MANAGEMENT, TASK_GANTT_RESOURCE_MANAGEMENT,
    TASK_IRREGULAR_TIME_SERIES, TASK_LINE_TIME_SERIES
} from "src/util/assessment/constants";

const TASK_TEXT_MAPPING = (task) => {
    switch (task) {
        case TASK_GANTT_PROJECT_MANAGEMENT:
            return {title: "Project management", category: "Gantt Chart"};
        case TASK_DATA_SET_VISUALISATION:
            return {title: "Dataset visualisation", category: "Visualisation techniques"};
        case TASK_IRREGULAR_TIME_SERIES:
            return {title: "Snow depth at Vikjafjell", category: "Data over time"};
        case TASK_GANTT_RESOURCE_MANAGEMENT:
            return {title: "Car rental schedule", category: "Gantt Chart"};
        case TASK_LINE_TIME_SERIES:
            return {title: "USD to EUR exchange rate", category: "Data over time"};
    }
};

export const AssessmentCompletedScreen = React.memo(function AssessmentCompletedScreen(props) {
    let results = [];
    for (let i = 0; i < props.finishedTasks.length; i++) {
        let cur = props.finishedTasks[i];
        let index = i + 1;
        let title = TASK_TEXT_MAPPING(cur.task).title;
        let category = TASK_TEXT_MAPPING(cur.task).category;
        let min = Math.floor(cur.time / 60);
        let sec = Math.floor(cur.time % 60);
        results.push(<AssessmentResult key={"assessment_result_" + i} index={index} title={title} category={category}
                                       min={min} sec={sec} skipped={cur.skipped}
                                       success={cur.success} points={cur.points}/>);
    }

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
                        <AssessmentResultTotal pointsTotal={props.pointsTotal}/>
                        <RedirectOnboardingBtn onClick={props.onClick}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
});
AssessmentCompletedScreen.propTypes = {
    finishedTasks: PropTypes.array.isRequired,
    pointsTotal: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

const AssessmentCompletedTitle = React.memo(function AssessmentCompletedTitle() {
    return <p className={"text-center"}>You have successfully finished the assessment test!</p>;
});

const AssessmentResultHeading = React.memo(function AssessmentResultHeading() {
    return <tr>
        <th className="px-4 py-2">#</th>
        <th align={"start"} className="px-4 py-2">Task</th>
        <th align={"start"} className="px-4 py-2">Category</th>
        <th className="px-4 py-2">Time</th>
        <th className="px-4 py-2">Result</th>
        <th className="px-4 py-2">Points</th>
    </tr>
});

const AssessmentResult = React.memo(function AssessmentResult(props) {
    let classes = "border px-4 py-2 ";
    let time = props.min + "m " + props.sec + "s";
    let icon = props.success ?
        <img src={sanitizePublicPath("static/assessment/check-24px.svg")} alt={""}/> :
        <img src={sanitizePublicPath("static/assessment/close-24px.svg")} alt={""}/>;

    if (props.skipped) {
        classes += "bg-gray-100";
        icon = <img src={sanitizePublicPath("static/assessment/remove-24px.svg")} alt={""}/>
    } else {
        props.success ? classes += "bg-green-200" : classes += "bg-red-200";
    }
    return <tr>
        <td className={classes}>{props.index}</td>
        <td className={classes}>{props.title}</td>
        <td className={classes}>{props.category}</td>
        <td className={classes}>{time}</td>
        <td align={"center"} className={classes}>{icon}</td>
        <td align={"center"} className={classes}>{props.points}</td>
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
    skipped: PropTypes.bool.isRequired
};

const AssessmentResultTotal = React.memo(function AssessmentResultTotal(props) {
    return <div className={"m-auto content-center"}>
        <span>Final Score: <strong>{props.pointsTotal} / 100</strong></span>
        <br/>
    </div>;
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