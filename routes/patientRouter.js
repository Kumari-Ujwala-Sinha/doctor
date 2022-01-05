const router = require('express').Router()
const patientCtrl = require('../controllers/patientCtrl')



router.route('/patient')
    .get(patientCtrl.getPatient)
    .post(patientCtrl.createPatient)
    

module.exports = router