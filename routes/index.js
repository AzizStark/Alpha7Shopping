var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.islogged === true) {
   // res.render('index', { titles: 'Aziz' });
   res.render('dashboard', { user: req.session.loggeduser });
  }
  else {
    res.redirect('/login')
  }
});


router.get('/signup', function (req, res) {
  res.render('signup', { title: 'Alpha 7 Shopping' });
});


router.get('/signout', function (req, res) {
  req.session.islogged = false;
  req.logout();
  req.session = null;
  res.redirect('/');
  res.send("Signed out Successfully.");
});

router.get('/login', function (req, res) {
  res.render('login', { title: 'Alpha 7 Shopping' });
});

router.get('/dashboard', function (req, res) {
  if (req.session.islogged === true) {
    res.render('dashboard', { user: req.session.loggeduser });
  }
  else{
    res.redirect('/login')
  }
});


router.get('/session', function (req, res) {
  if (req.session.page_views) {
    req.session.page_views++;
    if (req.session.page_views === 7) {
      res.redirect('/userlist');
    }
    else {
      res.send("You visited this page " + req.session.page_views + " times")
    }
  } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
  }
});

/* GET Userlist page. */

router.get('/userlist', function (req, res) {
  var dbo = req.dbo;
  var collection = dbo.collection('usercollection');
  var query = {}

  collection.find(query).toArray(function (err, docs) {
    if (err) {
      console.log("Query Error");
    }
    console.log("==============================================================================" + docs[0].username);
    console.log(docs);

    res.render('userlist', {
      "userlist": docs
    });
  });

});




router.post('/userlogin', function (req, res) {

  // Set our internal DB variable
  var dbo = req.dbo;

  // Get our form values. These rely on the "name" attributes
  var userMail = req.body.usermail;
  var userPass = req.body.password;

  // Set our collection
  var collection = dbo.collection('usercollection');

  // Submit to the DB
  collection.find({ email: userMail }).toArray(function (err, pass) {
    if (err) {
      console.log("An error has Occured");
    }
    else {
      if (pass[0] ===
        undefined) {
        console.log("Invalid Credentials")
      }
      else if (pass[0].password === userPass) {
        console.log(pass[0].password);
        req.session.islogged = true;
        req.session.loggeduser = pass[0].username;
        req.session.loggedpass = userPass;
        res.redirect("/dashboard");
      }
    }
  });
});




router.post('/adduser', function (req, res) {

  // Set our internal DB variable
  var dbo = req.dbo;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;
  var userPass = req.body.password;
  // Set our collection
  var collection = dbo.collection('usercollection');

  // Submit to the DB
  collection.insert({
    "username": userName,
    "email": userEmail,
    "password": userPass
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      req.session.islogged = true;
      req.session.loggeduser = userName;
      req.session.loggedpass = userPass;
      res.redirect("/dashboard");
    }
  });
});



module.exports = router;
