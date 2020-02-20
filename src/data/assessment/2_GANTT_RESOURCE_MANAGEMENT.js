import {convertUnixToString} from "../../util/helpers";

let today = new Date().getTime();
let day = 1000 * 60 * 60 * 24;

let cars = [{
    model: 'Nissan Leaf',
    current: 0,
    deals: [{
        rentedTo: 'Lisa Star',
        from: today - 1 * day,
        to: today + 2 * day
    }, {
        rentedTo: 'Shane Long',
        from: today - 3 * day,
        to: today - 2 * day
    }, {
        rentedTo: 'Jack Coleman',
        from: today + 5 * day,
        to: today + 6 * day
    }]
}, {
    model: 'Jaguar E-type',
    current: 0,
    deals: [{
        rentedTo: 'Martin Hammond',
        from: today - 2 * day,
        to: today + 1 * day
    }, {
        rentedTo: 'Linda Jackson',
        from: today - 2 * day,
        to: today + 1 * day
    }, {
        rentedTo: 'Robert Sailor',
        from: today + 2 * day,
        to: today + 6 * day
    }]
}, {
    model: 'Volvo V60',
    current: 0,
    deals: [{
        rentedTo: 'Mona Ricci',
        from: today + 0 * day,
        to: today + 3 * day
    }, {
        rentedTo: 'Jane Dockerman',
        from: today + 3 * day,
        to: today + 4 * day
    }, {
        rentedTo: 'Bob Shurro',
        from: today + 6 * day,
        to: today + 8 * day
    }]
}, {
    model: 'Volkswagen Golf',
    current: 0,
    deals: [{
        rentedTo: 'Hailie Marshall',
        from: today - 1 * day,
        to: today + 1 * day
    }, {
        rentedTo: 'Morgan Nicholson',
        from: today - 3 * day,
        to: today - 2 * day
    }, {
        rentedTo: 'William Harriet',
        from: today + 2 * day,
        to: today + 3 * day
    }]
}];

// Parse car data into series.
let series = cars.map(function (car, i) {
    var data = car.deals.map(function (deal) {
        return {
            id: 'deal-' + i,
            rentedTo: deal.rentedTo,
            start: deal.from,
            end: deal.to,
            y: i
        };
    });
    return {
        name: car.model,
        data: data,
        current: car.deals[car.current]
    };
});

export const GANTT_RESOURCE_MANAGEMENT = {
    series: series,
    title: {
        text: 'Car Rental Schedule'
    },
    tooltip: {
        pointFormat: '<span>Rented To: {point.rentedTo}</span><br/><span>From: {point.start:%e. %b}</span><br/><span>To: {point.end:%e. %b}</span>'
    },
    xAxis: {
        currentDateIndicator: true
    },
    yAxis: {
        type: 'category',
        grid: {
            columns: [{
                title: {
                    text: 'Model'
                },
                categories: series.map(function (s) {
                    return s.name;
                })
            }, {
                title: {
                    text: 'Rented To'
                },
                categories: series.map(function (s) {
                    return s.current.rentedTo;
                })
            }, {
                title: {
                    text: 'From'
                },
                categories: series.map(function (s) {
                    return convertUnixToString(s.current.from, false, true, true, false, false);
                })
            }, {
                title: {
                    text: 'To'
                },
                categories: series.map(function (s) {
                    return convertUnixToString(s.current.to, false, true, true, false, false);
                })
            }]
        }
    }
};
