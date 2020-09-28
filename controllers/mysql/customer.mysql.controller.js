const customers = require('../../models/mysql/customer.mysql.model')

exports.fetch = (req,res,next) => {
        customer.findAll({})
.then(user =>{
    console.log(user)
res.send(user)
})
    .catch(err => console.log(err))
    }

    exports.fetchAll = (req,res,next) => {
        customer.findAll({})
        .then(user =>{console.log(user)
        res.send(user)})
            .catch(err =>console.log(err))
    }
    