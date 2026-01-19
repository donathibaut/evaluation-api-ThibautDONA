const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const User = new Schema({
    name : {
        type : String,
        trim : true,
        required : [true, "Name required"]
    },
    firstname : {
        type : String,
        trim : true
    },
    email : {
        type : String,
        trim : true,
        required : [true, "Email address required"],
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        trim : true,
        required : [true, "Password required"]
    }
}, {
    // add createdAt & updatedAt in the database
    timestamps : true
});

// hash the password only when modified
User.pre('save', function() {
    if(!this.isModified('password')) {
        return
    };
    this.password = bcrypt.hashSync(this.password, 10);
});

module.exports = mongoose.model('User', User);