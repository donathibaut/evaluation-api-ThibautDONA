/**
 * refer to dashboard routes
 * @file dashboard.js
 */
const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const listDate = require('../utils/list-date');

/**
 * render the dashboard page
 * @function get
 */
/**
 * @openapi
 * /dashboard:
 *   get: 
 *     summary: Render the Dashboard
 *     description: Display the dashboard page with a nav to all of the options of the application
 *     responses:
 *       200:
 *         description: Page loaded
 */
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