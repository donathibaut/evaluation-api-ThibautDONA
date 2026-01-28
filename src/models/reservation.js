/**
 * @file reservation.js
 * @module models/reservation
 * @description Reservation model
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Reservation Schema
 * @typedef {Object} Reservation
 * @property {number} catwayNumber - required
 * @property {string} clientName -required
 * @property {string} boatName - required
 * @property {Date} startDate -required
 * @property {Date} endDate -required
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
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
        type : Date, 
        required : [true, "Date required"]
    },
    endDate : {
        type : Date, 
        required : [true, "Date required"]
    }
}, {
    // add createdAt et updatedAt in the database
    timestamps : true
});

module.exports = mongoose.model('Reservation', reservationSchema);