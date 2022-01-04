const mongoose = require('mongoose')


const slotSchema = new mongoose.Schema({
    slotid: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    slottime:{
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Slot", slotSchema)