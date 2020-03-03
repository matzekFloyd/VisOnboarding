export const BASIC_DESCRIPTION = {
    html: [
        {
            header: {text: "Gantt chart - Definition", img: "gantt_chart.svg"},
            body: {
                paragraphs: [
                    "A <strong>Gantt chart</strong> is a type of bar chart that is commonly used as an organisational tool for <strong>project management</strong>. It is named after its inventor, <i>Henry Gantt</i>, who designed such a chart around the years 1910–1915.",
                    "Gantt charts consist of a <strong>list of activities</strong> (or tasks) with their <strong>duration over time</strong>, showing when each activity starts and ends. This makes Gantt Charts useful for planning and estimating how long an entire project might take. It also allows you to see what <strong>activities</strong> are running <strong>in parallel</strong> to each other.",
                    "This type of chart displays <strong>time oriented data</strong>, and usually focuses on the duration of these values in order to compare their relation and dependencies to each other."
                ],
                example: "A basic Gantt Chart displays the planning and time estimation of the launch of a new product. It shows that the launch requires about 2 and a half weeks of work, and consists of a long <i>Development</i> phase, followed by a shorter <i>Beta</i> and <i>Final development</i> phase."
            },
            footer: null
        },
        {
            header: {text: "Gantt chart - Key Properties", img: "gantt_chart.svg"},
            body: {
                paragraphs: [
                    "Gantt Charts are drawn within a table consisting of <strong>rows (y-Axis)</strong> and <strong>columns (x-Axis)</strong>. The rows are used for plotting <strong>activities</strong> and the columns represent the <strong>timescale</strong>.",
                    "The <strong>duration</strong> of each activity is represented by the <strong>length of a bar</strong> plotted along the timescale. The start of the bar is the beginning of the activity and the end of the bar is when the activity is expected to be completed.",
                    "<strong>Colour-coding</strong> the activity-bars can be used to <strong>categorise</strong> the activities into groups. To show the percentage of completion of an activity, a bar can be partially filled in, shaded differently or use a different colour. This helps in differentiating between what is done and what is left to do."
                ],
                example: "The previous chart is extended to use meaningful colours instead of different variations of grey. This does not only allow for better differentiation, it also lets us visualise the current completion state of specific tasks."
            }, footer: null
        },
        {
            header: {text: "Gantt chart - Extended Properties", img: "gantt_chart.svg"},
            body: {
                paragraphs:
                    [
                        "<strong>Connecting arrows</strong> can be used to show which tasks are dependent on each other. <strong>Critical paths</strong>, the key activities required to finish the project can also be displayed with a series of highlighted arrows. <strong>Symbols</strong> can also be placed within a Gantt Chart to <strong>signify milestones</strong> and a vertical line running through the chart is used to highlight the current date.",
                        "These elements mainly focus on visualising a <strong>comprehensive overview</strong>. However every meaningful data visualization provides functionality to explore its data set in <strong>detail</strong>. The user should be able to get this information when he chooses, in other words, interacts with the visualization (<strong>Detail on Demand</strong>).",
                        "A conventional way for providing <strong>detailed information on interactions</strong> are <strong>tooltips</strong>, that appear when hovering over a specific data point."
                    ],
                example: "In order to provide more meaningful information, the chart uses several visual features. This includes the current time indicator, milestones and arrows to display the dependencies of the tasks. Additionally, hovering over a single data point will display a tooltip with extra details."
            },
            footer: null
        },
        {
            header: {text: "Gantt chart - Interactivity", img: "gantt_chart.svg"},
            body: {
                paragraphs: [
                    "The use of <strong>interactions</strong> in data visualizations has become increasingly popular due to its ease-of-use and <strong>added value</strong>. Interactive data visualizations come in a lot of shapes and forms, and vary widely depending on what information they want to communicate.",
                    "A key interactive element of data visualizations is the option of <strong>zooming</strong> and <strong>filtering</strong>. For example, changing the view of a chart, by focusing on a specific area or time frame of the dataset. This does not change the underlying data, nor does it add additional data points to the visualisation.",
                    "Gantt charts display <strong>time oriented data</strong>, which allows the use of filtering and zooming on the <strong>time scale</strong>.",
                ],
                example: "The chart incorporates a time slider as a key interactive element. This enables scrolling through the timeline, to which the chart simultaneously adapts to. Above the chart zooming functionality allows for setting the granularity of the time filter that should be applied to the chart."
            },
            footer: null
        },
        {
            header: {text: "Data over time - Overview", img: "data_over_time.svg"},
            body: {
                paragraphs: [
                    "Although usually used for project management, Gantt charts can be used for other types of <strong>time oriented</strong> data sets. In this case <strong>asset tracking</strong> data was visualised.",
                    "The data set consists of these data attributes: <i>id, beaconId, discoveredFromTimestamp, discoveredUntilTimestamp, duration (min), duration (h)</i>. <i>beaconId</i> belongs to a <strong>Bluetooth beacon</strong> which was <strong>attached</strong> to the <strong>asset</strong>, that required <strong>location tracking</strong>. The data shows that there is always only one entry per beaconId at any given time. Therefore a Gantt visualization was used to answer two key questions the data set raises: <ul class='w-3/4 mr-auto ml-auto list-disc list-inside text-left mt-3'> <li><i>When were the Bluetooth beacons recorded in the different locations?</i></li><li><i>How long do the assets stay in their location?</i></li></ul>"],
                example: "The visualisation uses key concepts of Gantt charts: The beacons are plotted on the y-Axis, and the x-Axis represents the time line. The colour encoding on every data point maps to a location. The width of the bar indicates the duration the beacon has stayed in a specific location. Hovering over a data point will provide additional information."
            },
            footer: null
        },
        {
            header: {text: "Data over time - Detail", img: "data_over_time.svg"},
            body: {
                paragraphs: [
                    "A key element of data exploration is <strong>interactivity</strong>. In this case <strong>detailed information</strong> for each category, respectively beacon is <strong>requested by clicking</strong> on a specific data point. This will change the chart from displaying an overview to a more <strong>detailed view</strong>, showing only data <strong>relevant to the clicked beacon</strong>. In this view, the y-Axis plots the locations instead of the beacons."
                ],
                example: "On clicking a specific data point, the visualisation transforms from overview to detail view, showing data only relevant to the related beacon. The detailed view incorporates arrows, which are usually used to show dependencies of tasks, to display location changes. To enable a focus on a specific time range, the visualisation provides zooming functionality in form of a time bar below the graph."
            }
            , footer: null
        },
    ]
};