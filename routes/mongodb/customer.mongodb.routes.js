
const express = require('express');
const router = express.Router();
const customerMongodbController = require('../../controllers/mongodb/customer.mongodb.controller')


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/api/mongodb/fetch/:id', customerMongodbController.fetch);
  app.get('/api/mongodb/fetchAll', customerMongodbController.fetchAll);
  app.post('/api/mongodb/create', customerMongodbController.create);
  
};

//module.exports = router;