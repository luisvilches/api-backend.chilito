var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Producto = new Schema({

	nombre: String,
	precio: String,
	urlImage: String

});

module.exports = mongoose.model('Producto',Producto);