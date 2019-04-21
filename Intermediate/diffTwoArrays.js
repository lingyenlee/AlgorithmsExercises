//Compare two arrays and return a new array with any items 
//only found in one of the two given arrays, but not both. 

const diffArray = (arr1, arr2) => {
  let arr3 = [];
  //merge the 2 arrays
  let arrMerge = arr1.concat(arr2);
  
  //if the element in the merged array is not found in either original array
  //push to new array 
  arrMerge.filter(e => {
    if (arr1.indexOf(e) == -1 || arr2.indexOf(e) == -1) {
      arr3.push(e);
    }
  });
  return arr3;
};

// Test cases
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
