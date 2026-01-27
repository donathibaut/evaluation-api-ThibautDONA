const User = require('../../models/user');

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