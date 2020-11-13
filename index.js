require('dotenv').config();
const express = require('express');

const cors = require('cors');
const { dbConnection } = require('./database/config');
//Crear el servidor de express
const app = express();

//configurar CORS
app.use(cors());
//Lectura y parseo del body
app.use(express.json());
//Base de datos
dbConnection();
//kTiEymkIN59AgHjH
//mean_user

//console.log(process.env);

//Rutas
app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/login',require('./routes/auth'));

app.listen(process.env.PORT,() => {
   console.log('Servidor corriendo en puerto '+ 3000);
});