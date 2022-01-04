const mongoose = require('mongoose')


const branchSchema = new mongoose.Schema({
    branchid: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    branchname:{
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Branch", branchSchema)