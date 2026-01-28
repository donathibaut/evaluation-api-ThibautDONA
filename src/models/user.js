/**
 * @file user.js
 * @module models/user
 * @description User model
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

/**
 * User Schema
 * @typedef {Object} User
 * @property {string} name - required
 * @property {string} firstname -required
 * @property {string} email - required
 * @property {string} password -required
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
const userSchema = new Schema({
    name : {
        type : String,
        trim : true,
        required : [true, "Name required"]
    },
    firstname : {
        type : String,
        trim : true,
        required : [true, "Firstname required"]
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
        minLength : [8, "8 characters, at least"],
        required : [true, "Password required"]
    }
}, {
    // add createdAt & updatedAt in the database
    timestamps : true
});

/**
 * hash the password only when modified
 * @function
 * @async
 */
userSchema.pre('save', async function() {
    if(!this.isModified('password')) {
        return;
    };
    try {
        this.password = await bcrypt.hash(this.password, 10);
    } catch(e) {
        throw e;
    }
});

module.exports = mongoose.model('User', userSchema);