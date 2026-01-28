/**
 * refer to home page routes
 * @file index.js
 */
const express = require('express');
const router = express.Router();
const service = require('../services/users');

/**
 * render the home page
 * @function get
 */
/**
 * @openapi
 * /:
 *   get: 
 *     summary: Render the Home Page
 *     description: Display the connection form
 *     parameters:
 *       - name: error
 *         in: query
 *         description: Error message
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Page loaded
 */
router.get('/', function(req, res, next) {
    try {
        res.render('index', { 
            error : req.query.error
        });
    } catch(e) {
        next(e);
    }
});

/**
 * check the connection form
 * @function post
 */
/**
 * @openapi
 * /connect:
 *   post: 
 *     summary: Redirect to the Dashboard
 *     description: Verify email & password, create a token, then redirect
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       302:
 *         description: Connection succeeded
 */
router.post('/connect', service.checkUserConnection, function(req, res) {
    res.redirect('/dashboard');
});

/**
 * manage logout buttons
 * @function get
 */
/**
 * @openapi
 * /logout:
 *   get: 
 *     summary: Redirect to the Home Page
 *     description: Redirect and delete the connection token
 *     responses:
 *       302:
 *         description: Disconnection succeeded
 */
router.get('/logout', function(req, res) {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;