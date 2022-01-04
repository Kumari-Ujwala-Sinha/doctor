const mongoose = require('mongoose')


const doctorSchema = new mongoose.Schema({
    doctorid: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    doctorname:{
        type: String,
        required: true,
        trim: true,
    },
    clinic:{
        type:String
    },
    slots:{
        type:Array,
        default:[]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Doctor", doctorSchema)