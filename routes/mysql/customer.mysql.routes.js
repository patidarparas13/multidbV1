
const express = require('express');
const router = express.Router();
const customerMysqlController = require('../../controllers/mysql/customer.mysql.controller')


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/api/mysql/fetch/:id', customerMysqlController.fetch);
  app.get('/api/mysql/fetch', customerMysqlController.fetchAll);
  app.post('/api/mysql/create', customerMysqlController.create);
  
};

//module.exports = router;