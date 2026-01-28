/**
 * @file postCatway.js
 * @module middlewares/create/postCatway
 * @description POST method for Catway
 */
const Catway = require("../../models/catway");

/**
 * create catway data
 * @function postCatway
 * @async
 * @param {import('express').Request} req - hold selected catway data
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
const postCatway = async function(req, res, next) {
    try {
        const {catwayNumber, catwayType, catwayState} = req.body;

        const newCatway = new Catway({
            catwayNumber,
            catwayType,
            catwayState
        });

        await newCatway.save();

        res.redirect('/catways');
    } catch(e) {
        next(e);
    }
}

module.exports = postCatway;