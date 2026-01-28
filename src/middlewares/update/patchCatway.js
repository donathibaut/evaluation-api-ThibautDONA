/**
 * @file patchCatway.js
 * @module middlewares/update/patchCatway
 * @description PATCH method for Catway
 */
const Catway = require('../../models/catway');

/**
 * update catway data
 * @function patchReservation
 * @async
 * @param {import('express').Request} req - hold selected catway data
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
const patchCatway = async function(req, res, next) {
    try {
        const id = req.body._id;

        await Catway.findByIdAndUpdate(id, {
            catwayNumber : req.body.catwayNumber,
            catwayType : req.body.catwayType,
            catwayState : req.body.catwayState,
        }, {
            runValidators : true
        });

        res.redirect('/catways');
    } catch(e) {
        next(e);
    }
}

module.exports = patchCatway;