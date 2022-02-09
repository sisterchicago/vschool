const form = document.baddies
const result = document.getElementById(`results`)

form.addEventListener('submit', function(event){
    event.preventDefault();

    const goomsTotal = form.numOfGooms.value * 5
    const bobTotal = form.numOfBobs.value * 7
    const cheepTotal = form.numOfCheeps.value * 11

    const combinedTotal = goomsTotal + bobTotal + cheepTotal

    const combinedTotalCoins = document.createElement(`p`)
    combinedTotal.textContent = combinedTotal + " coins"
    document.getElementById(`results`).append(combinedTotal)
    
})