//Return the provided string with the first letter of each word capitalized.
//Make sure the rest of the word is in lower case.

const titleCase = str => {
  let word = str.toLowerCase().split(" ");
  let capital = word.map(x => x.replace(x[0], x[0].toUpperCase()));
  return capital.join(" ");
};
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
