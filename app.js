const express = require('express');
const config = require('./config');

const usuarios = require('./modules/usuarios/rutas')

const app = express();

// configuración del archivo de configuración
app.set('port', config.app.port);

//rita del modulo de de tareas
app.use('/api/usuarios', usuarios)

module.exports = app;