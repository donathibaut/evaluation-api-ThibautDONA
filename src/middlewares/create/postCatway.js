const Catway = require("../../models/catway");

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