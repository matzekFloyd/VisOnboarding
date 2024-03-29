export const EXPERT_DESCRIPTION = {
    html: [
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