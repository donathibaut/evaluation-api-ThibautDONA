const express = require('express');
const router = express.Router();
const Catway = require('../../models/catway');
const listDate = require('../../utils/list-date');

router.get('/', async function(req, res, next) {
    try {
        // sort catways (decreasing order)
        const catways = await Catway.find().sort({catwayNumber : -1});

        res.render('lists/catways', {
            catways : catways,

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
        const catway = await Catway.findById(id);

        if(!catway) {
            console.error("ERROR : NO API !");
        }

        res.json(catway);
    } catch(e) {
        next(e);
    }
});

// create-catway form page
router.get('/create-catway', async function(req, res, next) {
    try {
        res.render('lists/create/create-catway');
    } catch(e) {
        next(e);
    }
});

// create new data
const postCatway = require('../../middlewares/create/postCatway');
router.post('/add-catway', postCatway);

// patch data
const patchCatway = require('../../middlewares/update/patchCatway');
router.patch('/patch-catway', patchCatway);

// delete data
const deleteCatway = require('../../middlewares/delete/deleteCatway');
const catway = require('../../models/catway');
router.delete('/delete-catway', deleteCatway);

module.exports = router;