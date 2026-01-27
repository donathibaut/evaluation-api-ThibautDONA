const Catway = require('../../models/catway');

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