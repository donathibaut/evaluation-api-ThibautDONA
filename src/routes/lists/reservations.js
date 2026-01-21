const express = require('express');
const router = express.Router();
const Reservation = require('../../models/reservation');
const listDate = require('../../utils/listDate');

router.get('/', async function(req, res, next) {
    try {
        const reservations = await Reservation.find().sort({createdAt : -1});

        res.render('lists/reservations', {
            reservations : reservations,

            listDate : listDate
        });
    } catch(e) {
        next(e);
    }
});

module.exports = router;