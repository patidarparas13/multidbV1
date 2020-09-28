const customer = require('../../models/mongodb/customer.mongodb.model')

exports.fetch = (req,res,next) => {
    customer.findById(req.params.id)
    .then(customer => res.send(customer))
      .catch(err => res.status(404).json({ err}));
}

exports.create = (req,res,next) => {
  customer.create(req.body)
  .then(customer => res.send(customer))
    .catch(err => res.status(404).json({ err}));
}


exports.fetchAll = (req,res,next) => {
  customer.find({})
  .then(customer => console.log("hwy"))
  .then(customer => res.send(customer))
    .catch(err => res.status(404).json({ err}));
}
