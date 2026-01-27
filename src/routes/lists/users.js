const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const listDate = require('../../utils/list-date');

router.get('/', async function(req, res, next) {
    try {
        // sort users (decreasing order)
        const users = await User.find().sort({createdAt : -1});

        res.render('lists/users', {
            users : users,

            listDate : listDate
        });
    } catch(e) {
        next(e);
    }
});

// fetch data (javascripts/module/fetch-data.js)
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

// create-user form page
router.get('/create-user', async function(req, res, next) {
    try {
        res.render('lists/create/create-user');
    } catch(e) {
        next(e);
    }
});

// create new data
const postUser = require('../../middlewares/create/postUser');
router.post('/add-user', postUser);

// patch data
const patchUser = require('../../middlewares/update/patchUser');
router.patch('/patch-user', patchUser);

// delete data
const deleteUser = require('../../middlewares/delete/deleteUser');
router.delete('/delete-user', deleteUser);

module.exports = router;