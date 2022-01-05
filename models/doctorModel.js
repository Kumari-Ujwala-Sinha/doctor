const mongoose = require('mongoose')


const doctorSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        
    },
    label:{
        type: String,
        required: true,
       
    },
    doctorname:{
        type: String,
        required: true,
        
    },
    department:{
        type:Array
    },
    slots:{
        type:Array,
       
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Doctor", doctorSchema)