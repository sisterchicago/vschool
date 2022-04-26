/*const Readline = require('readline-sync')

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let alphabetArray = alphabet.split('')
let alphabetUppercase = alphabet.toUpperCase()
let alphabetUppercaseArray = alphabetUppercase.split('')

let inputText = Readline.question('What phrase do you want to encode? ')
let shiftAmount = Readline.question('How many positions do you want to shift? ')

let inputArray = inputText.split('')
let newString = ''

inputArray.map(letter => {
    if (alphabetArray.includes(letter) === true) {
    let alphabetIndex = alphabet.indexOf(letter)
    let newLetterIndex = parseInt(alphabetIndex) + parseInt(shiftAmount)
    let newLetter = alphabetArray[newLetterIndex]
    newString += newLetter
    // console.log(`${letter} oldIndex: ${oldLetterIndex} newIndex ${newLetterIndex} equals ${alphabetArray[newLetterIndex]}`)
    }
    else if (alphabetUppercaseArray.includes(letter) === true) {
        let alphabetIndex = alphabetUppercase.indexOf(letter)
        let newLetterIndex = parseInt(alphabetIndex) + parseInt(shiftAmount)
        let newLetter = alphabetUppercaseArray[newLetterIndex]
        newString += newLetter
        // console.log(`${letter} oldIndex: ${oldLetterIndex} newIndex ${newLetterIndex} equals ${alphabetArray[newLetterIndex]}`)
    }
    else {newString + `${letter}`}
    console.log(newString)
})*/

var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const decode = (str, num) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    return str.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + num])
}

console.log(decode(input, shift))