const express = require('express');
const all = require('../controllers/crud/all');
const select = require('../controllers/crud/select');
const del = require('../controllers/crud/delete');
const add = require('../controllers/crud/add');
const update = require('../controllers/crud/update');

const router = express.Router();

router.get('/user', all);
router.get('/user/:id', select);
router.post('/user/add', add);
router.delete('/user/delete/:id', del);
router.put('/user/update/:id', update);

module.exports = router;
