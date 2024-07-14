const productRepository = require('../repositories/productReposiry');

exports.getAllProducts = () => {
    return productRepository.getProductData();
};

exports.getProductById = (id) => {
    const products = productRepository.getProductData();
    return products.find(product => product.id === id);
};
