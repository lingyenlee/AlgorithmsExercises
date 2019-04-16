//Check if a value is classified as a boolean primitive. Return true or false.

const booWho = bool => {
  if (typeof bool === "boolean") {
    return true;
  }
  return false;
};

//test cases
console.log(booWho(false));
console.log(booWho(true));
console.log(booWho([].slice));
