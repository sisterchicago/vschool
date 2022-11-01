//String - denoted/represented by " " ' ' - they are great for words,language
var firstName = 'Tedd'
console.log(firstName)

//Number - anything of numerical value - just a number
var n = 8
console.log(n)


//Boolean - true or false
var hasAdaAccess = true

//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 
const taylors = ["Natalie", "Addison", "Paisley"]
console.log(taylors[0])

//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .

var person = {
    firstName: "Natalie",
    lastName: "Taylor",
    age: 39,
    isEyeColorBlue: true,
    family: ["Natalie", "Addison", "Paisley"]
}
console.log(person.family[0])
console.log(person.firstName)
console.log(person.lastName)

//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//Below is a variable set equal to an object datatype
//Use dot and bracket notation here as well


//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement

var sports = 'football'

if (sports === 'soccer') {
    console.log("I love football!")
} else if (sports === 'football') {
    console.log("I love soccer!")
} else {
    console.log("I love something else...!")
}



//For Loops - A their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i
//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 
//i = i + 1 same i++
for (var i = 10; i < 23; i++) {
    console.log(i)
}


//level 0 curriculm last 7 videos cover this material
//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method
var button = document.getElementById("button")

function frank() {
    console.log("Tapped!")
}

button.addEventListener("click", frank)

var newButton = document.getElementById("buttonOne")

function handleButtonClickTwo() {
    console.log("Smashed!")
}

newButton.addEventListener("click", handleButtonClickTwo)
