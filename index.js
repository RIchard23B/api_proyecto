const express = require('express'); //sintaxis de importación en nodejs
require('dotenv').config();
const { dbConection } = require('./config/database')
const cors = require('cors');


//Crear el servidor express
const app = express();

//Configurar Cors
app.use(cors());

//Para que pueda parchar objetos JSON - Siempre Antes de la conexion BD
app.use(express.json());

//Estableciendo conexion a la BD
dbConection();
//console.log(process.env);

//Ruta de la API Proyectos (ESTO NO ES MUY RECOMENDABLE)
app.use('/api/usuarios',require('./routes/usuarios.routes'))
app.use('/api/login', require('./routes/auth.routes'));
//Código para desplegar el servidor

app.listen(process.env.PORT,()=>{
    console.log('Servidor desplegado en el puerto: '+process.env.PORT)
})