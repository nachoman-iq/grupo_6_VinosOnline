var express = require('express');
var router = express.Router();
var multer = require('multer');
var path =require('path');



// porcion de codigo para subir una imagen
var  storage  = multer.diskStorage ( { 
  destination : function ( req , file , cb )     { 
    cb ( null , 'dh' ) 
  } ,
  filename : function ( req , file , cb )     { 
    cb ( null , file.fieldname + ' - ' + date.now() + path.extname(file.originalname) )     
  }
} )
var  upload  = multer ( {storage :  storage  } ) 


const productsController = require('../controllers/productsController');
var router = express.Router();

 
router.get('/', function(req, res, next) {
  res.send('estamos en products router');
});
router.get('/algo', function(req, res, next) {
    res.send('estamos en products algo');
  }); 

router.get('/index', productsController.index);

router.get('/create', productsController.create);
router.post('/create',upload.any(), productsController.store);

router.get('/product-edit/:product_id', productsController.edit);



module.exports = router;