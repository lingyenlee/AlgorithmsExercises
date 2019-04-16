//Repeat a given string str (first argument) for num times (second argument).
//Return an empty string if num is not a positive number.

const repeatString = (str, num) => {
  if (num <= 0) {
    return " ";
  } else {
    return str + repeatString(str, num - 1);
  }
};

//test cases
console.log(repeatString("abc", 3));
console.log(repeatString("*", 8));
console.log(repeatString("abc", -2));
