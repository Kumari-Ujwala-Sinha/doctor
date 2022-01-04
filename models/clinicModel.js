const mongoose = require('mongoose')


const clinicSchema = new mongoose.Schema({
    clinicid: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    clinicname:{
        type: String,
        required: true,
        trim: true,
    },
    branch:{
        type:String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Clinic", clinicSchema)