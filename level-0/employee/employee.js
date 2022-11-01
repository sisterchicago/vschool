let employees = []

function Employee(name, title, salary, status){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}

let susan = new Employee("Susan Williams", "developer", "$80,000", "Full Time")
let bob = new Employee("Bob Jones", "UX/UI", "$75,000", "Full Time")
let brent = new Employee("Brent Taylor", "Full Stack", "$40,000", "Part Time")

employees.push(susan, bob, brent)

Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name}, Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`)
}

susan.printEmployeeForm()
bob.printEmployeeForm()
brent.printEmployeeForm()

console.log(employees)