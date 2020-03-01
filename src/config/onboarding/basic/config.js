import {STEP_1} from "src/config/onboarding/basic/charts/1_STEP";
import {STEP_2} from "src/config/onboarding/basic/charts/2_STEP";
import {STEP_3} from "src/config/onboarding/basic/charts/3_STEP";
import {STEP_4} from "src/config/onboarding/basic/charts/4_STEP";

export const BASIC_CONFIG = {
    steps: 6,
    html: [
        {
            header: {text: "Gantt chart - What is it?", img: "gantt_chart.svg"}, body:
                [
                    <p>A Gantt chart is a type of bar chart that is commonly used as an organisational tool for project
                        management. It is named after its inventor, Henry Gantt (1861–1919), who designed such a chart
                        around the years 1910–1915.</p>,
                    <p>Gantt Charts consist of a a list of activities (or tasks) with their duration over time, showing
                        when each activity starts and ends.This makes Gantt Charts useful for planning and estimating
                        how long an entire project might take. It also allows you to see what activities are running in
                        parallel to each other.</p>,
                    <p>This type of chart displays time oriented data, and usually focuses on the duration of these
                        values in order to compare their relation and dependencies to each other.</p>,
                    <p><strong>
                        Example:</strong> In this particular example a very basic Gantt Chart is showing the planning
                        and time estimation of the launch of a new product. It tells us that the launch requires about 2
                        and a half weeks of work, and consists of a long development phase, followed by a shorter beta
                        and final development phase.</p>
                ]
            , footer: null
        },
        {
            header: {text: "Gantt chart - How is it constructed?", img: "gantt_chart.svg"}, body:
                [
                    <p>
                        Gantt Charts are drawn within a table, consisting of rows (y-Axis) and columns (x-Axis). Rows
                        are used for activities/tasks and columns are used as the timescale. This gives each row its own
                        category. </p>,
                    <p>The duration of each activity is represented by the length of a bar plotted along this timescale.
                        The start of the bar is the beginning of the activity and the end of the bar is when the
                        activity should finish.</p>,
                    <p>Colour-coding the bars can be used to categorise the activities into groups. To show the
                        percentage of completion of an activity, a bar can be partially filled in, shaded differently or
                        use a different colour, to differentiate between what is done and what is left to do.
                    </p>,
                    <p>
                        <strong>Example:</strong> We have extended our example chart to use meaningful colours instead
                        of different variations of grey. This does not only allow for better differentiation, it also
                        lets us visualise the current completion state of specific tasks.
                    </p>
                ]
            , footer: null
        },
        {header: {text: "Gantt chart - How is it constructed?", img: "gantt_chart.svg"}, body: "", footer: null},
        {header: {text: "Gantt chart - Interactivity", img: "gantt_chart.svg"}, body: "", footer: null},
        {header: {text: "Gantt chart - Asset Tracking", img: ""}, body: "", footer: null},
        {header: {text: "Gantt chart - Asset Tracking", img: ""}, body: "", footer: null},
    ],
    chartCfg: [
        STEP_1, STEP_2, STEP_3, STEP_4
    ]
};