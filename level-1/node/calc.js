var readlineSync = require("readline-sync");

var question1 = readlineSync.question("What is your first number? ");

var question2 = readlineSync.question("What is your second number? ");

var question3 = readlineSync.question("Please enter the operation to perform.(add, subtract, multiply, divide) ");

if (question3 == "add"){
    console.log("The result is " + (parseInt(question1) + parseInt(question2)));
} else if (question3 == "subtract"){
    console.log("The result is " + (parseInt(question1) - parseInt(question2)));
} else if (question3 == "multiply"){
    console.log("The result is " + (parseInt(question1) * parseInt(question2)));
} else if (question3 == "divide"){
    console.log("The result is " + (parseInt(question1) / parseInt(question2)));
} else{
    console.log("That's not an operation. ");
}