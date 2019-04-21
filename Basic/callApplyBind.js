//=========SIMPLEST EXAMPLE OF CALL==================

//define a function that prints a, b and c. a and b are not defined and c is
// passed in as an argument

let add = function(c) {
  console.log(this.a + this.b + c);
};

//now define an object which has a and b
let obj = {
  a: 1,
  b: 2,
};

//the add function is not part of obj so if add is call, a and b are not defined
//but add can have access to a and b by using the call function to it, passing
//the obj as first parameter

//add.call(obj, 3); //1+2+3 = 6

//=========EXAMPLE OF CALL BORROWING PROTOTYPES==================

//every object in js has prototypes and their methods that can only be used on that obj
//for example, in array, there is a prototype and a bunch of methods

console.dir([]);

//define a function (arguments object available by default)
//console.log the arguments and there are the 3 elements but it
//has no array prototypes or functionality
//in order to convert the arguments to an array so it has the array functionality
// you can borrow the functionality from array prototypes

let argsToArray = function() {
  //write an empty array to use the slice method by call
  console.log([].slice.call(arguments));
  // console.log(arguments)
};

//call argstoArray and pass 1,2,3
argsToArray(1, 2, 3);

//=========EXAMPLE OF CALL BORROWING FUNCTION CONSTRUCTORS==================

//you have a base constructor and a subcontructor and can use call to call base constructor
//from subconstructor

//create a base constructor
let mammal = function(legs) {
  this.legs = legs;
};

//create a sub constructor
let cat = function(legs, isDomesticated) {
  mammal.call(this, legs);
  this.isDomesticated = isDomesticated;
};

//create an instance of cat
let lion = new cat(4, false);
console.log(lion);

//=========EXAMPLE OF APPLY==================

//apply works the same as call but the arguments are passed in as array

//create an array containing 1,2,3
let numArray = [1, 2, 3];

//find the min in the array, but array does not have the Math.min functionality
//make the array elements into a list of arguments and passed into Math.min
//pass null in the 1st as no obj, pass numArray as 2nd arg

console.log(Math.min.apply(null, numArray));

//=========EXAMPLE OF BIND==================

// bind objects and give functionalities inside of the objects

//create a button
let button = function(content) {
  this.content = content;
};

//give the button a prototype method called click
button.prototype.click = function() {
  console.log(`${this.content} clicked`);
};

//create a new instance of button and the click is bind to the new instance
let newButton = new button("add");
console.log(newButton);

//the click function is loosely bound to newButton, looseClick is undefined
let looseClick = newButton.click;
looseClick();

//can use bind function to bind the newButton and get the click function
let boundButton = newButton.click.bind(newButton);
boundButton();

// let dog = {
//   sound: "woof",
//   talk: function() {
//     console.log(this.sound);
//   },
// };

// //dog.talk();
// let talkFunction = dog.talk;
// talkFunction();
// let boundFunction = talkFunction.bind(dog);
// boundFunction();
