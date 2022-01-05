const mongoose = require('mongoose')


const departmentSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    label:{
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Department", departmentSchema)