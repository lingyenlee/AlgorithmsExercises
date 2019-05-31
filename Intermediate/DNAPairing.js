//The DNA strand is missing the pairing element. 
//Take each character, get its pair, and return the results as a 2d array

function pairElement(str) {

    let TwoDArr = [];

    for (let i = 0; i < str.length; i++) {
        let pairArr = [];
        if (str[i] === "G") {
            pairArr.push(str[i], "C")
            TwoDArr.push(pairArr)
        }
        if (str[i] === "C") {
            pairArr.push(str[i], "G")
            TwoDArr.push(pairArr)
        }
        if (str[i] === "A") {
            pairArr.push(str[i], "T")
            TwoDArr.push(pairArr)
        }
        if (str[i] === "T") {
            pairArr.push(str[i], "A")
            TwoDArr.push(pairArr)
        }
    }
    return TwoDArr
}

//testcase
console.log(pairElement("GCG"))
console.log(pairElement("ATCGA"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))

//suggested solution
// function pairElement(str) {
//       // Return each strand as an array of two elements, the original and the pair.
//       var paired = [];

//       // Function to check with strand to pair.
//       var search = function(char) {
//         switch (char) {
//           case 'A':
//             paired.push(['A', 'T']);
//             break;
//           case 'T':
//             paired.push(['T', 'A']);
//             break;
//           case 'C':
//             paired.push(['C', 'G']);
//             break;
//           case 'G':
//             paired.push(['G', 'C']);
//             break;
//         }
//       };

//       // Loops through the input and pair.
//       for (var i = 0; i < str.length; i++) {
//         search(str[i]);
//       }

//       return paired;
//     }
