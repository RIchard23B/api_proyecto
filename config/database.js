//Importar modulos en node
const mongoose = require('mongoose');
const dbConection = async() => {
    try {
        //Debemos utilizar la cadena de conexion que tenemos en mongocompass
        //mongodb+srv://adminproject:H13zjIJ08IXsLAWC@cluster0.ru7ll.mongodb.net/BDProyectos
        await mongoose.connect(process.env.DB_CNN); //Codigo para conectarse a la base de datos
        console.log('Conexion exitosa a la BD')
        //await permite manejar promesas(esperar las respuesta)
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la BD');
    }
}
//Una forma de exportar
module.exports ={
    dbConection
}