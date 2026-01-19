const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = Schema({
    catwayNumber : {
        type : Number, 
        required : [true, "Number required"]
    },
    clientName : {
        type : String, 
        required : [true, "Name required"]
    },
    boatName : {
        type : String, 
        required : [true, "Name required"]
    },
    startDate : {
        type : String, 
        required : [true, "Date required"]
    },
    endDate : {
        type : String, 
        required : [true, "Date required"]
    }
}, {
    // add createdAt et updatedAt in the database
    timestamps : true
});

module.exports = mongoose.model('Reservation', reservationSchema);