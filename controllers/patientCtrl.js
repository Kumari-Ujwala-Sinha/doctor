const Patient = require('../models/patientModel')



const patientCtrl = {
   
    createPatient:async(req, res) =>{
        try {

          const  {name, age, message, phone, branch, clinic, doctor,slot, date,department,doctorname,departmentname,gender,email} =req.body
          const newPatient = new Patient({name, age, message, phone, branch, clinic, doctor,slot, date, department,doctorname,email,
            departmentname,gender})
          await newPatient.save()
         res.json({msg:"patient successfully booked"})
 
         } catch (err) {
             return res.status(500).json({msg: err.message})
         }
    },
    getPatient:async(req, res) =>{
        try {
            const patients = await Patient.find().sort({"createdAt": -1})
            res.json(patients)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    filterpatient:async(req, res) =>{
        try {
            const patients = await Patient.find({doctor:req.params.doctorid}).sort({"createdAt": -1})
            res.json(patients)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

 
}


module.exports = patientCtrl