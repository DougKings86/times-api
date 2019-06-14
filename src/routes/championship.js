const express = require('express');
const controller = require('../controller/championship');

const router = express.Router();

router.get('/championship/:id' , controller.buscarUm);

router.get('/championship/' , controller.buscarTodos);

module.exports = router;