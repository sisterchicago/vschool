// Write a function that takes an array of numbers and returns the second highest number. 

//function getSecondHighest(numbers){

//}

//console.log(getSecondHighest([4, 6, 2, 43, 3, 9])) // => 9
//console.log(getSecondHighest([4, 100, 2, 43, 3, 9])) // => 43

arr = [4, 6, 2, 43, 3, 9]
newArr = [4, 100, 2, 43, 3, 9]

function processData(arr) {
    firstLargestNum = Math.max(...arr) // firstLargestNum
    index = arr.indexOf(firstLargestNum)  // the index of firstLargestNum
    arr.splice(index, 1) // delete first largest num
    secondLargestNum = Math.max(...arr) // firstLargestNum removed; find secondLargestNum
    return (secondLargestNum) // return secondLargestNum
}

//console.log(processData([4, 6, 2, 43, 3, 9]))
console.log(processData([4, 100, 2, 43, 3, 9]))