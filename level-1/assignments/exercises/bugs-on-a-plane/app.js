let form = document.airlineForm;
let submit = form.submit;

function formAlert(event) {
    event.preventDefault()
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let location = form.travelLocation.value;
    let diet = [];
    let dietList = document.getElementsByClassName("diet")
    for (let i = 0; i < dietList.length; i++) {
        if (dietList[i].checked) {
        diet.push(" " + dietList[i].value)
        }
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


form.addEventListener("submit", formAlert);
