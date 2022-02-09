var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var numComputers = 0;

for(let i = 0; i < officeItems.length; i++){
    let item = officeItems[i];
    if (item === "computer") {
        numComputers++;
    }
}

console.log(numComputers++)

var ratedR = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(let i = 0; i < ratedR.length; i++){
    let personAge = ratedR[i];
    if (personAge >= 18){
        console.log(ratedR.name + " is old enough to see Mad Max");
  }
    else {
        console.log(ratedR.name + " is NOT old enough to see Mad Max");
    }
} 
  