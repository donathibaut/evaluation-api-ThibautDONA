/**
 * @file postReservation.js
 * @module middlewares/create/postReservation
 * @description POST method for Reservation
 */
const Reservation = require("../../models/reservation");

/**
 * create reservation data
 * @function postReservation
 * @async
 * @param {Request} req - hold selected reservation data
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
const postReservation = async function(req, res, next) {
    try {
        const {catwayNumber, clientName, boatName, startDate, endDate} = req.body;

        const newReservation = new Reservation({
            catwayNumber,
            clientName,
            boatName,
            startDate : new Date(startDate),
            endDate : new Date(endDate)
        });

        await newReservation.save();

        res.redirect('/reservations');
    } catch(e) {
        next(e);
    }
}

module.exports = postReservation;