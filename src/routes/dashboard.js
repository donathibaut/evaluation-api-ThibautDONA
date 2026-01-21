const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('dashboard', {
        user : req.user
    });
});

module.exports = router;