// connection file to MongoDB
const mongoose = require('mongoose');

const clientOptions = {
    dbName : "russell-reservations"
};

exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGO, clientOptions);
        console.log("CONNECTION SUCCEED");
    } catch (e) {
        console.log("ERROR : connection to MongoDB failed !");
        console.log(e);
        throw e;
    };
};