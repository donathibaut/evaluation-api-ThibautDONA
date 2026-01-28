/**
 * refer to reservation data
 * @file reservations.js
 */
const express = require('express');
const router = express.Router();
const Reservation = require('../../models/reservation');
const listDate = require('../../utils/list-date');

/**
 * render the list of reservations page
 * @function get
 */
/**
 * @openapi
 * /reservations:
 *   get: 
 *     summary: Render the Page
 *     description: Display and sort reservations (decreasing order)
 *     responses:
 *       200:
 *         description: Page loaded
 */
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

/**
 * fetch data
 * @function get
 */
/**
 * @openapi
 * /reservations/api/{id}:
 *   get: 
 *     summary: Fetch
 *     description: Fetch data (javascripts/module/fetch-data.js)
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Fetched
 */
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

/**
 * create-reservation form page
 * @function get
 */
/**
 * @openapi
 * /reservations/create-reservation:
 *   get: 
 *     summary: Render create-reservation
 *     description: Render the Page
 *     responses:
 *       200:
 *         description: Fetched
 */
router.get('/create-reservation', async function(req, res, next) {
    try {
        res.render('lists/create/create-reservation');
    } catch(e) {
        next(e);
    }
});

/**
 * create new data
 * @function post
 */
/**
 * @openapi
 * /reservations/add-reservation:
 *   post: 
 *     summary: Create new data
 *     description: Create new reservations
 *     responses:
 *       200:
 *         description: Page loaded
 */
const postReservation = require('../../middlewares/create/postReservation');
router.post('/add-reservation', postReservation);

/**
 * patch data
 * @function patch
 */
/**
 * @openapi
 * /reservations/patch-reservation:
 *   patch: 
 *     summary: Patch data
 *     description: Update reservations data
 *     responses:
 *       200:
 *         description: Page loaded
 */
const patchReservation = require('../../middlewares/update/patchReservation');
router.patch('/patch-reservation', patchReservation);

/**
 * delete data
 * @function delete
 */
/**
 * @openapi
 * /reservations/delete-reservation:
 *   delete: 
 *     summary: Delete data
 *     description: Delete reservations data
 *     responses:
 *       200:
 *         description: Page loaded
 */
const deleteReservation = require('../../middlewares/delete/deleteReservation');
router.delete('/delete-reservation', deleteReservation);

module.exports = router;