const { check, validationResult, body } = require('express-validator'); //requerimos exp Validator
const bcrypt = require('bcrypt'); 
const fs = require('fs');
const users = JSON.parse(fs.readFileSync(__dirname + "/../database/users.json")); //paras de users para uso global

const controlador = {
    
    register: function (req, res ) {
        res.render('../register');
    },

    store: function (req, res) {
        console.log("llego por post"); 
        let errors = validationResult(req);

        if(!errors.isEmpty() ){
            res.render('users/register',{errors:errors.errors})
        }  
        let newUser = req.body;
        newUser.password = bcrypt.hashSync(newUser.password,10);
      
        if(users.length > 0){
            let ultimoID = users[users.length-1].id;
            newUser.id = ultimoID + 1;
        }else{
            newUser.id = 1;
        }
               
        users.push(newUser);
        fs.writeFileSync(__dirname+"/../database/users.json",JSON.stringify(users));
       
        /******ver esto mas adelante para meter sesion y cookies*******/
        // req.session.usuariologueado = newUser;
        //res.redirect("/products/"+newUser.nombre);
    }
    
}

module.exports = controlador;