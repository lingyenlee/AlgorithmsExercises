// ========================Reverse a string==============================

//METHOD 1 - most direct way

const reverseStr1 = str =>
  str
    .split("")
    .reverse()
    .join("");

//*test cases*

//console.log(reverseStr1("Howdy"));
//console.log(reverseStr1("Greetings from Earth"));

//------------------------------------------------------

//METHOD 2 - using for loop

const reverseStr2 = str => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

//*test cases*

//console.log(reverseStr1("Howdy"));
//console.log(reverseStr1("Greetings from Earth"));

//------------------------------------------------------

//METHOD 3 - using recursion

const reverseStr3 = str => reverseStr3(str.substr(1) + str.charAt(0));

//*test cases*

//console.log(reverseStr1("Howdy"));
//console.log(reverseStr1("Greetings from Earth"));
