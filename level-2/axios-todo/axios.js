//const axios = require("axios");
getData();

let form = document.todoform;
const addBtn = document.getElementById("addButton")
addBtn.addEventListener("click", handleAddButtonClick);
let inputTitle = document.getElementById("title");
let inputImage = document.getElementById("imgUrl");
let inputPrice = document.getElementById("price");
let inputDescription = document.getElementById("description");

function getData() {
    axios
        .get("https://api.vschool.io/natalietaylor/todo")
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                createTodo(res.data[i]);
            }
        })
        .catch((err) => console.log(err));
}

function createTodo(todo) {
    const todoList = document.getElementById("newTodoList");
    const todoListItem = createTodoListItem(todo["_id"]);

    todoList.appendChild(todoListItem);
    todoListItem.appendChild(addTitle(todo.title));
    todoListItem.appendChild(addImage(todo.imgUrl));
    todoListItem.appendChild(addPrice(todo.price));
    todoListItem.appendChild(addDescription(todo.description));
    todoListItem.appendChild(addCheckbox(todo["_id"]));
    todoListItem.appendChild(addEditBtn());
    todoListItem.appendChild(addDeleteBtn());
}

function createTodoListItem(id) {
    const container = document.createElement("li");
    container.setAttribute("class", "newList");
    container.setAttribute("id", id);
    container.style.margin = "5px 5px";
    return container;
}

function addTitle(title) {
    const titleAdd = document.createElement("h1");
    titleAdd.setAttribute("id", "newTitle");
    titleAdd.textContent = "Item: " + title;
    return titleAdd;
}

function addPrice(price) {
    const priceAdd = document.createElement("h2");
    priceAdd.setAttribute("id", "newPrice");
    priceAdd.setAttribute("step", "0.01");
    priceAdd.textContent = "Price: $" + price;
    return priceAdd;
}

function addImage(imgUrl) {
    const imageAdd = document.createElement("img");
    imageAdd.setAttribute("class", "newImage");
    imageAdd.src = todo.imgUrl;
    return imageAdd;
}

function addDescription(description) {
    const descriptionAdd = document.createElement("h2");
    descriptionAdd.setAttribute("id", "newDescription");
    descriptionAdd.textContent = "Description: " + description;
    return descriptionAdd;
}

function addCheckbox(id) {
    const labelAdd = document.createElement("label");
    labelAdd.innerHTML = "Check";
    labelAdd.setAttribute("for", `checkbox-${id}`);
    const checkboxAdd = document.createElement("input");
    checkboxAdd.type = "checkbox";
    checkboxAdd.setAttribute("id", `checkbox-${id}`);
    checkboxAdd.addEventListener("click", handleCheckboxClick);
    labelAdd.appendChild(checkboxAdd);
    return labelAdd;
}

function addDeleteBtn(id) {
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.setAttribute("id", `delete-${id}`);
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", deleteButtonHandler);
    return deleteButton;
}

function addEditButton(id) {
    const editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.setAttribute("id", `edit-${id}`);
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", editButtonHandler);
    return editButton;
}

function deleteButtonHandler(event) {
    const container = event.target.parentNode;
    const todoList = container.parentNode;
    todoList.removeChild(container);
    const itemId = container.id;
    axios
        .delete(`https://api.vschool.io/natalietaylor/todo/${itemId}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
}

function editButtonHandler(event) {
    const editButton = event.target
    const container = editButton.parentNode;
        if (editButton.textContent === "Edit") {
            const h1 = container.firstElementChild;
            const input = document.createElement("input");
            input.type = "text";
            input.value = h1.textContent;
            container.insertBefore(input, h1);
            container.removeChild(h1);
            editButton.textContent = "Save";
        } else if (editButton.textContent === "Save") {
            const newInput = container.firstElementChild;
            const newTitle = document.createElement("h1");
            newTitle.textContent = newInput.value;
            newTitle.setAttribute("id", "newTitle");
            container.insertBefore(newTitle, newInput);
            container.removeChild(newInput);
            editButton.textContent = "Edit";
            const itemId = todo["_id"];
            const editedTodo = {
                title: newInput.value,

            };
            axios
                .put(`https://api.vschool.io/natalietaylor/todo/${itemId}, editedTodo`)
                .then((response) => console.log(response.data))
                .catch((error) => console.log(error));
        }
    
}

function handleCheckboxClick(e) {
    const selected = e.target;
    const todoItemNode = selected.parentNode.parentNode;
    const itemId = todo["_id"];
        if (selected.checked) {
            todoItemNode.style.opacity = "0.5";
            const itemUnChecked = {
                completed: true
            }
           axios
            .put(`https://api.vschool.io/natalietaylor/todo/${itemID}`, itemUnChecked)
            .then(response => console.log(response.data))
            .catch(error => console.log(error)) 
        } else {
            todoItemNode.style.opacity = "1";
            document.querySelector(".newList").style.opacity = "1";
            const itemUnchecked = {
                completed: false
            }
            axios
             .put(`https://api.vschool.io/natalietaylor/todo/${itemID}`, itemUnChecked)
             .then(response => console.log(response.data))
             .catch(error => console.log(error))
        }

}

function handleAddButtonClick(e) {
    e.preventDefault();
    inputTitle = document.querySelector(".listItems #title");
    inputPrice = document.querySelector(".listItems #price");
    inputImage = document.querySelector(".listItems #imgUrl");
    inputDescription = document.querySelector(".listItems #description");
    const newTodo = {
        title: inputTitle.value,
        price: parseFloat(inputPrice.value),
        imgUrl: inputImage.value,
        description: inputDescription.value,
    };
    console.log(newTodo);
    inputTitle.value = "";
    inputPrice.value = "";
    inputImage.value = "";
    inputDescription.value = "";

    axios
     .post("https://api.vschool.io/natalietaylor/todo", newTodo)
     .then((res) => {
        createTodo(res.data)
    })
     .catch((err) => console.log(err));
}

