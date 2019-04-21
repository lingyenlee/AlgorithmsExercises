//Remove all falsy values from an array.

const bouncer = arr => {
  const truthy = value => value;
  const filtered = arr.filter(truthy);
  return filtered;
};

//test case
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([1, null, NaN, 2, undefined]));
