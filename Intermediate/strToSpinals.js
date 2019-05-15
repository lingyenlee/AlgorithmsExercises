//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes

function spinalCase(str) {
  //return capitalized words with a space between
  //$1 and $2 refers to the matching group 1 and 2 in brackets
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let re = /\s+|_+/g;
  return str.replace(re, "-").toLowerCase();
}

//test cases
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
