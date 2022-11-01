const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')
uuidv4()

app.use(express.json())

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

app.get("./", (req, res) => {
    res.send(fruits)
})

app.get("/:itemType", (req,res) => {
    const typeArr = inventoryItems.filter(item => item.type === req.params.itemType)
    res.send(typeArr)
})

app.get("/search/name", (req,res) => {
    const name = req.query.name
    const filteredName = inventoryItems.filter(item => item.name === name)
    res.send(filteredName)
})

app.get("/search/price", (req,res) => {
    console.log(req.query)
    const priceMax = req.query.max
    const priceMin = req.query.min
    const maxMin = inventoryItems.filter(item => {item.price < priceMax && item.price > priceMin})
    res.send(maxMin)
})

app.listen(8900, () => {console.log("Server is running on 8900")})