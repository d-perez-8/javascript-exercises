const reverseString = function(string) {
    splitString = string.split('');
    reversed = splitString.reverse();
    finalString = reversed.join('');
    return finalString;
}

// Do not edit below this line
module.exports = reverseString;
