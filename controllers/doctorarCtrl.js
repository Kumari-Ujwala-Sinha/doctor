const Doctorar = require('../models/doctorarModel')


const doctorarCtrl = {
    getdoctors: async(req, res) =>{
        try {
            const doctors = await Doctorar.find()
            res.json(doctors)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createdoctor: async (req, res) =>{
        try {
            
            const {doctorname, slots,department} = req.body;
            

            const newdoctor = new Doctorar({doctorname, slots,department})

            await newdoctor.save()
            res.json({msg: "Created a doctor"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
       
  
}


module.exports = doctorarCtrl