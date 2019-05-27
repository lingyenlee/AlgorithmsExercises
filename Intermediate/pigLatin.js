function translatePigLatin(str) {

    let pigLatin = ""
    //regex for vowels
    const vowelPattern = /[aeiou]/gi

    //find the position of first vowel in the string


    //get the first letters till first vowel
    // str.slice(0, [newstr])
    // string after remove consonants   
    // str.slice([newstr]) 
    if (str[0].match(vowelPattern)) {
        pigLatin = str + "way"

    } else if (str.match(vowelPattern) === null) {
        pigLatin = str + "ay"

    } else {
        const newstr = str.indexOf(str.match(vowelPattern)[0])
        pigLatin = str.slice([newstr]) + str.slice(0, [newstr]) + "ay"
    }

    return pigLatin

}

//test case
console.log(translatePigLatin("ghrtlsxvc"))

