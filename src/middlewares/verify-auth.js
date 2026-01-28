/**
 * @file verify-auth.js
 * @module middlewares/verify-auth
 * @description verify user authentification
 */
const jwt = require('jsonwebtoken');

/**
 * verify connection token
 * @function auth
 * @param {import('express').Request} req - hold the token and connected user data
 * @param {import('express').Response} res - delete the cookie if non-compliant
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
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