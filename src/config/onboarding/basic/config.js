export const BASIC_DESCRIPTION = {
    html: [
        {
            header: {text: "Gantt chart - Definition", img: "gantt_chart.svg"}, body:
                [
                    <p>A Gantt chart is a type of bar chart that is commonly used as an organisational tool for project
                        management. It is named after its inventor, Henry Gantt, who designed such a chart around the
                        years 1910–1915.</p>,
                    <p>Gantt Charts consist of a list of activities (or tasks) with their duration over time, showing
                        when each activity starts and ends. This makes Gantt Charts useful for planning and estimating
                        how long an entire project might take. It also allows you to see what activities are running in
                        parallel to each other.</p>,
                    <p>This type of chart displays time oriented data, and usually focuses on the duration of these
                        values in order to compare their relation and dependencies to each other.</p>,
                    <p><strong>Example:</strong> A basic Gantt Chart displays the planning and time estimation of the
                        launch of a new product. It shows that the launch requires about 2 and a half weeks of work, and
                        consists of a long development phase, followed by a shorter beta and final development phase.
                    </p>
                ]
            , footer: null
        },
        {
            header: {text: "Gantt chart - Key Properties", img: "gantt_chart.svg"}, body:
                [
                    <p>Gantt Charts are drawn within a table consisting of rows (y-Axis) and columns (x-Axis). The rows
                        are used for plotting activities and the columns represent the timescale.
                    </p>,
                    <p>The duration of each activity is represented by the length of a bar plotted along the timescale.
                        The start of the bar is the beginning of the activity and the end of the bar is when the
                        activity is expected to be completed.
                    </p>,
                    <p>Colour-coding the activity-bars can be used to categorise the activities into groups. To show the
                        percentage of completion of an activity, a bar can be partially filled in, shaded differently or
                        use a different colour. This helps in differentiating between what is done and what is left to
                        do.
                    </p>,
                    <p>
                        <strong>Example:</strong> The previous chart is extended to use meaningful colours instead
                        of different variations of grey. This does not only allow for better differentiation, it also
                        lets us visualise the current completion state of specific tasks.
                    </p>
                ]
            , footer: null
        },
        {
            header: {text: "Gantt chart - Extended Properties", img: "gantt_chart.svg"}, body:
                [
                    <p>Connecting arrows can be used to show which tasks are dependent on each other. Critical paths,
                        the key activities required to finish the project can also be displayed with a series of
                        highlighted arrows. Symbols can also be placed within a Gantt Chart to signify milestones and a
                        vertical line running through the chart is used to highlight the current date.
                    </p>,
                    <p>
                        All of these elements mainly focus on visualising a comprehensive overview. However every
                        meaningful data visualization provides functionality to explore its data set in detail. The user
                        should be able to get this information when he chooses, in other words,
                        interacts with the visualization (Detail on Demand).</p>,
                    <p>A conventional way for providing detailed information on interactions are tooltips, that appear
                        when hovering over a specific data point.
                    </p>,
                    <p>
                        <strong>Example:</strong> In order to provide more meaningful information, the chart uses
                        several visual features, that are typical for Gantt charts. This includes the current time
                        indicator, milestones and arrows to display the dependencies of the tasks. Additionally,
                        hovering over a single data point will display a tooltip with extra details.
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
                        Gantt charts display time oriented data, which allows the use of filtering and zooming on the
                        time scale.
                    </p>,
                    <p>
                        <strong>Example: </strong> The chart incorporates a time slider as a key interactive element. It
                        enables scrolling through the timeline, to which the chart simultaneously adapts
                        to. <br/>Above the chart zooming functionality enables setting the granularity of the time
                        filter that should be applied to the chart.
                    </p>
                ],
            footer: null
        },
        {
            header: {text: "Data over time", img: "data_over_time.svg"}, body:
                [
                    <p>
                        Although the most common use case for Gantt Charts is project management, it can be used for
                        other types of data sets, which consist of data over a period of time. In this case asset
                        tracking data was visualised by using a Gantt chart.
                    </p>,
                    <p>
                        The collected data consists of following data attributes: id, beaconId, discoveredFromTimestamp,
                        discoveredUntilTimestamp, duration (min), duration (h). The beaconId belongs to a Bluetooth
                        beacon which was attached to the asset, that required location tracking. The available data
                        shows that there is always only one entry per beaconId at any given time. Therefore a Gantt
                        visualization was used to answer two key questions the data set raises:
                        <br/>
                        - When were the Bluetooth beacons recorded in the different locations?
                        <br/>
                        - How long do the assets stay in their location?
                    </p>,
                    <p>
                        The visualisation uses key concepts of Gantt charts: The beacons are plotted on the y-Axis, and
                        the x-Axis represents the time line. The colour encoding on every data point maps to a location.
                        The width of the bar indicates the duration the beacon has stayed in a specific location.
                        Hovering over a data point will provide additional information.
                    </p>
                ], footer: null
        },
        {
            header: {text: "Data over time - detail on demand", img: "data_over_time.svg"}, body:
                [
                    <p>
                        A key element of data exploration is interactivity. In this case detailed information for each
                        category, respectively beacon is requested by clicking on a specific data point.
                    </p>,
                    <p>
                        This will change the chart from displaying an overview to a more detailed view, showing only
                        data relevant to the clicked beacon. In this view, the y-Axis plots the locations instead of the
                        beacons.
                    </p>,
                    <p>
                        The detailed view incorporates arrows, which are usually used to show dependencies of tasks, to
                        display location changes.
                    </p>,
                    <p>
                        To enable a focus on a specific time range, the visualisation provides zooming functionality in
                        form of a time bar below the graph.
                    </p>
                ], footer: null
        },
    ]
};