// Find the longest word in a string

const findLongestWordLength = str => {
  const wordLength = str.split(" ").sort((a, b) => 
    b.length - a.length
  )[0].length;
  return wordLength;
};

//test cases
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
  )
);
