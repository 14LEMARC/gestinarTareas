const app = require('./app');

app.listen(app.get('port'), () => {
    console.log("Servidor activado en el puerto", app.get("port"));
});