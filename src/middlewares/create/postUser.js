/**
 * @file postUser.js
 * @module middlewares/create/postUser
 * @description POST method for User
 */
const User = require("../../models/user");

/**
 * create user data
 * @function postUser
 * @async
 * @param {import('express').Request} req - hold selected user data
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
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