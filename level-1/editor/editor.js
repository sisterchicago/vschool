/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

let enemyName = [
    "Lex", 
    "Batman", 
    "Darkside", 
    "Brainiac", 
    "General Zod", 
    "Doomsday"
];

function whoWins(kryptonite, enemyName){
    if (kryptonite) {
        return ("Superman beats " + enemyName + ", of course");
    } else {
        return ("Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.");
    }
}

for (let i = 0; i < enemyName.length; i++) {
    if ( i % 2 === 0 ) {
        kryptonite = true;
    } else {
        kryptonite = false;
    }
        console.log(whoWins(kryptonite, enemyName [i] ));


function loisLane() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() *10 ) +1 );
}

console.log(loisLane());

let clarkKent = true;
let superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");

    let phoneBooth = Math.random();
    
    if (phoneBooth >= 0.5) {
        clarkKent = false;
        superman = true;
            console.log("Now I'm Superman!")
    }
}