/**
 * @file deleteCatway.js
 * @module middlewares/delete/deleteCatway
 * @description DELETE method for Catway
 */
const Catway = require('../../models/catway');

/**
 * delete catway data
 * @function deleteCatway
 * @async
 * @param {import('express').Request} req - hold catway id
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
const deleteCatway = async function(req, res, next) {
    try {
        const id = req.body._id;

        await Catway.findByIdAndDelete(id);

        res.redirect('/catways');
    } catch(e) {
        next(e);
    }
}

module.exports = deleteCatway;