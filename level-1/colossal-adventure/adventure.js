const readlineSync = require('readline-sync');

const userName = readlineSync.question(`Welcome to the Labyrinth! If you enter, be prepared to fight enemies...or else you will die! To play, please enter your name: `)
console.log(`Alright ${userName}, here we go! To move, you will need to walk into the Labyrinth. Enter "info" at anytime to get player information.`)

let player = {
    name: userName,
    hp: 100,
    items: ['crystal ball']
}

let isFighting = false;

function randomPower(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function playerPower() {
    return randomPower(30, 61)
}

function Enemy(name, hp, item, damageMin, damageMax) {
    this.name = name
    this.hp = hp
    this.item = item
    this.attackPower = function() {
        return randomPower(damageMin, damageMax)
    }
}

const muppet = new Enemy('Muppet', 110, "baton", 24, 59)

const goblin = new Enemy("Goblin King", 150, "sword", 27, 73)

const troll = new Enemy("Troll", 105, "war hammer", 15, 21)

const enemyArray = [muppet, goblin, troll]

function randomSelector(num) {
    return Math.floor(Math.random() * num)
}

function attackOrRun(enemy) {
    isFighting = true;
    while (isFighting) {
        let fightOrFlight = readlineSync.question(`Are you ready to attack ${enemy.name}? Or do you want to run? (enter "a" to attack or "r" to run): `)

        if (fightOrFlight === 'a') {
            attack(enemy);
        } else if (fightOrFlight === 'r') {
            run(enemy);
        } else if (fightOrFlight === 'info') {
            console.log(player)
        } else {
            console.log(`Sorry, ${fightOrFlight} is not an option. Please try again. `)
        }
    }
}

function attack(enemy) {
    let playerDamage = playerPower();
    let enemyDamage = enemy.attackPower();

    let playerHealthPoints = player.hp
    let enemyHealthPoints = enemy.hp

    let playerNewHp = playerHealthPoints - enemyDamage
    let enemyNewHp = enemyHealthPoints - playerDamage

        if (playerNewHp > 0 && enemyNewHp > 0) {
            console.log(`Nice! You hit ${enemy.name} with ${playerDamage}! `)
            console.log(`Oh, no! ${enemy.name} hit back with ${enemyDamage}!`)
            console.log(`You now have ${playerNewHp} hp and ${enemy.name} has ${enemyNewHp} hp remaining! `)
            player.hp = playerNewHp
            enemy.hp = enemyNewHp
            attackOrRun(enemy)
        } else if (playerNewHp > 0 && enemyNewHp <= 0) {
            console.log(`Ack! ${enemy.name} hit with ${enemyDamage} leaving you with ${playerNewHp} hp. But, you were able to quickly hit back with ${playerDamage} and defeated ${enemy.name}!!! You have earned an extra 100 hp and mortally wounded ${enemy.item}. Congratulations!`)
            enemy.hp = enemyNewHp
            player.hp = playerNewHp + 50;
            player.items.push(enemy.item)
        } else if (playerNewHp <= 0 && enemyNewHp > 0) {
            console.log(`${player.name}, sorry, ${enemy.name} has wounded you with ${enemyDamage} and killed you. Game over...`)
            player.hp = playerNewHp
        } else if (playerNewHp <= 0 && enemyNewHp <= 0) {

            const lifeOrDeath = randomSelector(3)
            if (lifeOrDeath === 0) {
                console.log(`Oops! Both you and ${enemy.name} struck at the same time and killed each other! Better luck next time!`)
                player.hp = playerNewHp
            } else {
                console.log(`Well, well, well....${player.name}, you got lucky this time with the first hit of ${playerDamage} and killed ${enemy.name}. However, because it was such a close call, you will only earn 50 extra hp along with ${enemy.item}.`)
                enemy.hp = enemyNewHp
                player.hp = playerHealthPoints + 50
                player.items.push(enemy.item)
            }
        }
}

function run(enemy) {
    let escapeChance = randomSelector(2)
    let enemyDamage = enemy.attackPower();

    let playerHealthPoints = player.hp
    let playerNewHp = playerHealthPoints - enemyDamage

    if (escapeChance === 0 && playerNewHp > 0) {
        console.log(`YAY! You escaped from ${enemy.name}...this time....`)
        isFighting = false;
    } else if (escapeChance === 1 && playerNewHp > 0) {
        console.log(`Oh bugger! You've been caught by the ${enemy.name} with ${enemy.item}. You have ${playerNewHp} hp remaining.`)
        player.hp = playerNewHp
    } else if (playerNewHp <= 0) {
        console.log(`Sorry ${player.name}, but the ${enemy.name} got the best of you with ${enemyDamage} and killed you...BYE....`)
        player.hp = playerNewHp
    }
}

function playGame() {
    while (player.hp > 0) {
        walk();
    }

    function walk() {
        const walking = readlineSync.question(`Enter "w" to walk: `)

        if (walking === 'w') {
            let chance = randomSelector(3)
            if (chance === 0) {
                let enemySelector = randomSelector(3)
                if (enemySelector === 0 && muppet.hp > 0) {
                    console.log(`It looks like a ${muppet.name} has popped up in your path!`)
                    attackOrRun(muppet);
                } else if (enemySelector === 1 && goblin.hp > 0) {
                    console.log(`It looks like the ${goblin.name} has magically appeared in front of you!`)
                    attackOrRun(goblin);
                } else if (enemySelector === 2 && troll.hp > 0) {
                    console.log(`It looks like a ${troll.name} is under the bridge!`)
                    attackOrRun(troll);
                } else if (enemySelector >= 0 && muppet.hp <= 0 && goblin.hp <= 0 &&  troll.hp <= 0) {
                    console.log(`YAAAAAS, ${player.name}! You've won!! You slayed the enemies and conquered all!!!`)
                    player.hp = 0
                }
            }
        } else if (walking === `info`) {
            console.log(player)
        } else if (walking != `info` && walking != `w`) {
            console.log(`Sorry, "${walking}" is not a valid entry. Please try again.`)
        }
    }
}

playGame()