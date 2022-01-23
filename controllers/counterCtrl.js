const Counter = require('../models/counterModel')




const counterCtrl = {
    getCounters: async(req, res) =>{
        try {
            const departments = await Departmentar.find()
            res.json(departments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCounter: async (req, res) =>{
        try {
            
            const {_id, seq} = req.body;
            

            const newDepartment = new Counter({_id, seq})

            await newDepartment.save()
            res.json({msg: "Created a counter"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
       
  
}


module.exports = counterCtrl