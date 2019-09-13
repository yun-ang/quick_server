var express = require('express')

  app = express()

  bodyParser = require('body-parser');

  app.use(express.static('public'))

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({limit: '50mb'}));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  var routes = require('./route.js'); //importing route

  routes(app); //register the route
  port = process.env.PORT || 3030,

  app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
