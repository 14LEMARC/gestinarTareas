const db = require('../../DB/mysql');

const TABLA = 'usuarios';

function datosTabla(){
    return db.datosTabla(TABLA);

}

module.exports = {
    datosTabla,
}