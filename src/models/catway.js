/**
 * @file catway.js
 * @module models/catway
 * @description Catway model
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Catway Schema
 * @typedef {Object} Catway
 * @property {number} catwayNumber - required
 * @property {string} catwayType -required
 * @property {string} catwayState - required
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
const catwaySchema = Schema({
    catwayNumber : {
        type : Number, 
        required : [true, "Number required"], 
        unique : true  
    },
    catwayType : {
        type : String, 
        required : [true, "Type required"], 
        enum : ["long", "short"], 
        lowercase : true,
        trim : true
    },
    catwayState : {
        type : String, 
        required : [true, "Message required"],
        trim : true
    }
    }, {
    // add createdAt et updatedAt in the database
    timestamps : true
});

module.exports = mongoose.model('Catway', catwaySchema);