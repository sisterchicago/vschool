let form = document.travelForm
let submit = form.submit

function formAlert(event) {
    event.preventDefault()

    let firstName = form.firstName.value
    let lastName = form.lastName.value
    let age = form.age.value
    let gender = form.gender.value
    let city = form.city.value
    let diet = form.diet
    let dietArray = []
    //let dietList = document.getElementsByClassName("diet")
    for (let i = 0; i < diet.length; i++) {
        if (diet[i].checked === true) {
            dietArray.push(diet[i].value)
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nCity: " + city + "\nDiet: " + dietArray)
}

form.addEventListener("submit", formAlert)


