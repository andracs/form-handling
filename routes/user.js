var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Gå væk.")
});

/* POST home page. */
router.post('/', function(req, res, next) {
    // Login håndtæring
    if ((req.body.username =="Lars") && (req.body.password == "X")) {
    res.send("Du har ramt login, " + req.body.username + " / " + req.body.password)
    }
    else {
        res.send("Ingen adgang")
    }
  });

module.exports = router;
