const palindromes = function (myString) {
    let cleanString = myString.toLowerCase().replace(/[^A-Za-z]/g, "");

    reversedString = cleanString.split("").reverse().join("");

    return (reversedString == cleanString);


};

// Do not edit below this line
module.exports = palindromes;
