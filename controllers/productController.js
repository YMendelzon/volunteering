const productService = require('../services/productService');

exports.getAllProducts = (req, res) => {
    const products = productService.getAllProducts();
    res.json(products);
};

exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const product = productService.getProductById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
};
