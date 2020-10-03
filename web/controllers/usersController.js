const bcrypt = require('bcrypt');
//const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const users = JSON.parse(fs.readFileSync(__dirname + "/../database/users.json"));


const controlador = {
    
    register: function (req, res ) {
        res.render('users/register');
    },

    store: function (req, res) {
        console.log("llego por post");   
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
       // res.redirect("/users/profile/"+newUser.id);
    }
    
}

module.exports = controlador;