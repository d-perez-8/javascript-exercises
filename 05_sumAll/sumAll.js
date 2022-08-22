const sumAll = function(a, b) {
    let myArray = 0;
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'ERROR';
    }
    if (a < 0 || b < 0) {
        return 'ERROR';
    }
    if (a > b) {
        [a, b] = [b, a];
    }
    while (a < b + 1) {
        myArray += a;
        a++;
    }
    return myArray;
};

// Do not edit below this line
module.exports = sumAll;
