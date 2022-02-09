//Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return animals; 
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

const combineFruit = (fruit, sweets, vegetables) => ({fruit: fruit, sweets: sweets, vegetables: vegetables})

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

//Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence(location, duration){
    return `We're going to have a good time in ${location} for ${duration}`
  }

 //Use destructuring to make this code ES6:
 
 function returnFirst(items){
    const [firstItem, ...rest] = items; /*change this line to be es6*/
    return firstItem
}

//Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

//function returnFavorites(arr){
    /*your code here*/
  //  return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
//}

const [firstFav, secondFav, thirdFav, ...rest] = favoriteActivities

function returnFavorites(){
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`
}
console.log(returnFavorites(favoriteActivities))

//Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(arr1, arr2, arr3, ...rest) {  
 return [arr1, arr2, ar3, ...rest]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Try to make the following function more ES6xy:

// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

const product = (a, b, c, ...rest) => {  
    const numbers = [a,b,c, ...rest];
    return numbers.reduce((final, number) => final * number, 1)
  }

 //Make the following function more ES6xy. Use at least both the rest and spread operators:
 
 //function unshift(array, a, b, c, d, e) {  
   // return [a, b, c, d, e].concat(array);
 // }

 const unshift = (array, ...arr) => array.concat(...arr);

console.log(unshift(["blue", "green", "purple"], 1, 2, 3))

//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

const populatePeople = names => {return names.map((name) => {
    const [firstName, lastName] = name.split(" ")
    return {firstName, lastName};
})}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
