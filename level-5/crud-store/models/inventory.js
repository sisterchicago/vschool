const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Movie Blueprint
const inventorySchema = new Schema({ 
    object: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)