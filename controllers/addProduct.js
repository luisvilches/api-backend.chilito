var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
var multer = require('multer');
var Producto = require('.././models/product');

module.exports = {

	addProduct : (req,res) => {

		var data = new Producto({

			nombre: req.body.name,
			precio: req.body.precio,
			urlImage: req.body.urlimg
			descripcion: {
				descripcion1: req.body.descripcion1,
				descripcion2: req.body.descripcion2,
				descripcion3: req.body.descripcion3,
				medidas: req.body.medidas,
				descripcion4: req.body.descripcion4
				envio: req.body.envio,
				despacho: req.body.despacho
			}
		});

		cloudinary.uploader.upload(req.file.path,(result) => {

				data.urlImage = result.url;

				data.save((err,data) => {

				if (err) {
					console.log(err);
				}else{
					console.log(data);
				}
				res.status(200).end();
			});
		});
	}
};