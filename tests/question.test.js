//TODO have this use the actual function of the react component, instead of this adapted one
let calculatePoints = (success, subSuccess, minutes) => {
    let points;
    let subtractMinutes = (points, minutes) => {
        if (minutes >= points) return 0;
        let pts = points - minutes;
        return pts <= 0 ? 0 : pts;
    };

    if (subSuccess === null) {
        success ? points = 20 : points = 0;
    } else {
        subSuccess ? points = 20 / 2 : points = 0;
    }

    return subtractMinutes(points, minutes);
};

test('adds 1 + 2 to equal 3', () => {
    let pts = calculatePoints(true, true, 5);
    expect(pts).toBe(5);
});