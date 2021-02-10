const express = require('express'); //importa la libreria
const bodyParser = require('body-parser');
const ejercicios = require('./ejercicios')

const app = express(); // crea el servidor
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/ejercicio1',(req, res) => {
    res.send({message: `${ejercicios.ejercicio1(req.query.pesos)}`})
});

app.get('/ejercicio2',(req, res) => {
    res.send({message: `${ejercicios.ejercicio2(req.query.n)}`})
});

app.listen(port, () => {
    console.log(`Mi Servidor en ejecucion en el puerto http://localhost:${port}`);
});

