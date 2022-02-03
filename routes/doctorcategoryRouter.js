const router = require('express').Router()
const doctorcategoryCtrl = require('../controllers/doctorcategoryCtrl')

router.route('/doctor/:id')
    .get(doctorcategoryCtrl.getDoctorbyid)    

module.exports = router