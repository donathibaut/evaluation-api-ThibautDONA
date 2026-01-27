const User = require("../../models/user");

const postUser = async function(req, res, next) {
    try {
        const {name, firstname, email, password} = req.body;

        const newUser = new User({
            name,
            firstname,
            email,
            password
        });

        await newUser.save();

        res.redirect('/users');
    } catch(e) {
        next(e);
    }
}

module.exports = postUser;