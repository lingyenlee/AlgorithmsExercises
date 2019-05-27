function myReplace(str, before, after) {

    //find where the index of word starts
    const beforeIndex = str.indexOf(before)

    // console.log(str[beforeIndex].toUpperCase())
    if (str[beforeIndex] === str[beforeIndex].toUpperCase()) {
        const afterCapital = after[0].toUpperCase() + after.slice(1)
        str = str.replace(before, afterCapital)
    } else {
        str = str.replace(before, after)
    }
    return str;
}

//test case
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("His name is Tom", "Tom", "john"))