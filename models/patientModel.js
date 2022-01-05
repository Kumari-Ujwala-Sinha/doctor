const mongoose = require('mongoose')


const patientSchema = new mongoose.Schema({
   
    name:{
        type: String,
        required: true,
       
    },
    age:{
        type:Number
    },
    message:{
        type:String
    },
    phone:{
        type:Number
    },
    branch:{
        type:String
    },
    clinic:{
        type:String
    },
    doctor:{
        type:String
    },
    department:{
        type:String
    },
    slot:{
        type:String
    },
    date:{
        type:String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Patient", patientSchema)