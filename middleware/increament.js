const Counter = require('../models/counterModel')

const increament = (req, res, next) => {
    try {
        Counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, {new: true}, function(error, counter)   {
            if(error)
                return next(error);
           req.counter=counter
           req.secretcode=Math.floor(100000 + Math.random() * 900000)
            next();})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = increament