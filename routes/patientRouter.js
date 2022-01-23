const router = require('express').Router()
const patientCtrl = require('../controllers/patientCtrl')
const usermail = require('../middleware/usermail')
const increament = require('../middleware/increament')
const oldpatient = require('../middleware/oldpatient')
const oldpatientmail = require('../middleware/oldpatientmail')



router.route('/patient')
    .get(patientCtrl.getPatient)
    .post(increament, usermail, patientCtrl.createPatient)
    
router.route('/oldpatient')
    .post(oldpatient,oldpatientmail,  patientCtrl.bookoldpatient)
    
router.route('/patient/:doctorid')
    .get(patientCtrl.filterpatient)    

module.exports = router