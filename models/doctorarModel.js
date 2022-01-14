const mongoose = require('mongoose')


const doctorarSchema = new mongoose.Schema({
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
       
    },
    availslot:{
        type:Array
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Doctorar", doctorarSchema)