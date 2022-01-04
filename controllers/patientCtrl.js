const Patient = require('../models/patientModel')
const Docappoin = require('../models/dappointmentModel')
const Doctor = require('../models/doctorModel')


const patientCtrl = {
    getSlotbydate: async(req, res) =>{
        try {

           const doctorSlot=await Doctor.findById(req.query.doctorId)
           const Slotondate = await Docappoin.findOne({doctor:req.query.doctorId, date:req.query.date})
           
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
          const dateavail =await Docappoin.findOne({doctor:doctor, date:date})
          if (dateavail){
              dateavail.slots.push(slot)
          }else{
              const newdocappoin =new Docappoin.findOne({doctor:doctor, date:date, slots:slots.push(slot)})
              await newdocappoin.save()
          }
 res.json({msg:"patient successfully booked"})
 
         } catch (err) {
             return res.status(500).json({msg: err.message})
         }
    }

 
}


module.exports = patientCtrl