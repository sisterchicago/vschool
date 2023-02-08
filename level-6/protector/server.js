const express = require('express')
const app = express()

// middleware (for every request) //
app.use(express.json()) // Looks for a requests body and turns it into 'req.body'

const users = [
    { user: 'die hard', password: 'action' },
    { user: 'die hard', password: 'action' },
    { user: 'die hard', password: 'action' },
    { user: 'die hard', password: 'action' }
]

// const users = [
//     {name: 'joe', age: '20'},
//     {name: 'joe', age: '20'},
//     {name: 'joe', age: '20'},
//     {name: 'joe', age: '20'},
//     {name: 'joe', age: '20'}
// ]


// app.get('/users', (req, res) => {
//     res.send(users)
// })

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    //console.log(req)
    const newUser = req.body //don't have to do this
    //newUser._id = uuid4()
    users.push(req.body)
    res.send(`${newUser.user} added to database`)
})



app.listen(9000, () => {
    console.log('The server is running on port 9000')
})