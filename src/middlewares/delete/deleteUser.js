const User = require('../../models/user');

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