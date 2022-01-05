const mongoose = require('mongoose')


const doctorSchema = new mongoose.Schema({
    
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