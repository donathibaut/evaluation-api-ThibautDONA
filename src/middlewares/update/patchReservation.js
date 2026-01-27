const Reservation = require('../../models/reservation');

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