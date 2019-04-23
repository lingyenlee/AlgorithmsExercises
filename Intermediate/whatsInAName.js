//return object if it is present in the collection

// function whatIsInAName(collection, source) {
//   let arr = [];
//   let sourceKeys = Object.keys(source);

//   console.log(Object.values(source))
//   collection.filter(x => {
//        sourceKeys.map(y => {
//     //     x.hasOwnProperty(y) || Object.values(x) === y[sourceKeys]
//     //     arr.push(x)
//     console.log()
//        })

// console.log(y)
//console.log(Object.keys(x));

//return arr;
//   });
// }

//test cases
console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
