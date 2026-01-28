/**
 * @file deleteUser.js
 * @module middlewares/delete/deleteUser
 * @description DELETE method for User
 */
const User = require('../../models/user');

/**
 * delete user data
 * @function deleteUser
 * @async
 * @param {import('express').Request} req - hold user id
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
const deleteUser = async function(req, res, next) {
    try {
        const id = req.body._id;

        await User.findByIdAndDelete(id);

        res.redirect('/users');
    } catch(e) {
        next(e);
    }
}

module.exports = deleteUser;