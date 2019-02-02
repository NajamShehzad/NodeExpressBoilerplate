exports = module.exports = function(app, mongoose) {

    var express = require('express');
    var router = express.Router();

    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

    app.use('/', router);
  
}
  
  