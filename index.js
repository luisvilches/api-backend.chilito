var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var cloudinary = require('cloudinary');
var uploader = multer({dest: "./uploads"});
var cors = require('cors');



var routes = require('./routes/routes');

var app = express();
var db = "mongodb://chilito:chilito2230@ds147905.mlab.com:47905/chilito";
var msg_server = "corriendo en el puerto: ";


/////// CONFIGURACIONES ////////////////////////

app.set('port', process.env.PORT || 5000);
app.set('Views', path.join(__dirname,'views'));
app.set('view engine', 'jade');
app.set("jsonp callback", true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static('public'));
app.use(cors());

app.use('/',routes);

///////////////////////////////////////////////

/////// CONECCION BASE DE DATOS ///////////////

//mongoose.connect('mongodb://localhost/test', function(err,res){

mongoose.connect(db,(err,res) => {
	if (err) {console.log(err); 
	};
});

///////////////////////////////////////////////


//////// CONFIGURACION DE CLOUDINARY //////////

cloudinary.config({
	cloud_name: "accecar",
	api_key: "581627995675862",
	api_secret: "y2jQCRNi1-UVx2n552vEi8Yywoc"
});

/////// SERVIDOR //////////////////////////////

app.listen(app.get('port'), () => {
	console.log(msg_server + app.get('port'));
});