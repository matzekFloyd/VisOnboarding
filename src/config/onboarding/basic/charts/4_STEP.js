let today = new Date(),
    day = 1000 * 60 * 60 * 24;
// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);
today = today.getTime();

// TODO Explain interactivity, drilldown and/or draggable tasks
export const STEP_4 = {
    chart: {
        height: 600
    },
    tooltip: {
        enabled: false
    },
    series: [ {
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
            completed: {
                amount: 0.6,
                fill: '#e80'
            },
        }, {
            name: 'Beta',
            id: 'beta',
            parent: 'new_product',
            start: today + 11 * day,
            end: today + 14 * day,
        }, {
            name: 'Final development',
            id: 'finalize',
            parent: 'new_product',
            start: today + 13 * day,
            end: today + 17 * day
        }, {
            name: 'Launch',
            dependency: 'finalize',
            parent: 'new_product',
            start: today + 17 * day,
            end: today + 18 * day
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