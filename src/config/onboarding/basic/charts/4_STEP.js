import {convertUnixToString} from "src/util/helpers";

let today = new Date();
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);
today = today.getTime();

function getDuration(start, end) {
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export const STEP_4 = {
    chart: {
        height: 600
    },
    tooltip: {
        enabled: true,
        formatter: function () {
            let point = this.point;
            let duration = getDuration(point.start, point.end);
            let str = '<b> ' + point.name + '</b><br />';
            if (point.start && point.milestone) {
                str += convertUnixToString(point.start, true, true, true, false, false) + '<br />';
            } else {
                str += 'Start: ' + convertUnixToString(point.start, true, true, true, false, false) + '<br />';
            }
            if (point.end) str += 'End: ' + convertUnixToString(point.end, true, true, true, false, false) + '<br />';
            if (duration) str += 'Duration: ' + duration + ' days<br />';
            return str;
        },
        padding: 12,
        shape: "square"
    },
    title: {
        text: 'Gantt Project Management'
    },
    yAxis: {
        uniqueNames: true
    },
    navigator: {
        enabled: true,
        liveRedraw: true,
        series: {
            type: 'gantt',
            pointPlacement: 0.5,
            pointPadding: 0.25
        },
        yAxis: {
            min: 0,
            max: 3,
            reversed: true,
            categories: []
        }
    },
    scrollbar: {
        enabled: true
    },
    rangeSelector: {
        enabled: true,
        selected: 0
    },
    series: [{
        name: 'Product',
        data: [{
            name: 'New product launch',
            id: 'new_product',
        }, {
            start: Date.UTC(2017, 11, 1),
            end: Date.UTC(2018, 1, 2),
            parent: 'new_product',
            name: 'Prototyping'
        }, {
            start: Date.UTC(2018, 1, 2),
            end: Date.UTC(2018, 11, 5),
            parent: 'new_product',
            name: 'Development',
        }, {
            start: Date.UTC(2018, 11, 6),
            end: Date.UTC(2018, 11, 9),
            parent: 'new_product',
            name: 'Testing',
        }, {
            start: Date.UTC(2018, 11, 9),
            end: Date.UTC(2018, 11, 19),
            parent: 'new_product',
            name: 'Development'
        }, {
            start: Date.UTC(2018, 11, 10),
            end: Date.UTC(2018, 11, 23),
            parent: 'new_product',
            name: 'Testing'
        }, {
            start: Date.UTC(2018, 11, 25, 8),
            end: Date.UTC(2018, 11, 25, 16),
            parent: 'new_product',
            name: 'Release',
            milestone: true
        }],
    }],
    colors: ['#621100', '#cf7611', '#ffba46', '#f4777f', '#93003a'],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }
};