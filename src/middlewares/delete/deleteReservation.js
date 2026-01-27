const Reservation = require('../../models/reservation');

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