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
    doctorname:{
        type:String
    },
      departmentname:{
        type:String
      },
      gender:{
        type:String
      },
      fileid:{
        type:String
      },
      patientid:{
        type:String
      },
      email:{
        type:String
      },
    date:{
        type:String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Patient", patientSchema)