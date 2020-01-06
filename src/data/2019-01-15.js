/* 2019.01.15 8:00 - 17:00 */
let today = new Date('2019-01-15T01:00:00'), day = 1000 * 60 * 60 * 24;
today = today.getTime();

function calc(hours, minutes, seconds) {
    return today + 1000 * (hours * 3600 + minutes * 60 + seconds);
}

export const D_JAN_15 = {
    title: {
        text: 'Intraday jobs Scheduling'
    },
    xAxis: {
        currentDateIndicator: true,
        min: today + 0.3333 * day,
        max: today + day,
    },
    yAxis: {
        type: 'category',
        categories: ['lwFq', 'ofEz', 'pMaq', 'LLz2', 'Hf6q', 'Xgti', 'GYPG', 'GmK6', 'n4gK', 'ox0d'],
        min: 0,
        max: 9
    },
    series: [{
        name: 'Init M1, Import FIRT market data',
        data: [{
            taskName: 'Init M1, Import FIRT market data',
            id: 'FIRT',
            start: calc(8, 3, 0),
            end: calc(11, 37, 24),
            y: 0
        }]
    }],
};