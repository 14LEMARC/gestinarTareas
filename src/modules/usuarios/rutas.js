const express = require('express');

const router = express.Router();

router.get('/', function (req, res){
    res.send('Sistema de tareas en funcionamiento')
});

module.exports = router;