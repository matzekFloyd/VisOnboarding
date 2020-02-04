import {DataCruncher} from "../util/DataCruncher";

export const TEST_DRILLDOWN = () => {
    let categories = ['pMaq', 'ox0d', 'pMaq', 'ox0d', 'Hf6q', 'lwFq', 'pMaq'];
    let dc = new DataCruncher(new Date('2019-01-15T01:00:00'), categories);
    return {
        chart: {
            events: {
                drilldown: function (e) {
                        console.log("EVENT ", e, "\n", e.seriesOptions);
                        let chart = this;
                        chart.showLoading('LOADING');
                        setTimeout(function () {
                            chart.hideLoading();
                        }, 500)
                }
            }
        },
        title: {
            text: ''
        },
        xAxis: {
            currentDateIndicator: true,
            min: dc.xAxis.min,
            max: dc.xAxis.max,
        },
        yAxis: {
            type: 'category',
            categories: categories,
            min: dc.yAxis.min,
            max: dc.yAxis.max,
            drilldown: true
        },
        series: [{
            name: '',
            data: [
                dc.initDataObj('pMaq', 'Roboter', 0, 10, 19, 0, 21, 3),
                dc.initDataObj('ox0d', 'Stanzen', 0, 12, 56, 0, 29, 2),
                dc.initDataObj('pMaq', 'Roboter', 0, 22, 59, 1, 7, 3),
                dc.initDataObj('ox0d', 'Stanzen', 0, 32, 56, 1, 19, 2),
                dc.initDataObj('Hf6q', 'Roboter', 0, 40, 59, 2, 21, 41),
                dc.initDataObj('lwFq', 'Roboter', 0, 57, 39, 1, 11, 43),
                dc.initDataObj('pMaq', 'Funken', 1, 7, 3, 1, 53, 39),
            ],
            dataLabels: {
                enabled: true
            }
        }],
        drilldown: {
            series: [{
                name: "a",
                id: "a",
                data: [
                    dc.initDataObj('ox0d', 'Funken', 15, 29, 5, 16, 4, 43),
                    dc.initDataObj('lwFq', 'Funken', 15, 33, 3, 15, 47, 5),
                    dc.initDataObj('lwFq', 'Funken', 15, 47, 3, 16, 0, 19),
                    dc.initDataObj('lwFq', 'Funken', 15, 49, 3, 16, 10, 25),
                    dc.initDataObj('ox0d', 'Funken', 15, 49, 3, 16, 0, 19),
                    dc.initDataObj('ox0d', 'Stanzen', 15, 50, 58, 16, 2, 47),
                    dc.initDataObj('ox0d', 'Funken', 16, 2, 23, 16, 18, 19),
                    dc.initDataObj('pMaq', 'Funken', 16, 6, 25, 16, 13, 23),
                    dc.initDataObj('pMaq', 'Funken', 16, 10, 25, 16, 56, 23),
                    dc.initDataObj('pMaq', 'Funken', 16, 10, 23, 19, 52, 26),
                ]
            }]
        }
    };
};