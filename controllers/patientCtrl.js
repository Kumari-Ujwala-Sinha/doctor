const Patient = require('../models/patientModel')
const Docappoin = require('../models/dappointmentModel')
const Doctor = require('../models/doctorModel')
const moment = require('moment')


const patientCtrl = {
    getSlotbydate: async(req, res) =>{
        try {
            
           const doctorSlot=await Doctor.findById(req.query.doctorId)
           const Slotondate = await Docappoin.findOne({doctor:req.query.doctorId, date:moment(req.query.date).format('DD-MM-YYYY')})
           
           if (Slotondate) {
            const doctSlot=doctorSlot.slots
            const Slotsondate = Slotondate.slots
            const avail =doctSlot.filter(item=>!Slotsondate.includes(item))
               return res.json({avail})
           }
           return res.json({avail:doctorSlot})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createPatient:async(req, res) =>{
        try {

          const  {name, age, message, phone, branch, clinic, doctor,slot, date} =req.body
          const newPatient = new Patient({name, age, message, phone, branch, clinic, doctor,slot, date})
          await newPatient.save()
         res.json({msg:"patient successfully booked"})
 
         } catch (err) {
             return res.status(500).json({msg: err.message})
         }
    },
    getPatient:async(req, res) =>{
        try {
            const patients = await Patient.find()
            res.json(patients)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

 
}


module.exports = patientCtrl