const router = require('express').Router()
const doctorarCtrl = require('../controllers/doctorarCtrl')



router.route('/doctorar')
    .get(doctorarCtrl.getdoctors)
    .post(doctorarCtrl.createdoctor)
    

module.exports = router