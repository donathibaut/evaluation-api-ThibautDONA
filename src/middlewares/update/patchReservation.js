/**
 * @file patchReservation.js
 * @module middlewares/update/patchReservation
 * @description PATCH method for Reservation
 */
const Reservation = require('../../models/reservation');

/**
 * update reservation data
 * @function patchReservation
 * @async
 * @param {import('express').Request} req - hold selected reservation data
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
const patchReservation = async function(req, res, next) {
    try {
        const id = req.body._id;

        await Reservation.findByIdAndUpdate(id, {
            catwayNumber : req.body.catwayNumber,
            clientName : req.body.clientName,
            boatName : req.body.boatName,
            startDate : new Date(req.body.startDate),
            endDate : new Date(req.body.endDate)
        }, {
            runValidators : true
        });

        res.redirect('/reservations');
    } catch(e) {
        next(e);
    }
}

module.exports = patchReservation;