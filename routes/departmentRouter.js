const router = require('express').Router()
const departmentCtrl = require('../controllers/departmentCtrl')



router.route('/department')
    .get(departmentCtrl.getDepartments)
    .post(departmentCtrl.createDepartment)
    

module.exports = router