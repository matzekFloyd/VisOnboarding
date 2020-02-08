import {DataCruncher} from "./DataCruncher";

export const ChartCfg = (date, beacons) => {
    let dc = new DataCruncher(date, beacons);
    return {
        chart: {
            /*
            zoomType: 'x',
            resetZoomButton: {
                position: {
                    x: 0,
                    y: -30
                }
            },
            */
            events: {
                drilldown: function (e) {
                    dc.drilldown(e, this);
                },
                drillup: function (e) {
                    dc.drillup(e, this);
                }
            }
        },
        credits: {
            enabled: false
        },
        navigator: {
            enabled: true,
            liveRedraw: true,
            height: 30,
            margin: 0,
            series: {
                visible: false
            },
        },
        scrollbar: {
            enabled: true,
            showFull: false
        },
        rangeSelector: {
            enabled: true,
            inputEnabled: false,
            buttons: [
                {
                    type: 'hour',
                    count: 1,
                    text: '1h'
                }, {
                    type: 'hour',
                    count: 3,
                    text: '3h'
                }, {
                    type: 'hour',
                    count: 6,
                    text: '6h'
                }, {
                    type: 'all',
                    text: 'All'
                }
            ]
        },
        title: {
            text: '<b>Asset Tracking - Overview</b>',
            textAlign: 'center',
            margin: 0,
            useHtml: true
        },
        tooltip: {
            shape: "square",
            padding: 12,
            formatter: function () {
                return '<b> ' + this.series.name + '</b><br />' +
                    'Location: ' + this.point.location + '<br />' +
                    'Start: ' + DataCruncher.convertUnixTimestamp(this.point.start) + '<br />' +
                    'End: ' + DataCruncher.convertUnixTimestamp(this.point.end) + '<br />' +
                    'Duration: ' + this.point.duration + '<br />';
            }
        },
        xAxis: {
            min: dc.xAxis.min,
            max: dc.xAxis.max,
            crosshair: {
                enabled: true,
                snap: false,
                color: "rgba(102,133,194,0.75)"
            },
        },
        yAxis: [{
            type: 'category',
            grid: {
                columns: [{
                    title: {
                        text: "Name"
                    },
                    categories: dc.categories.map(function (category) {
                        return category.name;
                    })
                }, {
                    title: {
                        text: "ID"
                    },
                    categories: dc.categories.map(function (category) {
                        return category.id;
                    })
                }]
            },

        }],
        series: dc.getSeries(0, date),
        drilldown: {
            series: dc.getSeries(1, date)
        }
    };
};