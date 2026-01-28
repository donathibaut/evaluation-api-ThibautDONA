/**
 * refer to catway data
 * @file catways.js
 */
const express = require('express');
const router = express.Router();
const Catway = require('../../models/catway');
const listDate = require('../../utils/list-date');

/**
 * render the list of catways page
 * @function get
 */
/**
 * @openapi
 * /catways:
 *   get: 
 *     summary: Render the Page
 *     description: Display and sort catways (decreasing order)
 *     responses:
 *       200:
 *         description: Page loaded
 */
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

/**
 * fetch data
 * @function get
 */
/**
 * @openapi
 * /catways/api/{id}:
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
        const catway = await Catway.findById(id);

        if(!catway) {
            console.error("ERROR : NO API !");
        }

        res.json(catway);
    } catch(e) {
        next(e);
    }
});

/**
 * create-catway form page
 * @function get
 */
/**
 * @openapi
 * /catways/create-catway:
 *   get: 
 *     summary: Render create-catway
 *     description: Render the Page
 *     responses:
 *       200:
 *         description: Fetched
 */
router.get('/create-catway', async function(req, res, next) {
    try {
        res.render('lists/create/create-catway');
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
 * /catways/add-catway:
 *   post: 
 *     summary: Create new data
 *     description: Create new catways
 *     responses:
 *       200:
 *         description: Page loaded
 */
const postCatway = require('../../middlewares/create/postCatway');
router.post('/add-catway', postCatway);

/**
 * patch data
 * @function patch
 */
/**
 * @openapi
 * /catways/patch-catway:
 *   patch: 
 *     summary: Patch data
 *     description: Update catways data
 *     responses:
 *       200:
 *         description: Page loaded
 */
const patchCatway = require('../../middlewares/update/patchCatway');
router.patch('/patch-catway', patchCatway);

/**
 * delete data
 * @function delete
 */
/**
 * @openapi
 * /catways/delete-catway:
 *   delete: 
 *     summary: Delete data
 *     description: Delete catways data
 *     responses:
 *       200:
 *         description: Page loaded
 */
const deleteCatway = require('../../middlewares/delete/deleteCatway');
router.delete('/delete-catway', deleteCatway);

module.exports = router;