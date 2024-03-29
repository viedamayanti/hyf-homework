// @ts-nocheck
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    // Implement functionality here
    const urlCurrency =
      'https://v6.exchangerate-api.com/v6/65e9169f45d75e71ef7414dd/latest/dkk';
    return fetch(urlCurrency)
      .then((response) => response.json())
      .then((data) => {
        const convertRate = data.conversion_rates[currency];
        console.log(convertRate);
      });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    return this.products.push(product);
  }

  removeProduct(product) {
    // Implement functionality here
    const index = this.products.indexOf(product);
    this.products = this.products.filter((pr) => pr.name !== product);
  }

  searchProduct(productName) {
    // Implement functionality here
    return this.products.filter((product) => {
      return product.name.toLowerCase().includes(productName);
    });
  }

  getTotal() {
    // Implement functionality here
    const getPrice = this.price;
    const num = 0;
    const sum = getPrice.reduce((total, num) => {
      return total + num;
    });
    sum;
  }

  renderProducts() {
    const headerStr = `Your shopping cart :`;
    const ul = document.createElement('ul');
    ul.innerHTML = headerStr;
    document.body.appendChild(ul);

    this.products.forEach((product) => {
      const p = document.createElement('p');
      p.innerHTML = `Product name : ${product.name} - Product price : ${product.price} `;
      ul.appendChild(p);
    });
  }

  getUser(user) {
    // Implement functionality here
    const url = `https://jsonplaceholder.typicode.com/users/${user}`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}

const shoppingCart = new ShoppingCart();
console.log(shoppingCart);
const flatscreen = new Product('flat-screen', 5000);
const plate = new Product('Plate', 300);
const whitePlate = new Product('white plate', 70);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(plate);
shoppingCart.addProduct(whitePlate);
shoppingCart.renderProducts(whitePlate);
shoppingCart.getUser(1);
console.log(flatscreen.convertToCurrency('USD'));
console.log(plate.convertToCurrency('EUR'));
