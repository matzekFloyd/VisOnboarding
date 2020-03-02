import {convertUnixToString, formatDateString} from "src/util/helpers";
import {BEACON, LOCATIONS} from "../../../../util/visualisation/constants";
import {DRILLDOWN_2018_12_20, OVERVIEW_2018_12_20} from "../../2018_12_20";

let startDate = new Date('2018-12-20T01:00:00');
let categories = [
    BEACON('ofEz'), BEACON('LLz2'), BEACON('Xgti'), BEACON('GmK6'), BEACON('lwFq'),
    BEACON('QuLX'), BEACON('n4gK')
];

let titleOverview = '<b>Overview - ' + formatDateString(startDate, true, true, true, false, false) + '</b>';

let day = 1000 * 60 * 60 * 24;
export const STEP_2 = {
    chart: {
        height: 600,
        events: {
            drilldown: function (e) {
                this.showLoading('Loading...', this.yAxis, this.yAxis.type);
                let beacon = BEACON(e.point.tag);
                let text = '<b>Detail - ' + formatDateString(startDate, true, true, true, false, false) + ' - ' + beacon.name + " (" + beacon.id + ')</b>';
                this.update({
                    title: {
                        text: text,
                        textAlign: 'center',
                        margin: 0,
                        useHtml: true
                    },
                    yAxis: [
                        {
                            type: 'category',
                            grid: {
                                columns: [{
                                    title: {
                                        text: "Location"
                                    },
                                    categories: LOCATIONS.map(function (location) {
                                        return `<b>${location}</b>`;
                                    })
                                }]
                            }
                        }
                    ]
                });
                setTimeout(() => {
                    this.hideLoading();
                }, 500);
            },
            drillup: function () {
                this.showLoading('Loading...', this.yAxis, this.yAxis.type);
                this.update({
                    title: {
                        margin: 0,
                        text: titleOverview,
                        textAlign: 'center',
                        useHtml: true
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
                    ]
                });
                setTimeout(() => {
                    this.hideLoading();
                }, 500);
            }
        }
    },
    exporting: {
        enabled: false
    },
    navigator: {
        enabled: true,
        height: 30,
        liveRedraw: true,
        margin: 0,
        series: {
            visible: false
        },
    },
    scrollbar: {
        enabled: true,
        showFull: false
    },
    credits: {
        enabled: false
    },
    drilldown: {
        drillUpButton: {
            position: {
                align: "left",
                x: 10
            }
        },
        series: DRILLDOWN_2018_12_20(categories)
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
    series: OVERVIEW_2018_12_20(categories)
};