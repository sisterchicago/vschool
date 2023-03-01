document.getElementById("btnOne").onclick = function() {
    var num = prompt("Enter a number");
    if(num < 50){
        alert(num + " is under 50");
    }
    else{
        alert(num + " is above 50");
    }
};

document.getElementById("btnTwo").onclick = function() {
    var num1 = 7;
    var num2 = 7;
    if(num1 = 2){
        alert("Wait, what was the value of num1?  " + num1 );
    }
    if(num2 == 7){
        alert("What is the difference between = and ==?");
    }
};



document.getElementById("btnThree").onclick = function() {
    var num = prompt("Type in a number, try the values 7, 10, 0, and -1");
    if(num == 7){
        alert("This statement uses several if statements");
    }
    if(num < 10){
        alert("They are the exact same conditions as the next question");
    }
    if(num > 0){
        alert("So what is the difference between this, and using an else if structure?")
    }
    else{
        alert("That was a negative number");
    }
};

document.getElementById("btnFour").onclick = function() {
    var num = prompt("Type in a number, try the values 7, 10, 0, and -1");
    if(num == 7){
        alert("This statement uses an else if statement");
    }
    else if(num < 10){
        alert("They are the exact same conditions as the previous question");
    }
    else if(num > 0){
        alert("So what is the difference between this, and using several if structure?")
    }
    else{
        alert("That was a negative number");
    }

};



document.getElementById("btnFive").onclick = function() {
	/*Predict what the output will be, then run the code for the following values? 215, 50, 30*/
	var temp = parseFloat(prompt("Enter tempature: "));
	if(temp > 212){
		alert("Boiling water");
	}
	else if(temp > 32){
		alert("Liquid Water");
	}
	else{
		alert("Ice");
	}

};

document.getElementById("btnSix").onclick = function() {
	/*TODO:
	The Wicked roller coaster at Lagoon has a height requirement.  Write a script to determine if Guests may ride.
	Allow the user to enter their height in inches and have the script report back based upon the following:
	Guests May Ride(above 50 inches), must ride in a booster seat(46 to 50 inches) or may not ride. */
};



document.getElementById("btnSeven").onclick = function() {
	/*One side of a triangle cannot be larger than the sum of the two other sides.  
		This example demonstrates the use of the || (or) symbol.  Predict the output with 
		your own inputs, then run the code to see if your prediction was correct.   */
	var sideA = parseFloat(prompt("Enter Side A"));
	var sideB = parseFloat(prompt("Enter Side B"));
	var sideC = parseFloat(prompt("Enter Side C"));
	if(sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB){
		alert("Invalid Triangle");
	}
	else{
		alert("Valid Triangle");
	}

};
document.getElementById("btnEight").onclick = function() {
/*In order to graduate with an associates degree in CS, you must have a GPA of 2.7 
and above and 63 credits.  Use the && (and symbol) to code the script to get this to work.
Allow the user to enter their gpa and number of credits.  The program will report the following messages
"Credit Deficient", "Low GPA", "You may graduate"*/
};

document.getElementById("btnNine").onclick = function() {
	var num = 0;
	num++;
	alert("What does ++ do? The number was 0 and now it is " + num);

	num += 3;
	alert("What does += do? The number was 1 and now it is " + num);

	num -= 2;
	alert("What does -= do? The number was 4 and now it is " + num);

	//TODO
	alert("Write a command above to multiply the number by 3 so it ends up being 6: " + num);
};

document.getElementById("btnTen").onclick = function() {
var num = parseInt(prompt("Enter an int value:"));
var div = num - 1;
while(num % div != 0){
	div--;
}
alert(div + " is the largest divisor of " + num);
};

document.getElementById("btnEleven").onclick = function() {
var band = prompt("Enter the best band ever");
while(band != "Aquabats"){
	band = prompt("Nope, guess again. What is the best band ever");
}
alert("Yes, " + band + " is the best band ever");
};



document.getElementById("btnTwelve").onclick = function() {
	/*TODO
	Write a script to allow the user to enter a number between 1 and 10.  If the user enters anything else, the program
	should let the user know that was not in the program specifications and allow them to enter again */
};

document.getElementById("btnThirteen").onclick = function() {
	var num = parseInt(prompt("Enter a number to count to"));
	var sum = 0;
	for(var i = 0; i < num; i++){
		alert("Count: " + i);
		sum += i;
	}
	alert("The sum of the numbers is " + sum);
};

document.getElementById("btnFourteen").onclick = function() {
	var num = parseInt(prompt("Enter a number to count by:"));
	var sum = 0;
	for(var i = 0; i < 20; i += num){
		alert("Count: " + i);
		sum += i;
	}
	alert("The sum of the numbers is " + sum);
};


document.getElementById("btnFifteen").onclick = function() {
for(var i = 10; i >= 0; i-=2){
	alert("Count: " + i);
}
};


document.getElementById("btnSixteen").onclick = function() {
	var word = prompt("Enter a word");
	for(var i = 0; i < word.length; i++){
		var letter = word.charAt(i);
		alert("Char At: " + letter);
	}
};

document.getElementById("btnSeventeen").onclick = function() {
/*Write a script to allow the user to enter a word, it will show each of the letters in reverse order*/
};


document.getElementById("btnEighteen").onclick = function() {
/*Write a script to allow the user to enter a number.  The script will then report back all the even numbers up to that number*/
};


	document.getElementById("btnNineteen").onclick = function() {
	var sentence = prompt("Enter a sentence");
	var space = 0;
	for(var i = 0; i < sentence.length; i++){
		var letter = sentence.charAt(i);
		if(letter == ' '){
			space++;
		}
	}
	alert("There are " + space  + " spaces in " + sentence);
};


document.getElementById("btnTwenty").onclick = function() {
	
	var string = prompt('Enter a sentence: ')

	
	let vowelsCount = 0
	const vowels = ['a', 'e', 'i', 'o', 'u']

	for (let char of string.toLowerCase()) {
		if (vowels.includes(char)) {
			vowelsCount++
		}
	}
		
	alert('There are ' + vowelsCount + ' vowels in your sentence: ' + string)

	
}
