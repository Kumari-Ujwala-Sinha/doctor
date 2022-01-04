const mongoose = require('mongoose')


const docappoinSchema = new mongoose.Schema({
   
    date:{
        type: String,
        required: true,
       
    },
    doctor:{
        type:String
    },
    slots:{
        type:Array

    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Docappoin", docappoinSchema)