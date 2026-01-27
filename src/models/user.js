const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const userSchema = new Schema({
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