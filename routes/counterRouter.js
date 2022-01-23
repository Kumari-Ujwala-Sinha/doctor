const router = require('express').Router()
const counterCtrl = require('../controllers/counterCtrl')



router.route('/counter')
    .post(counterCtrl.createCounter)
    

module.exports = router