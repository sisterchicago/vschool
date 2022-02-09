
// Using the api https://api.vschool.io/natalietaylor/todo this will Javascript
// will Get (receive), Post (add), Put (update), and Delete the my todo list

const todoList = document.getElementById('todoList')

// This will Get the information from the api

// axios.get("https://api.vschool.io/natalietaylor/todo")
//     .then(response => console.log(response.data))

function getData() {
    axios.get("https://api.vschool.io/natalietaylor/todo")
    .then(response => {console.log(response.data)
        clearList()
        todoReceived(response)})
    .catch(error => console.log(error))
}

getData()


function todoReceived(response) {
    // This loops through each todo on the api
    for (let i = 0; i < response.data.length; i++) {

    // This assigns each object item to a variable
    const todoTitle = response.data[i].title
    const todoDescrip = response.data[i].description
    const todoImg = response.data[i].imgUrl
    const todoTime = response.data[i].time
    const isComplete = response.data[i].completed
    const _id = response.data[i]._id

    // This creates an html element for the data to reside in and adds a className for styling

    // Creates the list item
    const listItem = document.createElement(`div`)
    listItem.classList.add('listItem')

    // Creates the list title
    const listTitle = document.createElement(`h2`)
    listTitle.classList.add('listTitle')
    
    // Creates the list Decription
    const listDescrip = document.createElement(`h3`)
    listDescrip.classList.add('listDescrip')

    //Creates the list Time
    const listTime = document.createElement('h3')
    listTime.classList.add('listTime')
    
    // Creates the list Image
    const listImg = document.createElement(`img`)
    listImg.classList.add('listImg')
    
    // Creates the Complete Label
    const completedLabel = document.createElement('span')
    completedLabel.textContent = 'Complete'
    completedLabel.classList.add('completedLabel')
    // Creates the Completed Checkbox
    const completed = document.createElement('input')
    completed.type = `checkbox`
    completed.name = `isComplete`
    completed.classList.add(`completedCheck`)

    // This allows the user to mark the items as complete and updates the api
    // This creates an event listener for the checkbox
    completed.addEventListener('change', function(e) {
        if (completed.checked === true) {
            axios.put(`https://api.vschool.io/natalietaylor/todo/${_id}`, {completed: true})
                .then(response => getData())
                .catch(error => console.log(error))
        } else {
            axios.put(`https://api.vschool.io/natalietaylort/todo/${_id}`, {completed: false})
                .then(response => getData())
                .catch(error => console.log(error))
        }
    })

    // Creates the Delete Button
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete Item'
    deleteButton.classList.add('deleteButton')

    // This allows the user to delete an item from the list
    deleteButton.addEventListener('click', function(){
        axios.delete(`https://api.vschool.io/natalietaylor/todo/${_id}`)
            .then(response => getData())
            .catch(error => console.log(error))
        
    })

    // This strikes through the task if complete
    if (isComplete === true) {
        completed.checked = true
        listTitle.classList.add('completed')
        listDescrip.classList.add('completed')
    }

    // This assigns the elements their text
    listTitle.textContent = todoTitle
    listDescrip.textContent = todoDescrip
    listTime.textContent = todoTime
    listImg.src = todoImg

    //This appends the new data to the todo list div
    const documentFragment = document.createDocumentFragment()
    documentFragment.appendChild(listItem)
    listItem.appendChild(listTitle)
    listItem.appendChild(listDescrip)
    listItem.appendChild(listTime)
    listItem.appendChild(listImg)
    listItem.appendChild(completedLabel)
    listItem.appendChild(completed)
    listItem.appendChild(deleteButton)
    todoList.appendChild(documentFragment)
    }
}

// This allows the user to add a todo to the list and is asynchronous

const todoForm = document.todoForm

todoForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const newTodo = {
        completed: false,
        title: todoForm.title.value,
        description: todoForm.description.value,
        time: todoForm.time.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/natalietaylor/todo", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))

    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.time.value = ""
    todoForm.imgUrl.value = ""

})

// This function clears my list so the user doesn't have to refresh

function clearList() {
    while(todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }

}