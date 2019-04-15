//=============================Recursion excercises============================

// 1. Find the sum of 0 to n
//For example, sum of 0 to 3 will return 6

const addOne = n => {
  //set the limit
  if (n <= 0) {
    return 0;
  } else return n + addOne(n - 1);
};
//console.log(addOne(3));

// add(3)   => 3 + add(2)
//          => 3 + 2 + add(1)
//          => 3 + 2 + 1 + add(0)
//          => 3 + 2 + 1 + 0
//          => 6

//------------------------------------------------------

// 2. Create a function that multiplies two numbers recursively.
//For example, multiply(2,4) will return 8

const timesNum = (num, n) => {
  if (n == 1) {
    return num;
  } else {
    return num * timesNum(num, n - 1);
  }
};

//console.log(timesNum(2, 3));

//------------------------------------------------------

// 3. Calculate factorial
//For example, factorial of 5 will calculate as 5*4*3*2*1 to 120

const factorialize = num => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
};

//console.log(factorialize(5));
//console.log(factorialize(0));

//------------------------------------------------------

// 4.  Find the greatest common divisor (gcd) of two positive numbers.
// using the Euclidean algorithm

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  } else {
    return gcd(num2, num1 % num2);
  }
};

//console.log(gcd(23, 290))

//------------------------------------------------------

// 5. Get the integers in range (x, y)
// for example, range(2,6) returns 3,4,5

// not in an array
const range = (x, y) => {
  if (x + 1 == y) {
    return "";
  } else {
    return x + 1 + range(x + 1, y);
  }
};

//console.log(range(1, 10));

//in an array
const range2 = (x, y) => {
  if (y - x === 2) {
    return [x + 1];
  } else {
    let list = range2(x, y - 1);
    list.push(y - 1);
    return list;
  }
};

//console.log(range2(1, 10));

//------------------------------------------------------

//6. Compute the sum of an array of integers.
//for example, output of array = [1, 2, 3, 4, 5, 6] is 21.

const sumArray = arr => {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr.pop(arr.length) + sumArray(arr);
  }
};

//console.log(sumArray([1, 2, 3, 4, 5, 6]));
//console.log(sumArray([20, 20, 30, 30]));

//suggested answer
var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  } else {
    return my_array.pop() + array_sum(my_array);
  }
};

//------------------------------------------------------

//7. Compute the exponent of a number
//For example, 8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

const numExp = (num, exp) => {
  if (exp === 0) {
    return 1;
  } else {
    return num * numExp(num, exp - 1);
  }
};
//console.log(numExp(8,2));
//console.log(numExp(5, 3));

//------------------------------------------------------

//8. Get the first n Fibonacci numbers
// From 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, first 5 will be 0, 1, 1, 2, 3

//9. Write a merge sort program in JavaScript.
// Sample array : [34,7,23,32,5,62]
//Sample output : [5, 7, 23, 32, 34, 62]
