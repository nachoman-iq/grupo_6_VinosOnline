const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));   

/* const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); */

const productsController = {
  index: (req, res)  => { 
    res.render('products/product-list',{products}) 
  },
  create: (req, res) => {
     res.render('products/product-create')
  },

  store : (req, res,next) => {
     console.log(req);

  },
 edit: (req, res)   => {
   res.send(" llego bien ")
 /*   res.render('products/product-edit')  */
  } 
  


};

module.exports = productsController;


