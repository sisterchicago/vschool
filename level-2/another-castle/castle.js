const readlineSync = require('readline-sync');

class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.statusOptions = "Big";
        this.hasStar = false;
        this.gameActive = true;
    }

    setName() {
        const namePicked = readlineSync.question('Pick your player! Type Mario or Luigi: ')
        if (namePicked === 'Mario') {
            this.name = 'Mario'
        } else if (namePicked === 'Luigi') {
            this.name = 'Luigi'
        }
    }

    gotHit() {
        if (this.hasStar === true) {
            console.log('Star Power!')
            this.hasStar = false
        } else if (this.hasStar === false) {
            if (this.statusOptions === "Powered Up") {
                this.statusOptions = "Big"
            } else if (this.statusOptions === "Big") {
                this.statusOptions = "Small"
            } else if (this.statusOptions === "Small") {
                this.statusOptions = "Dead"
                this.gameActive = false
            }
        }
    }

    gotPowerUp() {
        if (this.statusOptions === "Powered Up" && this.hasStar === true) {
            console.log('Powered Up!')
        } else if (this.statusOptions === "Powered Up") {
            console.log('Star Power!')
            this.hasStar = true
        } else if (this.statusOptions === "Big") {
            this.statusOptions = "Powered Up"
        } else if (this.statusOptions === "Small") {
            this.statusOptions = "Big"
        } 
    }

    setTimeout() {
        
    }

    addCoin() {
        this.totalCoins++
    }

    print() {
        console.log(`Name: ${this.name}
        Status: ${this.statusOptions}
        Total Coins: ${this.totalCoins}
        hasStar: ${this.hasStar}`
        )
    }

}

const playerOne = new Player()
playerOne.setName()
playerOne.print()

function randomRange(num) {
    return Math.floor(Math.random() * num)
}

function runGame() {
    const number = randomRange(3)

    if (playerOne.gameActive === true) {
        playerOne.print()
        if (number === 0) {
            playerOne.gotHit()
        } else if (number === 1) {
            playerOne.gotPowerUp()
        } else if (number === 2) {
            playerOne.addCoin()
        }
    } else {
        clearInterval(intervalId)
        console.log("Game Over...")
        playerOne.print()
    }
}

//let setTimeout

setTimeout(function() {
    console.log(`Name: ${this.name}
    Status: Big
    Total Coins: ${this.totalCoins}`);
}, 500);

//setTimeout = setTimeout(this.hasStar, 2000)

let intervalId

intervalId = setInterval(runGame, 1000)
