function capitalizeAndLowercase(str) {
    let upper = str.toUpperCase()
    let lower = str.toLowerCase()
    return upper + lower;
}
console.log(capitalizeAndLowercase("hello"))

function findMiddleIndex(str) {
    let middleIndex = (str.length / 2)
    let halfit = (Math.floor(middleIndex))
    return halfit
}
console.log(findMiddleIndex("Hello"))
console.log(findMiddleIndex("Hello World"))

function returnFirstHalf(str) {
    let halfway = findMiddleIndex(str)
    return str.slice(0, halfway)
}
console.log(returnFirstHalf("Hello"))
console.log(returnFirstHalf("Hello World"))

function upperLower(str) {
    let halfway = findMiddleIndex(str)
    let returnFirstHalf = str.toUpperCase().slice(0, halfway)
    let secondHalf = str.toLowerCase().slice(halfway, str.length)
    return returnFirstHalf + secondHalf
}
console.log(upperLower("Hello World"))