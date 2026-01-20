const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gestion du Port - Accueil' });
});

const service = require('../services/users');

// check the connection form
router.post('/connect', service.checkUserConnection, (req, res) => {res.redirect('/dashboard')});

module.exports = router;