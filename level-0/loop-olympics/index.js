var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for(let i = 0; i <= 9; i++){
        console.log(numArray[i])
    }

    for(let i = numArray.length -1; i >= 0; i--){
        console.log(numArray[i])
    }

const fruit = ["banana", "orange", "apple", "kiwi"]

    for(let i = 0; i < fruit.length; i++){
        console.log(fruit[i])
    }

let arr = [];

arr.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    console.log(arr)

for(var x = 0; x<= 100; x++){
    if (x % 2 ===0){
        console.log(x)
    }
}

const newFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    function everyOther(array){
        var newArray = []
        for(let i = 0; i < array.length; i+= 2){
            newArray.push(array[i])
        }
        return newArray.join(", ")
    }
console.log(everyOther(newFruit))