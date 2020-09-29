const customers = require('../../models/mysql/customer.mysql.model')

exports.fetch = (req,res,next) => {
        customers.findOne({id:req.params.id})
.then(user =>{
    console.log(user)
res.send(user)
})
    .catch(err => console.log(err))
    }

    
    exports.create = (req,res,next) => {
        customers.create(req.body)
        .then(customer => console.log("hey"))
        .then(user =>{console.log(user)
        res.send(user)})
            .catch(err =>console.log(err))
    }
    

    exports.fetchAll = (req,res,next) => {
        customers.findAll({})
        .then(user =>{console.log(user)
        res.send(user)})
            .catch(err =>console.log(err))
    }
    