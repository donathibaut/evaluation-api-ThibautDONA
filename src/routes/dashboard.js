const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const listDate = require('../utils/list-date');

router.get('/', async function(req, res, next) {
    try {
        const reservations = await Reservation.find().sort({createdAt : -1});

        res.render('dashboard', {
            user : req.user,
            reservations : reservations,

            listDate : listDate
        });
    } catch(e) {
        next(e);
    }
});

module.exports = router;