const Catway = require('../../models/catway');

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