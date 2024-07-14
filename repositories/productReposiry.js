const fs = require('fs');
const path = require('path');

const getProductData = () => {
  const filePath = path.join(__dirname, '../jsonData/products.json' );
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

module.exports = { getProductData };
