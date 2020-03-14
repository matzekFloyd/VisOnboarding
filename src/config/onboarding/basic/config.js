export const BASIC_DESCRIPTION = {
    html: [
        {
            header: {text: "Gantt chart - Definition", img: "gantt_chart.svg"},
            body: {
                paragraphs: [
                    "Gantt charts consist of a <strong>list of activities</strong> (or tasks) with their <strong>duration over time</strong>, showing when each activity starts and ends. This makes Gantt Charts useful for planning and estimating how long an entire project might take. It also allows you to see what <strong>activities</strong> are running <strong>in parallel</strong> to each other and which dependencies the tasks have.",
                ],
                example: "This chart displays the planning and time estimation of the launch of a new product. It shows that the launch requires about 2 and a half weeks of work, and consists of a long <i>Development</i> phase, followed by a shorter <i>Beta</i> and <i>Final development</i> phase."
            },
            footer: null
        },
        {
            header: {text: "Gantt chart - Key Properties", img: "gantt_chart.svg"},
            body: {
                paragraphs: [
                    "Gantt Charts are drawn within a table consisting of <strong>rows (y-Axis)</strong> and <strong>columns (x-Axis)</strong>. The rows are used for plotting <strong>activities</strong> and the columns represent the <strong>timeline</strong>.",
                    "The <strong>duration</strong> of each activity is represented by the <strong>length of a bar</strong> plotted along the timescale. The start of the bar is the beginning of the activity and the end of the bar is when the activity is expected to be completed.",
                    "By using <strong>colors</strong> for the bars the activities can easily be <strong>categorized</strong> into groups. "
                ],
                example: "The chart uses meaningful colours to allow better differentiation between the categories."
            }, footer: null
        },
        {
            header: {text: "Gantt chart - Extended Properties", img: "gantt_chart.svg"},
            body: {
                paragraphs:
                    [
                        "<strong>Connecting arrows</strong> can be used to show which tasks are dependent on each other. Rotated squares (<strong>symbols</strong>) can also be placed within a Gantt Chart to <strong>signify milestones</strong>. A vertical line running through the chart is often used to highlight the current date.",
                        "These elements mainly focus on visualising a <strong>comprehensive overview</strong>. However every meaningful data visualization provides functionality to explore its data set in <strong>detail</strong>. The user should be able to get this information when he chooses, in other words, interacts with the visualization (<strong>Detail on Demand</strong>).",
                        "A conventional way for providing <strong>detailed information on interactions</strong> are <strong>tooltips</strong>. When hovering over a specific data point, a tooltip appears and provides additional information."
                    ],
                example: "This chart includes a current time indicator, milestones and arrows to display the dependencies of the tasks. Additionally, hovering over a single data point will display a tooltip with extra details."
            },
            footer: null
        },
        {
            header: {text: "Gantt chart - Interactivity", img: "gantt_chart.svg"},
            body: {
                paragraphs: [
                    "Gantt charts display <strong>time oriented data</strong>, which allows the use of <strong>filtering</strong> and <strong>zooming</strong> on the time line. The view of a chart changes by focusing on a specific area or time frame of the dataset. This does not change the underlying data, nor does it add additional data points to the visualisation.",
                ],
                example: "The chart incorporates a time slider as a key interactive element. It enables scrolling through the timeline, to which the chart simultaneously adapts to. Above the chart, zooming functionality allows for setting the range of the time filter that should be applied to the chart."
            },
            footer: null
        },
        {
            header: {text: "Data over time - Overview", img: "data_over_time.svg"},
            body: {
                paragraphs: [
                    "Although usually used for project management, Gantt charts can be used for other types of <strong>time oriented</strong> data sets. In this case <strong>asset tracking</strong> data was visualised. The data set consists of these data attributes: <i>location, beaconId, discoveredFromTimestamp, discoveredUntilTimestamp, duration (min), duration (h)</i>.",
                    "The <i>beaconId</i> belongs to a <strong>Bluetooth beacon</strong> which was <strong>attached</strong> to the <strong>asset</strong> that required <strong>location tracking</strong>. The data shows that there is always only one entry per <i>beaconId</i> at any given time. Therefore a Gantt visualization was used to answer two key questions the data set raises: <ul class='w-3/4 mr-auto ml-auto list-disc list-inside text-left mt-3'> <li><i>When were the Bluetooth beacons recorded in the different locations?</i></li><li><i>How long do the assets stay in their location?</i></li></ul>"],
                example: "The beacons are plotted on the y-Axis, and the x-Axis represents the time line. The colour encoding on every data point maps to a location. The width of the bar indicates the duration the beacon has stayed in a specific location."
            },
            footer: null
        },
        {
            header: {text: "Data over time - Detail", img: "data_over_time.svg"},
            body: {
                paragraphs: [
                    "<strong>Detailed information</strong> for each category, respectively beacon is <strong>requested by clicking</strong> on a specific data point. This will change the chart from displaying an overview to a more <strong>detailed view</strong>, showing only data <strong>relevant to the clicked beacon</strong>. In this view, the y-Axis plots the locations instead of the beacons."
                ],
                example: "On clicking a specific data point, the visualisation transforms from overview to detail view, showing data only relevant to the related beacon. The detailed view incorporates arrows, which display location changes. To enable a focus on a specific time range, the visualisation provides zooming functionality in form of a time bar below the chart."
            }
            , footer: null
        },
    ]
};