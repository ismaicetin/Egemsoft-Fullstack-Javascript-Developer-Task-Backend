var express = require('express');
var router = express.Router();  
const productController = require("./controllers/productController");
const categoryController = require("./controllers/categoryController");
 

 

router.get      ('/products',                                   productController.listAllProducts)     
router.post     ('/productManagement',                          productController.createNewProduct)  
router.get    ('/productManagement/:productId',               productController.getByIdProduct)        
router.put    ('/productManagement/:productId',               productController.updateProduct)     
router.delete   ('/productManagement/:productId',               productController.deleteProduct)  
router.put     ('/productManagement/:productId/priceUpdate',   productController.updateProduct)   
router.put     ('/productManagement/:productId/stockUpdate',   productController.updateProduct)         


router.get    ('/categories',                                   categoryController.listAllCategorys)     
router.post   ('/categoryManagement',                           categoryController.createNewCategory)  
router.get  ('/categoryManagement/:categoryId',               categoryController.readCategory)        
router.put  ('/categoryManagement/:categoryId',               categoryController.updateCategory)     
router.delete ('/categoryManagement/:categoryId',              categoryController.deleteCategory)        

 

module.exports = router;
