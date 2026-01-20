const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('dashboard', {
        title : "Tableau de bord",
        user : req.user
    });
});

module.exports = router;