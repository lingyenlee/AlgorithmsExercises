//Question: Given an array of integers and a target sum,
//find all pairs that add up to the target sum.
//Write a function twoSum that solves this.

//Using Brute Force to loop thru 2x
//time complexity = O(n) * O(n) = O(n)^2
//space complexity = O(1) -constant

// var twoSum = function(nums, target) {
//   let results = [];
//   for (let i = 0; i < nums.length; i++) {
//     //O(n)
//     for (let j = i + 1; j < nums.length; j++) {
//       //O(n)
//       if (nums[i] === target - nums[j]) {
//         return [i, j];
//       }
//     }
//   }
// };

//using hash table
//time complexity = O(n)
//Space complexity = O(n)

var twoSum = function(nums, target) {
  //create an empty hashtable
  let Directory = new Map();
  for (let i = 0; i < nums.length; i++) {
    //check if the directory has the difference of the twosum
    if (Directory.has(target - nums[i]))
      return [i, Directory.get(target - nums[i])];
    //store the current value and index
    Directory.set(nums[i], i);
  }
};

//test case
nums = [2, 7, 11, 15];
target = 17;
console.log(twoSum(nums, target));
