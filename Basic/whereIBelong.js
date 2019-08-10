function getIndexToIns(arr, num) {


    let new_array = arr.concat(num).sort(function(a,b) {
        return a-b
    })
    
    return new_array.indexOf(num)

}

//test cases
console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
console.log(getIndexToIns([2, 20, 10], 19))