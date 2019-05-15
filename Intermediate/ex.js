function translatePigLatin(str) {
  if ((str[0] = /^[aeiou]$/)) {
    console.log(str[0]);
    return str.concat("way");
  } else {
    newStr = str.slice(1, str.length).concat(str[0] + "ay");
    return newStr;
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
