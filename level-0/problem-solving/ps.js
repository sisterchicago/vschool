//Write a function that takes an array of numbers and returns the largest (without using Math.max())

let array = [3, 5, 2, 8, 1];
array.sort((a,b) => a-b)
const min = array[0]
const max = array[array.length-1]
console.log(`Minimun: ${min}, Maximum: ${max}`)

// Write a function that takes an array of words and a character and returns each word that has that character present.


function lettersWithStrings(arrayOfStrings, character) {
    for (let i = 0; i < arrayOfStrings.length; i++){
        let firstIndex = arrayOfStrings.indexOf(arrayOfStrings[i])
        let secondIndex = firstIndex + 1
        let seperateArray = arrayOfStrings.slice(firstIndex, secondIndex)
        let stringOfArray = seperateArray[0]
        if (stringOfArray.includes(character)) {
            console.log(stringOfArray)
        }
     
           
    }
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2){
    if (num1 % num2 != 0){
        return false;
    } return true;
}

console.log(isDivisible(10, 5))