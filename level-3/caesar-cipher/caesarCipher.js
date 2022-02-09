const Readline = require('readline-sync')

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
})