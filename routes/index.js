var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { titles: 'Aziz' });
});

router.get('/helloworld', function (req, res) {
  res.render('helloworld', { title: 'Alpha 7 Shopping' });
});

/* GET Userlist page. */
router.get('/userlist', function (req, res) {
  var dbo = req.dbo;
  var collection = dbo.collection('usercollection');
  var query = {}

    collection.find(query).toArray(function(err, docs) {
    if (err) {
      console.log("Query Error");
    }
    console.log("=============================================================================="+docs[0].username);
    console.log(docs);
    
    res.render('userlist', {
      "userlist": docs
    });
  });

});

module.exports = router;
