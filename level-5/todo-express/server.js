const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')
uuidv4()

app.use(express.json())

const todos = [
    {
        name: "Bounty Hunter: Part 1",
        objective: "Using Express, create an API on the /bounty route that: 1. GETS a list of all the bounties  2. POSTs new bounties  3. DELETEs a bounty  4. PUTs (updates) a bounty",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Thing Finder",
        objective: "Choose a thing/noun of any kind, then write an express server with a GET route that sends back an array of that thing. Your GET endpoint should be able to check for any query parameters that may have been passed into the url of the request and filter the results based on those query parameters.",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Picked Off",
        objective: "Write an Express server to handle a GET request that returns an object (of any kind) as a response. Write a middleware function in a separate JS file that accepts the req, res, and next parameters, adds a property to the req, and allows the server to continue on with its normal operation. Pull that module into your main server code and set it up as middleware. Use Postman to make the GET request and test whether your middleware did its job.",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Bounty Hunter: Part 2",
        objective: "After learning about req.params, now add endpoints that allow you to: DELETE a bounty from the bounties array and PUT (update) an existing bounty. You'll need to pass the uuid you added when POSTing new bounties as a URL Paramater to the endpoint in order to have reference to the object you want to update or delete.",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Todo Backend",
        objective: "Create a simple Express Server that manages a list of todos. Create endpoints that: 1. allows new todo items to be posted to the array (when posting a new todo, you must generate a unique id for that todo (consider using the UUID npm package)),  2. returns the entire list of todos,  3. allows the user to update a todo by its _id, and  4. allows the user to delete a todo by its _id, and  5. allows the user to retrieve a single todo by its _id",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Bounty Hunter: Part 3",
        objective: "Client Setup: For this part you will have to set up a full stack React application. Since you do not have a database yet, ignore the /models folder contained in the example. You instead will have something like bountyData.js which contains your data. You will now build a client-side React interface for the server you created! Your app should be a CRUD application - it should be able to: 1. Create (POST) new bounties,  2. Read (GET) existing bounties and show them to the user of your site,  3. Update (PUT) existing bounties (e.g. if you wanted to up the price for a bounty), and  4. Destory (DELETE) bounties from the list of all bounties.",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Crud Store",
        objective: "Part 1: 1. Build a new server and connect it to mongodb.  2. In a folder called models create a file called inventory.js and define a InventorySchema for items in your store. Export an InventoryModel at the bottom.  Part 2: 1. Create a new folder called routes containing a file inventory.js  2. Create all the necessary routes to make a fully CRD application (GET, GET(one), POST, PUT, DELETE).  3. Populate your inventory using Postman. Be sure to test each endpoint.",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Bounty Hunting with Mongoose",
        objective: "Since you already have the routes set up and working (from the previous bounty hunter exercise), the first step is to create a date model. You can refer to this document if you need a refresher on how to use mongoose. Once the data model is created (preferably in a file separate from your routes) it's time to add mongoose queries to your routes. For example, when handling GET requests, use the find query to get a list of all the bounties: 1. Create a Model  2. Add MOngoose Queries to each request type in order to get the necessary information.",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Group Fullstack Project",
        objective: "Proposal: This part of the project is to help you narrow down your idea, clarify its parts and make it easier to start coding. The requirements are as follows.  1. Paragraph describing your app idea: What are you building? Who is it for?  2. An easily describable MVP: Remember you have a limited amount of time to develop this project. What is the minimum you can get done on this project to meet the requirements and get a product in someone's hand?  3. User Story: What is a user going to do when they go to your site from the time they hit the landing page? What features do they need and which are optional?  4. Mind Map: What is the structure of your backend and front app going to look like? What routes, models, components, actions, and reducers will I need?  Once you have these items, you need to post the proposal in the Level 5 channel and an instructor will give you the go ahead!",
        completed: false,
        _id: uuidv4()
    }
]

app.get("/todos", (req, res) => {
    console.log("get all todos")
    res.send(todos)
})

app.get("/todos/:todoId", (req, res) => {
    console.log("get single todo")
    const todoId = req.params.todoId 
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

app.post("/todos", (req, res) => {
    console.log("post request")
    const newTodo = req.body 
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send("WTG! You added a new todo!")
})

app.put("/todos/:todoId", (req, res) => {
    console.log("put request")
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

app.delete("/todos/:todoId", (req, res) => {
    console.log("delete request")
    const todoId = req.params.todoId 
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("YAY! You deleted your todo item!")
})

app.listen(8750, () => {
    console.log("The server is running on Port 8750")
})