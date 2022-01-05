const router = require('express').Router()
const doctorCtrl = require('../controllers/doctorCtrl')



router.route('/doctor')
    .get(doctorCtrl.getdoctors)
    .post(doctorCtrl.createdoctor)
    

module.exports = router