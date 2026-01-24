const jwt = require('jsonwebtoken');

// verify connection token
const auth = function(req, res, next) {
    const token = req.cookies.token;

    if(!token) {
        return res.redirect("/?error=Vous n'êtes pas connecté !");
    };

    try {
        req.user = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch(e) {
        res.clearCookie('token');
        return res.redirect("/?error=Veuillez vous reconnecter");
    }
};

module.exports = auth;