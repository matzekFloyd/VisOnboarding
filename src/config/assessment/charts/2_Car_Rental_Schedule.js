// Set to 00:00:00:000 today
var today = new Date(),
    day = 1000 * 60 * 60 * 24,
    map = Highcharts.map,
    dateFormat = Highcharts.dateFormat,
    series,
    cars;

// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);
today = today.getTime();

cars = [{
    model: 'Nissan Leaf',
    current: 0,
    deals: [{
        rentedTo: 'Lisa Star',
        from: today - day,
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
        from: today - 3 * day,
        to: today + 0
    }, {
        rentedTo: 'Robert Sailor',
        from: today + 2 * day,
        to: today + 5 * day
    }]
}, {
    model: 'Volvo V60',
    current: 0,
    deals: [{
        rentedTo: 'Mona Ricci',
        from: today + 0,
        to: today + 4 * day
    }, {
        rentedTo: 'Jane Dockerman',
        from: today - 3 * day,
        to: today - 2 * day
    }, {
        rentedTo: 'Bob Shurro',
        from: today + 6 * day,
        to: today + 10 * day
    }]
}, {
    model: 'Peugeot 208',
    current: 0,
    deals: [{
        rentedTo: 'Hailie Marshall',
        from: today - day,
        to: today + day
    }, {
        rentedTo: 'Morgan Nicholson',
        from: today - 3 * day,
        to: today - 2 * day
    }, {
        rentedTo: 'William Harriet',
        from: today + 10 * day,
        to: today + 11 * day
    }]
}, {
    model: 'Peugeot 208',
    current: 0,
    deals: [{
        rentedTo: 'Harry Peterson',
        from: today + 3 * day,
        to: today + 4 * day
    }, {
        rentedTo: 'Emma Wilson',
        from: today + 5 * day,
        to: today + 6 * day
    }, {
        rentedTo: 'Ron Donald',
        from: today + 8 * day,
        to: today + 9 * day
    }]
}];

// Parse car data into series.
series = cars.map(function (car, i) {
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

Highcharts.ganttChart('container', {
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
                categories: map(series, function (s) {
                    return "<b>" + s.name + "</b>";
                })
            }, {
                title: {
                    text: 'Rented To'
                },
                categories: map(series, function (s) {
                    return "<b>" + s.current.rentedTo + "</b>";
                })
            }]
        }
    },
    colors: ['#3156b4', '#589acc', '#ffc763', '#f4777f', '#93003a'],
    credits: {
        enabled: false
    },
    exporting: {
        sourceWidth: 1200,
        sourceHeight: 600
    },
});