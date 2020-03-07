let today = new Date(),
    day = 1000 * 60 * 60 * 24;
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);
today = today.getTime();

export const STEP_1 = {
    chart: {
        height: 600
    },
    tooltip: {
        enabled: false
    },
    series: [{
        name: 'Product',
        data: [
            {
                name: 'New product launch',
                id: 'new_product',
            },
            {
                name: 'Development',
                id: 'development',
                parent: 'new_product',
                start: today - day,
                end: today + (11 * day),
            },
            {
                name: 'Beta',
                id: 'beta',
                parent: 'new_product',
                start: today + 11 * day,
                end: today + 14 * day,
            },
            {
                name: 'Final development',
                id: 'finalize',
                parent: 'new_product',
                start: today + 13 * day,
                end: today + 17 * day
            },
            {
                name: 'Launch',
                parent: 'new_product',
                start: today + 17 * day,
                end: today + 18 * day
            }
        ]
    }],
    colors: ["#696969", "#696969", "#696969", "#696969", "#696969"],
    title: {
        text: 'Gantt Project Management'
    },
    xAxis: {
        min: today - 3 * day,
        max: today + 18 * day
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
};