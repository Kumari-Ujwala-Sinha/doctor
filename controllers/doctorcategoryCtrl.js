const Doctor = require('../models/doctorModel')
const Department = require('../models/departmentModel')

const doctorcategoryCtrl = {
    getDoctorbyid: async(req, res) =>{
        try {
            const doctor = await Doctor.find({_id:req.params.id})
            res.json(doctor)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
       
  
}


module.exports = doctorcategoryCtrl