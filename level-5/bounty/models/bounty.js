const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    // age: {
    //     type: Number,
    //     required: true
    // }
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    force: {
        type: String,
        enum: ['jedi', 'sith']
    }
})

module.exports = mongoose.model("Bounty", bountySchema)