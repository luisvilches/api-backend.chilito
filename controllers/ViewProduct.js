var Producto = require('.././models/product');

module.exports = {

	allProduct : (req,res,next) => {

		Producto.find((err,doc) => {

			if (err) {
				return res.status(500).send( err.message);
			}else{
				res.status(200).jsonp({points: doc});
			}
		});
	}
};