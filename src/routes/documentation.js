const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    try {
        res.render('documentation');
    } catch(e) {
        next(e);
    }
});

module.exports = router;