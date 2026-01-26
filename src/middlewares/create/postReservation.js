const Reservation = require("../../models/reservation");

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