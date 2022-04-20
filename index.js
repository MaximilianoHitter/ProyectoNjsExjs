import express from 'express';
//const express = require('express');
import router from './routes/index.js';

//Otra forma
/*import express from 'express'; y agregar en el package.json donde esta el auto lo siguiente "type": "commonjs"
*/
const app = express();

//Agregar router
app.use('/', router);

//Habilitar pug
app.set('view engine', 'pug');

//Definir puerto
const port = process.env.PORT || 4000;




app.listen(port, () => {
    console.log(`El server ta up en el puerto ${port}`);
})