function doubleNumbers(arr){
    return arr.map(num => num * 2);
  }
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr){
  return arr.map(num => num.toString());
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function capitalizeNames(arr){
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
  }
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

const people = [{
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }]
function namesOnly(people) {
    const newArr = people.map(person => person.name);
    return newArr
} console.log(namesOnly(people))

  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
function makeStrings(people) {
    const newArr = people.map(person => {
        if (person.age < 18) {
            return person.name + " is under age!!"
        } else {
            return person.name + " can go to The Matrix!"
        }
    }); return newArr
  } console.log(makeStrings(people))
  
function readyToPutInTheDom(people) {
    const newArr = people.map(person => {
        let h1s = `<h1>${person.name}</h1>`
        let h2s = `<h2>${person.age}</h2>`
        return h1s + h2s
    }); return newArr
} console.log(readyToPutInTheDom(people))