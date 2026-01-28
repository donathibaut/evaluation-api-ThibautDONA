/**
 * @file mongo.js
 * @module db/mongo
 * @description connection to MongoDB
 */
const mongoose = require('mongoose');

/**
 * get database information
 * @type {Object}
 * @property {string} dbName
 */
const clientOptions = {
    dbName : "russell-booking"
};

/**
 * initialise connection to the database
 * @async
 * @function initClientDbConnection
 * @returns {Promise<void>}
 * @throws {Error}
 */
exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGO, clientOptions);
        console.log("CONNECTION SUCCEEDED");
    } catch (e) {
        console.log("ERROR : connection to MongoDB failed !");
        console.log(e);
        throw e;
    };
};