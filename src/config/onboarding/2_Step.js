var today = new Date(),
    day = 1000 * 60 * 60 * 24;
// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);
today = today.getTime();

//TODO this is dummy data/cfg
export const STEP_2 = {
    chart: {
        height: 600
    },
    series: [{
        name: 'Offices',
        data: [{
            name: 'New offices',
            id: 'new_offices',
            owner: 'Peter'
        }, {
            name: 'Prepare office building',
            id: 'prepare_building',
            parent: 'new_offices',
            start: today - (2 * day),
            end: today + (6 * day),
            completed: {
                amount: 0.2
            },
            owner: 'Linda'
        }]
    }, {
        name: 'Product',
        data: [{
            name: 'New product launch',
            id: 'new_product',
            owner: 'Peter'
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
            owner: 'Susan'
        }, {
            name: 'Beta',
            id: 'beta',
            dependency: 'development',
            parent: 'new_product',
            start: today + 12.5 * day,
            milestone: true,
            owner: 'Peter'
        }, {
            name: 'Final development',
            id: 'finalize',
            dependency: 'beta',
            parent: 'new_product',
            start: today + 13 * day,
            end: today + 17 * day
        }, {
            name: 'Launch',
            dependency: 'finalize',
            parent: 'new_product',
            start: today + 17.5 * day,
            milestone: true,
            owner: 'Peter'
        }]
    }],
    title: {
        text: 'Gantt Project Management'
    },
    xAxis: {
        currentDateIndicator: true,
        min: today - 3 * day,
        max: today + 18 * day
    },
    exporting: {
        sourceWidth: 1200,
        sourceHeight: 700
    },
    credits: {
        enabled: false
    }
};