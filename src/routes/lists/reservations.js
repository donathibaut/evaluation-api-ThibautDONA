const express = require('express');
const router = express.Router();
const Reservation = require('../../models/reservation');
const listDate = require('../../utils/list-date');

router.get('/', async function(req, res, next) {
    try {
        // sort reservations (decreasing order)
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
    }
});

// create-reservation form page
router.get('/create-reservation', async function(req, res, next) {
    try {
        res.render('lists/create/create-reservation');
    } catch(e) {
        next(e);
    }
});

// create new data
const postReservation = require('../../middlewares/create/postReservation');
router.post('/add-reservation', postReservation);

// patch data
const patchReservation = require('../../middlewares/update/patchReservation');
router.patch('/patch-reservation', patchReservation);

// delete data
const deleteReservation = require('../../middlewares/delete/deleteReservation');
router.delete('/delete-reservation', deleteReservation);

module.exports = router;