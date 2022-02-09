const readlineSync = require("readline-sync");
const userName = readlineSync.question("What is your name? ");
    console.log("Hi " + userName + "!");
const entrance = readlineSync.question('Ready to start? [Y] or [N] ');
    if (entrance == "y"){
     console.log("Awesome! " +userName+ " Let's begin! You are locked in a cave. Your choices are find the key, Open the door, or stick your hand in the hole in the wall. If you put your hand in the hole, YOU DIE!!!")
    } 
    else if (entrance == "n"){
     console.log('Maybe another time')
            process.exit()
    }

isPlaying = true
let keyFound = false

while(isPlaying == true){
    const playerOption = readlineSync.question("Do you want to ... \n [1] Open the door? \n [2] Put hand in the hole? \n [3] Find key? \n", {limit:["1","2","3"]});

    switch(playerOption){
        case '2':
            console.log("You're dead!")
            isPlaying = false;
            break;
        case '3':
            console.log("You found the key under a rock!");
            keyFound = true;
            break;
        case '1':
            if(keyFound === true){
                console.log("You WIN!")
                isPlaying = false
            } else {
                console.log("You don't have the key. Try again...")
            }
            break;
    }
}

