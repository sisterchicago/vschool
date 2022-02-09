//write a function that:

//Returns a list of everyone older than 18, which is
//sorted alphabetically by last name, and where
//each name and age is embedded in a string that looks like an HTML <li> element.

const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
// This filters the array in alphabetical order from a to b

const lastName = peopleArray.sort(function(personA, personB) {
    let a = personA.lastName.toLowerCase();
    let b = personB.lastName.toLowerCase();

    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
})

// This filters the array by age

const byAge = lastName.filter(person => person.age > 18)

// This gets the array ready to be inserted into html

const ready = byAge.map(function(person) {
    return `<li>${person.firstName} ${person.lastName} is ${person.age} </li>`
})

console.log(ready)

//function sortedOfAge(peopleArray) {
//   return peopleArray.filter(person => person.age >= 18)
//} //console.log(sortedOfAge(peopleArray))

//function alphabetically(peopleArray) {
//    let alphabetizes = peopleArray.sort((personA, personB) => personA.lastName.localeCompare///(personB.lastName))
//    return alphabetizes
//} //console.log(alphabetically(peopleArray))

//function addHTML(peopleArray) {
//    let html = peopleArray.map(person => "<li>" + person.firstName + " " + person.lastName + //" is " + person.age + "</li>")
//    return html
//} console.log(addHTML(peopleArray))

//function allTogether(peopleArray) {
//    return sortedOfAge(peopleArray), alphabetically(peopleArray), addHTML(peopleArray);
//} console.log(allTogether(peopleArray))