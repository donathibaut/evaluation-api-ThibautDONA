const express = require('express');
const router = express.Router();
const Reservation = require('../../models/reservation');
const listDate = require('../../utils/list-date');

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

// fetch data (javascripts/module/fetch-data.js)
router.get('/api/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const reservation = await Reservation.findById(id);

        if(!reservation) {
            console.error("ERROR : NO API !");
        }

        res.json(reservation);
    } catch(e) {
        next(e);
    };
});

module.exports = router;