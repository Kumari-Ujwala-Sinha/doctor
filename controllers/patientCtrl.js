const Patient = require('../models/patientModel')



const patientCtrl = {
   
    createPatient:async(req, res) =>{
        try {
            let fileid=`#File${req.counter.seq}`
            let patientid=req.secretcode
          const  {name, age, message, phone, branch, clinic, doctor,slot, date,department,doctorname,departmentname,gender,email} =req.body
          const newPatient = new Patient({fileid,patientid,name, age, message, phone, branch, clinic, doctor,slot, date, department,doctorname,email,
            departmentname,gender})
          await newPatient.save()
         res.json({msg:"patient successfully booked and mail sent with all details"})
 
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
    },
    bookoldpatient:async(req, res) =>{
        try {
            const  { message, branch, clinic, doctor,slot, date,department,doctorname,departmentname} =req.body
            const  {patientid,fileid,name, age,  phone,email,gender} =req.patient
            console.log(message, branch, clinic, doctor,slot, date,department,doctorname,departmentname,patientid,fileid,name, age,  phone,email,gender)
            
            const newPatient = new Patient({message, branch, clinic, doctor,slot, date,department,doctorname,departmentname,patientid,fileid,name, age,  phone,email,gender})
            await newPatient.save()
            res.json({msg:`patient successfully booked and mail sent with all details`}) 
        } catch (err) {
             return res.status(500).json({msg: err.message})
         }
    }

 
}


module.exports = patientCtrl