const {response} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario.model');
const {generarJWT} = require('../helpers/jwt');


const login = async(req, res = response) => {
    const{email, password} = req.body;

    try{
        //verificar al usuario popr su email
        const usuarioDB = await Usuario.findOne({email});
        if(!usuarioDB){
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
                //considerar la utilizacion de este mensaje
            });
        }
        //verificar Contraseña
        const validarPassword = bcrypt.compareSync(password, usuarioDB.password);
        if(!validarPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        //Generar el TOKEN - JWT
        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok:true,
            token
        })
    } catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    login
}