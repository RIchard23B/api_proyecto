const express = require('express'); //sintaxis de importación en nodejs
require('dotenv').config();
const { dbConection } = require('./config/database')
const cors = require('cors');


//Crear el servidor express
const app = express();

//Configurar Cors
app.use(cors());

//Estableciendo conexion a la BD
dbConection();
console.log(process.env);

//Ruta de la API Proyectos (ESTO NO ES MUY RECOMENDABLE)
app.get('/',(req,res)=>{
    res.status(400).json({  //res va a ser el GET
        ok:true,
        msg: 'Bienvenidos a NodeJS'
    });
});

//Código para desplegar el servidor

app.listen(process.env.PORT,()=>{
    console.log('Servidor desplegado en el puerto: '+process.env.PORT)
})