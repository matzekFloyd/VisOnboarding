import {convertUnixToString} from "src/util/helpers";
import {BEACON} from "src/util/visualisation/constants";
import {OVERVIEW_2018_12_20} from "../../2018_12_20";
import {formatDateString} from "../../../../util/helpers";

let startDate = new Date('2018-12-20T01:00:00');
let categories = [
    BEACON('ofEz'), BEACON('LLz2'), BEACON('Xgti'), BEACON('GmK6'), BEACON('lwFq'),
    BEACON('QuLX'), BEACON('n4gK')
];

let titleOverview = '<b>Overview - ' + formatDateString(startDate, true, true, true, false, false) + '</b>';

let day = 1000 * 60 * 60 * 24;
export const STEP_5 = {
    chart: {
        height: 600
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    title: {
        margin: 0,
        text: titleOverview,
        textAlign: 'center',
        useHtml: true
    },
    tooltip: {
        formatter: function () {
            return '<b> ' + this.point.name + '</b><br />' +
                'Location: ' + this.point.location + '<br />' +
                'Duration: ' + this.point.duration + '<br />' +
                'Start: ' + convertUnixToString(this.point.start, true, true, true, false) + '<br />' +
                'End: ' + convertUnixToString(this.point.end, true, true, true, false) + '<br />';
        },
        padding: 12,
        shape: "square"
    },
    xAxis: {
        min: startDate.getTime() + (day / 2),
        max: startDate.getTime() + day
    },
    yAxis: [
        {
            type: 'category',
            grid: {
                columns: [{
                    title: {
                        text: "Name"
                    },
                    categories: categories.map(function (category) {
                        return category.name;
                    })
                }, {
                    title: {
                        text: "ID"
                    },
                    categories: categories.map(function (category) {
                        return `<b>${category.id}</b>`;
                    })
                }]
            },

        }
    ],
    series: OVERVIEW_2018_12_20(categories),
    colors: ["#7F3C8D", "#11A579", "#3969AC", "#F2B701"]
};