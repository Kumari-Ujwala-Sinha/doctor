const router = require('express').Router()
const departmentarCtrl = require('../controllers/departmentarCtrl')



router.route('/departmentar')
    .get(departmentarCtrl.getDepartments)
    .post(departmentarCtrl.createDepartment)
    

module.exports = router