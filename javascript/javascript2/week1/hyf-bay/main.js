console.log("Script loaded");

const products = getAvailableProducts();

function renderProduct(products){
    for(const product of products){
        const ulElement = document.getElementById("ulList")
        const list = document.createElement("li")
        const name = document.createElement("h2")
        const price = document.createElement("p")
        const rating = document.createElement("p")

        ulElement.appendChild(list)
        list.appendChild(name)
        list.appendChild(price)
        list.appendChild(rating)
        
        
        name.innerHTML = product.name
        price.innerHTML = `Price : ${product.price}`
        rating.innerHTML = `Rating : ${product.rating}`

    }  
}
renderProduct(products);
console.log(products);
