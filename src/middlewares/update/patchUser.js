/**
 * @file patchUser.js
 * @module middlewares/update/patchUser
 * @description PATCH method for User
 */
const User = require('../../models/user');

/**
 * update user data
 * @function patchUser
 * @async
 * @param {Request} req - hold selected user data
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
const patchUser = async function(req, res, next) {
    try {
        const id = req.body._id;

        await User.findByIdAndUpdate(id, {
            name : req.body.name,
            firstname : req.body.firstname,
            email : req.body.email,
        }, {
            runValidators : true
        });

        res.redirect('/users');
    } catch(e) {
        next(e);
    }
}

module.exports = patchUser;