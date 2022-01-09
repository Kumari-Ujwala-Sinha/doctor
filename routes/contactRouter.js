const router = require('express').Router()
const contactmail = require('../middleware/contactmail')
router.route('/postcontactmail')
    .post(contactmail)
    

module.exports = router