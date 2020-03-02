import {convertUnixToString} from "src/util/helpers";

let today = new Date(),
    day = 1000 * 60 * 60 * 24;
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);
today = today.getTime();

export const STEP_3 = {
    chart: {
        height: 600
    },
    tooltip: {
        enabled: true,
        formatter: function () {
            let point = this.point;
            let str = '<b> ' + point.name + '</b><br />';
            if (point.start && point.milestone) {
                str += convertUnixToString(point.start, true, true, true, false, false) + '<br />';
            } else {
                str += 'Start: ' + convertUnixToString(point.start, true, true, true, false, false) + '<br />';
            }
            if (point.end) str += 'End: ' + convertUnixToString(point.end, true, true, true, false, false) + '<br />';
            if (point.duration) str += 'Duration: ' + point.duration + '<br />';
            if (point.dependency) str += 'Dependency: ' + point.dependency + '<br />';
            return str;
        },
        padding: 12,
        shape: "square"
    },
    series: [{
        name: 'Product',
        data: [{
            name: 'New product launch',
            id: 'new_product',
        }, {
            name: 'Development',
            id: 'development',
            parent: 'new_product',
            start: today - day,
            end: today + (11 * day),
            duration: 12 + " days",
            completed: {
                amount: 0.6,
                fill: '#e80'
            },
        }, {
            name: 'Beta',
            id: 'beta',
            dependency: 'development',
            parent: 'new_product',
            start: today + 12.5 * day,
            milestone: true,
        }, {
            name: 'Final development',
            id: 'finalize',
            dependency: 'beta',
            parent: 'new_product',
            start: today + 13 * day,
            end: today + 17 * day,
            duration: 4 + " days"
        }, {
            name: 'Launch',
            dependency: 'finalize',
            parent: 'new_product',
            start: today + 17.5 * day,
            milestone: true,
        }]
    }],
    colors: ['#621100', '#cf7611', '#ffba46', '#f4777f', '#93003a'],
    title: {
        text: 'Gantt Project Management'
    },
    xAxis: {
        currentDateIndicator: true,
        min: today - 3 * day,
        max: today + 18 * day
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }
};