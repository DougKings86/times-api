const express = require('express');
const controller = require('../controller/teams');

const router = express.Router();

router.get('/teams/:id' , controller.buscarUm);

router.get('/teams/' , controller.buscarTodos);


module.exports = router;