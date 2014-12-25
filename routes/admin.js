var express = require('express');
var path = require('path');
var router = express.Router();
// app.use('/', express.static(__dirname + '/webadmin'));
/* GET home page. */
router.get('/', function(req, res){
  res.sendfile('webadmin/index.html');
});

module.exports = router;
