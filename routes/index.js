var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

//MongoDB Connection - Test Database
var url = 'mongodb://localhost:27017/test';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function (res, req, next) {
  mongo.connect(url, function(){

  });
});

router.post('/insert', function (req, res, next) {
  var item = {
    titulo: req.body.titulo,
    empresa: req.body.empresa,
    subalterno: req.body.subalterno
  };
  mongo.connect(url, function(error, db) {
    assert.equal(null, error);
    db.collection('user-data').insertOne(item, function(error) {
      assert.equal(null, error);
      console.log('Item inserted');
      db.close();
    });
  });
  res.redirect('/');
});

router.post('/update', function (res, req, next) {
  
});

router.post('/delete', function (res, req, next) {
  
});

module.exports = router;
