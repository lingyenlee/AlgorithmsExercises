//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes

function spinalCase(str) {
    //return capitalized words with a space between
   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let re =  /\s+|_+/g;
 return str.replace(re, "-").toLowerCase();
}

//test cases
console.log(spinalCase("thisIsSpinalTap"))
