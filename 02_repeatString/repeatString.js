const repeatString = function(string, num) {
    let repeatedString = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            repeatedString += string;
        }
        return repeatedString;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
