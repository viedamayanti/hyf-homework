console.log('Script loaded');
const products = getAvailableProducts();
console.log(products);

let filteredProduct = [];
document.getElementById('inputText').addEventListener('keyup', (e) => {
  const value = document.getElementById('inputText').value;
  if (value !== '') {
    document.querySelector('section.products ul').innerHTML = '';
    filteredProduct = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    filteredProduct.forEach((product) => {
      console.log(product.name);
    });
  }
  renderProduct(filteredProduct);
});

document.getElementById('select').addEventListener('change', (e) => {
  const value = e.target.value;

  if (value === 'cheap') {
    document.querySelector('section.products ul').innerHTML = '';
    filteredProduct = products.sort((a, b) => {
      return a.price - b.price;
    });
  }
  if (value === 'expensive') {
    document.querySelector('section.products ul').innerHTML = '';
    filteredProduct = products.sort((a, b) => {
      return b.price - a.price;
    });
  }
  if (value === 'name') {
    document.querySelector('section.products ul').innerHTML = '';
    filteredProduct = products.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });
  }
  renderProduct(filteredProduct);
});

function renderProduct(products) {
  for (const product of products) {
    const ulElement = document.getElementById('ulList');
    const list = document.createElement('li');
    const name = document.createElement('h2');
    const price = document.createElement('p');
    const rating = document.createElement('p');

    ulElement.appendChild(list);
    list.appendChild(name);
    list.appendChild(price);
    list.appendChild(rating);

    name.innerHTML = product.name;
    price.innerHTML = `Price : ${product.price}`;
    rating.innerHTML = `Rating : ${product.rating}`;
  }
}
renderProduct(products);
console.log(products);
