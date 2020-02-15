import {DataCruncher} from "./DataCruncher";

/**
 *
 * @param {DataCruncher} dataCruncher
 * @return {{scrollbar: {showFull: boolean, enabled: boolean}, drilldown: {series: *}, yAxis: [{grid: {columns: [{categories: *[], title: {text: string}}, {categories: string[], title: {text: string}}]}, type: string}], exporting: {buttons: {contextButton: {x: number, y: number}}}, xAxis: ({crosshair: {color: string, enabled: boolean, snap: boolean}, min: *, max}|{min: number, max}), credits: {enabled: boolean}, series: *, navigator: {margin: number, series: {visible: boolean}, liveRedraw: boolean, enabled: boolean, height: number}, tooltip: {formatter: (function(): string), padding: number, shape: string}, title: {margin: number, textAlign: string, useHtml: boolean, text: string}, chart: {events: {drilldown: chart.events.drilldown, drillup: chart.events.drillup}}}}
 * @constructor
 */
export const ChartCfg = (dataCruncher) => {
    return {
        chart: {
            events: {
                drilldown: function (e) {
                    dataCruncher.drilldown(e, this);
                },
                drillup: function (e) {
                    dataCruncher.drillup(e, this);
                }
            }
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
            series: dataCruncher.getSeries(1)
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false,
                    x: -24,
                    y: 1,
                }
            }
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
        series: dataCruncher.getSeries(0),
        title: {
            margin: 0,
            text: '<b>Asset Tracking - Overview</b>',
            textAlign: 'center',
            useHtml: true
        },
        tooltip: {
            formatter: function () {
                return '<b> ' + this.point.name + '</b><br />' +
                    'Location: ' + this.point.location + '<br />' +
                    'Duration: ' + this.point.duration + '<br />' +
                    'Start: ' + DataCruncher.convertUnixTimestamp(this.point.start) + '<br />' +
                    'End: ' + DataCruncher.convertUnixTimestamp(this.point.end) + '<br />';
            },
            padding: 12,
            shape: "square"
        },
        xAxis: dataCruncher.xAxis,
        yAxis: dataCruncher.yAxis.overview
    };
};