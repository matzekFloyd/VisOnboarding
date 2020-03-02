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
        {
            header: {text: "Gantt chart - How is it constructed?", img: "gantt_chart.svg"}, body:
                [
                    <p>Connecting arrows can be used to show which tasks are dependent on each other. Critical paths,
                        the key activities required to finish the project can also be displayed with a series of
                        highlighted arrows. Symbols can also be placed within a Gantt Chart to signify milestones and a
                        vertical line running through the chart is used to highlight the current date.
                    </p>,
                    <p>
                        All of these elements mainly focus on visualising a comprehensive overview. However every
                        meaningful data visualization should provide functionality to explore the properties fo the data
                        set in detail. The user should be able to get this information when he chooses, in other words,
                        interacts with the visualization. <br/> Gantt charts provide detailed information by using
                        tooltips, that appear when hovering over a
                        single task.
                    </p>,
                    <p>
                        <strong>Example:</strong> In order to provide more meaningful information, the example has
                        been extended with several visual features, that are typical for Gantt charts. This includes the
                        current time indicator (vertical line), milestones and arrows to display the dependencies of the
                        tasks. Additionally, hovering over a single data point will provide more detailed information.
                    </p>
                ],
            footer: null
        },
        {
            header: {text: "Gantt chart - Interactivity", img: "gantt_chart.svg"}, body:
                [
                    <p>
                        The use of interactions in data visualizations has become increasingly popular due to its
                        ease-of-use and added value. Interactive data visualizations come in a lot of shapes and forms,
                        and vary widely depending on what information they want to communicate.
                    </p>,
                    <p>
                        A key interactive element of data visualizations is the option of zooming and filtering. For
                        example, changing the view of a chart, by focusing on a specific area or time frame of the
                        dataset. This does not change the underlying data, nor does it add additional data points to the
                        visualisation.
                    </p>,
                    <p>
                        Gantt charts operate with time oriented data, which allows them to
                        use filtering and zooming on the time scale.
                    </p>,
                    <p>
                        <strong>Example: </strong> In this example, a time slider is a key interactive element. It
                        enables scrolling through the timeline, to which the chart simultaneously adapts
                        to. <br/>Above the chart zooming functionality enables setting the granularity of the time
                        filter that should be applied to the chart.
                    </p>
                ],
            footer: null
        },
        {header: {text: "Gantt chart - Asset Tracking", img: ""}, body: "", footer: null},
        {header: {text: "Gantt chart - Asset Tracking", img: ""}, body: "", footer: null},
    ]
};