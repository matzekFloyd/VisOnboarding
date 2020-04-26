import React, {PureComponent} from 'react';
import {GANTT_PROJECT_MANAGEMENT} from "src/config/assessment/1_GANTT_PROJECT_MANAGEMENT";
import {GANTT_RESOURCE_MANAGEMENT} from "src/config/assessment/2_GANTT_RESOURCE_MANAGEMENT";
import {DATA_SET_VISUALISATION} from "src/config/assessment/3_DATASET_VISUALISATION";
import {LINE_TIME_SERIES} from "src/config/assessment/4_LINE_TIME_SERIES";
import {IRREGULAR_TIME_SERIES} from "src/config/assessment/5_IRREGULAR_TIME_SERIES";
import {URL} from "../../../constants";
import Task from "./Task";
import PropTypes from 'prop-types';
import {AssessmentCompletedScreen} from "./AssessmentCompletedScreen";
import {
    TASK_DATA_SET_VISUALISATION,
    TASK_GANTT_PROJECT_MANAGEMENT,
    TASK_GANTT_RESOURCE_MANAGEMENT,
    TASK_IRREGULAR_TIME_SERIES,
    TASK_LINE_TIME_SERIES
} from "../../util/assessment/constants";
import {LoadingMessage} from "../components";
import {loadFireBase} from "lib/db";
import {redirect} from "src/util/helpers";

export default class AssessmentManager extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 0,
            finishedTasks: [],
            assessmentCompleted: false,
            pointsTotal: 0,
            loading: true
        };
        this.enableAssessmentCompletedScreen = false;
        this.enableLoadingDelay = true;
        this.enableWritingToDB = true;
    }

    async componentDidMount() {
        /* TODO this did only work in DEV env, not in PROD
        this.firebase = await import("lib/db").then((module) => module.loadFireBase());
        */
        this.firebase = await loadFireBase();
        if (this.enableLoadingDelay) {
            setTimeout(() => this.setState({loading: false}), 250);
        } else {
            this.setState({loading: false});
        }
    }

    async redirectToOnboarding() {
        this.setState({loading: true});
        let href = URL.onboarding + "?pts=" + this.state.pointsTotal;
        if (this.enableWritingToDB) {
            try {
                await this.persistToDb();
                redirect(href);
            } catch (error) {
                console.error("Failed persisting to DB", error);
            }
        } else {
            redirect(href);
        }
    }

    async persistToDb() {
        let collection = process.env.NODE_ENV === "production" ? "[PROD] " : "[DEV] ";
        collection += new Date().toLocaleDateString();
        let doc_id = new Date().toLocaleTimeString() + " " + this.props.user;
        let payload = {
            user: this.props.user,
            finishedTasks: this.state.finishedTasks,
            points: this.state.pointsTotal,
            timeCreated: new Date()
        };

        let db = this.firebase.firestore();
        try {
            await db.collection(collection).doc(doc_id).set(payload);
            console.log("Firebase DB write");
        } catch (error) {
            console.error("Failed writing to Firebase DB ", error);
        }
    }

    addCompletedTask(index, identifier, success, subSuccess, time, skipped) {
        let newIndex = index + 1;
        this.setState({current: newIndex}, () => {
            let points = this.calculatePoints(identifier, success, subSuccess, time);
            let result = {task: identifier, success: success, time: time, points: points, skipped: skipped};
            this.state.finishedTasks.push(result);
            if (newIndex >= this.props.tasks.length) {
                let pointsTotal = 0;
                for (let i = 0; i < this.state.finishedTasks.length; i++) {
                    pointsTotal += this.state.finishedTasks[i].points;
                }
                this.setState({assessmentCompleted: true, pointsTotal: pointsTotal}, () => {
                    this.props.assessmentCompletedCb();
                    if (!this.enableAssessmentCompletedScreen) this.redirectToOnboarding();
                });
            }
        });
    }

    calculatePoints(identifier, success, subSuccess, time) {
        let points;
        let minutes = Math.floor(time / 60);
        let subtractMinutes = (points, minutes) => {
            if (minutes >= points) return 0;
            let pts = points - minutes;
            return pts <= 0 ? 0 : pts;
        };

        let full_points = this.getConfig(identifier).points;
        if (subSuccess === null) {
            success ? points = full_points : points = 0;
        } else {
            subSuccess ? points = full_points - 5 : points = 0;
        }

        return subtractMinutes(points, minutes);
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
            let task = <Task key={"task_" + i} index={i} active={this.state.current === i}
                             taskCompleted={(index, taskIdentifier, success, subSuccess, time, skipped) => this.addCompletedTask(index, taskIdentifier, success, subSuccess, time, skipped)}
                             config={this.getConfig(this.props.tasks[i])}/>;
            html.push(task);
        }
        return html;
    }

    render() {
        let showResults = this.state.assessmentCompleted && this.enableAssessmentCompletedScreen;
        return (this.state.loading ? <LoadingMessage/> : showResults ?
            <AssessmentCompletedScreen finishedTasks={this.state.finishedTasks} pointsTotal={this.state.pointsTotal}
                                       onClick={() => this.redirectToOnboarding()}/> : this.task());
    }

}
AssessmentManager.defaultProps = {
    user: "anonymous"
};

AssessmentManager.propTypes = {
    user: PropTypes.string,
    tasks: PropTypes.array.isRequired
};