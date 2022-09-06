const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(myArray) {
  let answer = 0;
  for (let nums in myArray) {
    answer += myArray[nums];
  }
  return answer;
};

const multiply = function(myArray) {
  let product = 1;
  for (let nums in myArray) {
    product *= myArray[nums];
  }
  return product;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let newNum = num;
	if (num < 0) {
    return -1;
  } else if (num == 0 || num == 1) {
    return 1;
  }
  while (num > 1) {
    num--;
    newNum *= num;
  }
  return newNum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
