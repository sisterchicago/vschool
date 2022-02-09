const addform = document.add 

addform.addEventListener("submit", function(event){
    event.preventDefault()

    const num1 = addform.add1.value
    const num2 = addform.add2.value
    addform.add1.value = ""
    addform.add2.value = ""

    const result = document.createElement(`h4`)

    result.textContent = Number(num1) + Number(num2)

    addition.append(result)
})

const subform = document.subtract

subform.addEventListener("submit", function(event){
    event.preventDefault()

    const num1 = subform.sub1.value
    const num2 = subform.sub2.value
    subform.sub1.value = ""
    subform.sub2.value = ""

    const result = document.createElement(`h4`)

    result.textContent = Number(num1) - Number(num2)

    subtraction.append(result)
})

const multform = document.multiply

multform.addEventListener("submit", function(event){
    event.preventDefault()

    const num1 = multform.mult1.value
    const num2 = multform.mult2.value
    multform.mult1.value = ""
    multform.mult2.value = ""

    const result = document.createElement(`h4`)

    result.textContent = Number(num1) * Number(num2)

    multiplication.append(result)
})