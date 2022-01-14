const Departmentar = require('../models/departmentarModel')


const departmentarCtrl = {
    getDepartments: async(req, res) =>{
        try {
            const departments = await Departmentar.find()
            res.json(departments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createDepartment: async (req, res) =>{
        try {
            
            const {label, value} = req.body;
            

            const newDepartment = new Departmentar({label, value})

            await newDepartment.save()
            res.json({msg: "Created a department"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
       
  
}


module.exports = departmentarCtrl