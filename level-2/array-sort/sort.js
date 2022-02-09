const numArr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// 1) Sort an array from smallest number to largest

numArr.sort((a, b) => a - b)

console.log(numArr)

//2) Sort an array from largest number to smallest

numArr.sort((a, b) => b - a)

console.log(numArr)

//3) Sort an array from shortest string to longest

const string = ["dog", "wolf", "by", "family", "eaten"]

string.sort((a, b) => a.length - b.length)

console.log(string)

//4) Sort an array alphabetically

string.sort()

console.log(string)

//5) Sort the objects in the array by age

const age = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

age.sort((a, b) => a.age - b.age)

console.log(age)