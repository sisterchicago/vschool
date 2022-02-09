const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(numbers) {
    let newArr = numbers.filter(num => num >= 5)
    return newArr
  } console.log(fiveAndGreaterOnly(numbers));

  // 2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(numbers) {
    let newArr = numbers.filter(num => num % 2 === 0)
    return newArr
} console.log(evensOnly(numbers));

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const string = ["dog", "wolf", "by", "family", "eaten", "camping"]

function fiveCharactersOrFewerOnly(string) {
    let newArr = string.filter(string => string.length <= 5)
    return newArr
} console.log(fiveCharactersOrFewerOnly(string));

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club

const people = [
    { name: "Angelina Jolie", member: true, age: 80 },
    { name: "Eric Jones", member: false, age: 2 },
    { name: "Paris Hilton", member: true, age: 5 },
    { name: "Kayne West", member: false, age: 16 },
    { name: "Bob Ziroll", member: true, age: 100 }
]

function peopleWhoBelongToTheIlluminati(people) {
    let newArr = people.filter(person => person.member === false)
    return newArr
} console.log(peopleWhoBelongToTheIlluminati(people));

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

function ofAge(people) {
    let newArr = people.filter(person => person.age >= 18)
    return newArr
} console.log(ofAge(people));