const router = require('express').Router()
const patientCtrl = require('../controllers/patientCtrl')
const usermail = require('../middleware/usermail')



router.route('/patient')
    .get(patientCtrl.getPatient)
    .post(usermail,patientCtrl.createPatient)
    

module.exports = router