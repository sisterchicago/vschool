//1) Turn an array of numbers into a total of all the numbers

const nums = [1, 2, 3]

const result1 = nums.reduce(function(final, num){
    final += num
    return final
})

console.log(result1)

//2) Turn an array of numbers into a long string of all those numbers

const result2 = nums.reduce(function(final, num) {
    final = final.concat(num)
    return final
}, "")

console.log(result2)

// 3) Turn an array of voter objects into a count of how many people voted

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voteCount = voters.reduce(function(final, voter) {
    if (voter.voted === true) {
        final++
    }
    return final
}, 0)

console.log(voteCount)

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const shoppingSpree = wishlist.reduce(function(final, item) {
    final += item.price
    return final
}, 0)

console.log(shoppingSpree)

//5) Given an array of arrays, flatten them into a single array

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const flatten = arrays.reduce(function(final, array) {
    final = final.concat(array)
    return final
}, [])

console.log(flatten)

//6) Given an array of potential voters, return an object representing the results of the vote

const newVoters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterResults = newVoters.reduce(function(final, voter) {
    if (voter.age >= 18 && voter.age <= 25) {
        final.numYoungPeople++
    } else if (voter.age >= 26 && voter.age <= 35) {
        final.numMidsPeople++
    } else if (voter.age >= 36 && voter.age <= 55) {
        final.numOldsPeople++
    }
    if (voter.age >= 18 && voter.age <= 25 && voter.voted === true) {
        final.numYoungVotes++
    } else if (voter.age >= 26 && voter.age <= 35 && voter.voted === true) {
        final.numMidVotes++
    } else if (voter.age >= 36 && voter.age <= 55 && voter.voted ===true) {
        final.numOldVotes++
    }
    return final
}, {numYoungPeople: 0, numYoungVotes: 0, numMidsPeople: 0, numMidVotes: 0, numOldsPeople: 0, numOldVotes: 0})

console.log(voterResults)