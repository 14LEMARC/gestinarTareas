exports.success =function (req, res, mensaje='', status=200) {
   // const statusCode = status || 200;
   // const mensajeFunciona = mensaje || '';
    res.status(status).send({
        error:false,
        status:status,
        body:mensaje
    });
}

exports.error =function (req, res, mensaje='error en codigo', status=500) {
    //const statusCode = status || 500;
    //const mensajeFalla = mensaje || 'error en codigo';
    res.status(status).send({
        error:true,
        status:status,
        body:mensaje
    });
}