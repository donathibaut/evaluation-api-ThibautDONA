const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { 
    error : req.query.error
  });
});

const service = require('../services/users');

// check the connection form
router.post('/connect', service.checkUserConnection, (req, res) => {res.redirect('/dashboard')});

// follow logout <a>
router.get('/logout', function(req, res) {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;