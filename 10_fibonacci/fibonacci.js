const fibonacci = function(position) {
    if (parseInt(position) > 0) {
        let myNum = 1;
        let lastNum = 0;

        for (let index = 1; index < position; index++) {
            myNum = myNum + lastNum;
            lastNum = myNum - lastNum;
        }

        return myNum;
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
