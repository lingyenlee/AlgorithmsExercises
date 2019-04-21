//Return the sum of those two numbers plus the sum of all the numbers between them.

//==== METHOD 1==========
//find max and min number in the arr
//loop through from min to max and add the numbers
const sumAll = arr => {
  let numMax = Math.max(arr[0], arr[1]);
  let numMin = Math.min(arr[0], arr[1]);
  let count = 0;
  for (let i = numMin; i <= numMax; i++) {
    count += i;
  }
  return count;
};

console.log(sumAll([1, 4]));

//=======METHOD 2=============
// use the mathimatical formula for sum of nums = n(n+1)/2
// use the block method

// const sumAll = arr => {
//     let numMax = Math.max(arr[0], arr[1]);
//     let numMin = Math.min(arr[0], arr[1]);

//     let sum = ((numMax+numMin) * (numMax - numMin + 1))/2
//     return sum
//   };

//   console.log(sumAll([1, 4]));
