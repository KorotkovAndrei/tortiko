const selectedProduct = document.querySelector('.main-section-product-list');

function updateProductsInDom(productList) {
    selectedProduct.innerHTML = '';
    productList.forEach(({id, productName, productDescription, productPhotoUrl, productPrices }) => selectedProduct.innerHTML += productTemplate({id, productName, productDescription, productPhotoUrl, productPrices }))
}


function productTemplate({id, productName, productDescription, productPhotoUrl, productPrices }) {
    return ` <div class="product" id="${id}">
                <img src="${productPhotoUrl}">
                <h5>${productName}</h5>
                <p>${productDescription}</p>
                <span>${productPrices[0]}</span>
             </div>`
}

function getProducts() {
    fetch('http://localhost:8080/products/getAll')
        .then(response => response.json()).then(productList => updateProductsInDom(productList));
}
getProducts();