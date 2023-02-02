const { Router } = require("express");
const router = Router();

const productsController = require('../../controllers/products.controller');

router.get('/', apiAuth, productsController.getProducts)
router.get('/:id', apiAuth, productsController.getProductById)
router.get('/filter/:category', apiAuth, productsController.getProductsByCategory)
router.post('/', apiAuth, productsController.saveProduct)
router.put('/:id', apiAuth, productsController.updateProduct)
router.delete('/:id', apiAuth, productsController.deleteProduct)


module.exports = router;