//You will be provided with an initial array (the first argument in the destroyer function),
//followed by one or more arguments. Remove all elements from the initial array that are
//of the same value as these arguments.

function destroyer(arr) {
  //convert arguments object into an array
  let newArr = Array.from(arguments);
  //save arguments outside of initial array to a new array
  let newArr2 = newArr.slice(1);
  //filter the initial array by comparing with newArr2
  let newArr3 = newArr[0].filter(x => newArr2.indexOf(x) === -1);
  return newArr3;
}

//intermediate code solution
// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(x => !args.includes(x));
// }

//test cases
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(
  destroyers(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan"
  )
);
