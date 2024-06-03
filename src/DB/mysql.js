const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.dataBases,  // Correcto: database
};

let conexion;

function conexionMysql() {
    conexion = mysql.createConnection(dbconfig);
    conexion.connect((err) => {
        if (err) {
            console.log('[db err]', err);
            setTimeout(conexionMysql, 200);
        } else {
            console.log("Conexion realizada con exito");
        }
    });
    conexion.on('error', err => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conexionMysql();
        } else {
            throw err;
        }
    });
}

conexionMysql();

function datosTabla(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

function datoUnico(tabla, id) {
    // Función aún no implementada
}

function insertar(tabla, data) {
    // Función aún no implementada
}

function borrar(tabla, id) {
    // Función aún no implementada
}

module.exports = {
    datosTabla,
    datoUnico,
    insertar,
    borrar,
};
