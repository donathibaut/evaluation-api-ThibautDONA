/**
 * refer to user data
 * @file users.js
 */
const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const listDate = require('../../utils/list-date');

/**
 * render the list of users page
 * @function get
 */
/**
 * @openapi
 * /users:
 *   get: 
 *     summary: Render the Page
 *     description: Display and sort users (decreasing order)
 *     responses:
 *       200:
 *         description: Page loaded
 */
router.get('/', async function(req, res, next) {
    try {
        // (decreasing order)
        const users = await User.find().sort({createdAt : -1});

        res.render('lists/users', {
            users : users,

            listDate : listDate
        });
    } catch(e) {
        next(e);
    }
});

/**
 * fetch data
 * @function get
 */
/**
 * @openapi
 * /users/api/{id}:
 *   get: 
 *     summary: Fetch
 *     description: Fetch data (javascripts/module/fetch-data.js)
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Fetched
 */
router.get('/api/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if(!user) {
            console.error("ERROR : NO API !");
        }

        res.json(user);
    } catch(e) {
        next(e);
    }
});

/**
 * create-user form page
 * @function get
 */
/**
 * @openapi
 * /users/create-user:
 *   get: 
 *     summary: Render create-user
 *     description: Render the Page
 *     responses:
 *       200:
 *         description: Fetched
 */
router.get('/create-user', async function(req, res, next) {
    try {
        res.render('lists/create/create-user');
    } catch(e) {
        next(e);
    }
});

/**
 * create new data
 * @function post
 */
/**
 * @openapi
 * /users/add-user:
 *   post: 
 *     summary: Create new data
 *     description: Create new users
 *     responses:
 *       200:
 *         description: Page loaded
 */
const postUser = require('../../middlewares/create/postUser');
router.post('/add-user', postUser);

/**
 * patch data
 * @function patch
 */
/**
 * @openapi
 * /users/patch-user:
 *   patch: 
 *     summary: Patch data
 *     description: Update users data
 *     responses:
 *       200:
 *         description: Page loaded
 */
const patchUser = require('../../middlewares/update/patchUser');
router.patch('/patch-user', patchUser);

/**
 * delete data
 * @function delete
 */
/**
 * @openapi
 * /users/delete-user:
 *   delete: 
 *     summary: Delete data
 *     description: Delete users data
 *     responses:
 *       200:
 *         description: Page loaded
 */
const deleteUser = require('../../middlewares/delete/deleteUser');
router.delete('/delete-user', deleteUser);

module.exports = router;