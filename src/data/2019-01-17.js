export const D_JAN_17 =
    {

        chart: {
            spacingLeft: 1
        },

        title: {
            text: 'Interactive Gantt Chart'
        },

        subtitle: {
            text: 'Drag and drop points to edit'
        },

        plotOptions: {
            series: {
                animation: false, // Do not animate dependency connectors
                dragDrop: {
                    draggableX: true,
                    draggableY: true,
                    dragMinY: 0,
                    dragMaxY: 2,
                    dragPrecisionX: 3 // Snap to eight hours
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    style: {
                        cursor: 'default',
                        pointerEvents: 'none'
                    }
                },
                allowPointSelect: true,
            }
        },

        yAxis: {
            type: 'category',
            categories: ['Tech', 'Marketing', 'Sales'],
            min: 0,
            max: 2
        },

        xAxis: {
            currentDateIndicator: true
        },

        tooltip: {
            xDateFormat: '%a %b %d, %H:%M'
        },

        series: [{
            name: 'Project 1',
            data: [{
                start: 2,
                end: 3,
                name: 'Prototype',
                id: 'prototype',
                y: 0
            }, {
                start: 6,
                name: 'Prototype done',
                milestone: true,
                dependency: 'prototype',
                id: 'proto_done',
                y: 0
            }, {
                start: 9,
                end: 11,
                name: 'Testing',
                dependency: 'proto_done',
                y: 0
            }, {
                start: 5,
                end: 8,
                name: 'Product pages',
                y: 1
            }, {
                start: 9,
                end: 10,
                name: 'Newsletter',
                y: 1
            }]
        }]
    };