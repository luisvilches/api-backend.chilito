var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Producto = new Schema({

	nombre: String,
	precio: String,
	urlImage: String,
	descripcion: {
		descripcion1: String,
		descripcion2: String,
		descripcion3: String,
		medidas: String,
		descripcion4: String,
		envio: String,
		despacho: String
	}

});

module.exports = mongoose.model('Producto',Producto);