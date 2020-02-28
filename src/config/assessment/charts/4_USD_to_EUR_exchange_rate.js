Highcharts.getJSON(
    'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
    function (data) {

        Highcharts.chart('container', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'USD to EUR exchange rate over time'
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    style: {
                        fontWeight: 'bold',
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                },
                labels: {
                    style: {
                        fontWeight: 'bold',
                    }
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {

                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[3]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
                        ]
                    },
                    color: Highcharts.getOptions().colors[3],
                    marker: {

                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                sourceWidth: 1200,
                sourceHeight: 700
            },
            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]
        });
    }
);