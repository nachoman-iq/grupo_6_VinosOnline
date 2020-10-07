var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");
const { check, validationResult, body } = require('express-validator'); //debo requerir validator en ruta y en contoller
/* GET users listing. */

router.get('/', function (req, res, next) {
  res.send('HASTA ACA LLEGO DE PRIMERA ');
});

router.get('/register', usersController.register);
router.post('/register',[check("email").isEmail().withMessage("Email inválido"),
check("nombre").isLength({ min: 2, max: 50 }).withMessage("Debes ingresar tu Nombre"),check("apellido").isLength({ min: 2, max: 50 }).withMessage("Completa tu Apellido")],usersController.store
);


//router.post('/register', usersController.store);

module.exports = router;
