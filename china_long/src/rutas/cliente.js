const express =require('express');
const rutas = express.Router();

const mysqlConexion = require('../basededatos.js')

rutas.get('/cliente',(req,res) =>{
	mysqlConexion.query('SELECT * FROM cliente',(err,filas,campos) =>{
		if(!err){
			res.json(filas);
		}else{
			console.log(err)
		}
	})
});


module.exports =rutas;