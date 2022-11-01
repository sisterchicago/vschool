var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    let splitAlphabet = alphabet.toUpperCase().split("");
    let result = [];

    for(let i = 0; i < people.length; i++){
        let names = people[i];
        result.push(names)
        for(let j = 0; j < splitAlphabet.length; j++){
            result.push(splitAlphabet[j]);
        }
    }
    return result;
}
console.log(forception(people, alphabet));
