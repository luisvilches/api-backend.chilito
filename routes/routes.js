var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');
var multer = require('multer');
var uploader = multer({dest: "./uploads"});

var direccion = "/api/v1/";
var middleware_upload = uploader.single('urlimg');


/////// API ///////////////////////

router.get(direccion + "all", controllers.ViewProduct.allProduct);
router.post(direccion + "add",middleware_upload, controllers.addProduct.addProduct);


module.exports = router;