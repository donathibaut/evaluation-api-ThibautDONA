/**
 * @file deleteReservation.js
 * @module middlewares/delete/deleteReservation
 * @description DELETE method for Reservation
 */
const Reservation = require('../../models/reservation');

/**
 * delete reservation data
 * @function deleteReservation
 * @async
 * @param {Request} req - hold reservation id
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
const deleteReservation = async function(req, res, next) {
    try {
        const id = req.body._id;

        await Reservation.findByIdAndDelete(id);

        res.redirect('/reservations');
    } catch(e) {
        next(e);
    }
}

module.exports = deleteReservation;