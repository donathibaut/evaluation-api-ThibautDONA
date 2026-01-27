const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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