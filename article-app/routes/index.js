var express = require('express');
var router = express.Router();
var Post = require('../models/Post');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Article App' });
});
 
router.post('/save', function(req, res) {
  // The data coming from the client is situated in the "req" object
  // We can send or render data to the client using "res" object
 
  // the data we got from the client will be in the req.body
  // we also have properties of req like req.params and req.query
  var data = req.body;
 
  // lets create one document with requested data in the Post collection
  // We alredy included the Post collection's model in the Top 
  // I am talking about this line -> var Post = require('../models/Post');
 
  var post = new Post(data);
 
  // Lets save the post
  post.save(function(err) {
    // If any error happens while saving,
    // we will return saying an error message
      if (err) {
        return res.json({
        error: true,
        message: "Unable to save the post",
        err: err
      });
    }
 
    // otherwise perfectly saved
 
    res.json({
      error: false,
      message: "Article Saved"
    });
    
  })
 
});
module.exports = router;
