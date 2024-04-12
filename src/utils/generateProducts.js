const { faker } = require('@faker-js/faker');
const fs = require('fs');

const products = Array.from({ length: 1000 }, () => ({
  id: faker.string.uuid(),
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  url: faker.image.urlLoremFlickr({ category: 'goods,products' }),
  isFavored: faker.datatype.boolean(),
}))

fs.writeFile('../mock/products.json', JSON.stringify(products), (err) => {
  if (err) throw err;
});
