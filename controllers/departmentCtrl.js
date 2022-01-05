const Department = require('../models/departmentModel')


const departmentCtrl = {
    getDepartments: async(req, res) =>{
        try {
            const departments = await Department.find()
            res.json(departments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createDepartment: async (req, res) =>{
        try {
            
            const {label, value} = req.body;
            

            const newDepartment = new Department({label, value})

            await newDepartment.save()
            res.json({msg: "Created a department"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
       
  
}


module.exports = departmentCtrl