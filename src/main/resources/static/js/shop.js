const selectedProduct = document.querySelector('.main-section-product-list');

function updateProductsInDom(productList) {
    selectedProduct.innerHTML = '';
    productList.forEach(({id, productName, productDescription, productPhotoUrl, productPrices }) => selectedProduct.innerHTML += productTemplate({id, productName, productDescription, productPhotoUrl, productPrices }))
}


function productTemplate({id, productName, productDescription, productPhotoUrl, productPrices }) {
    return    `<div class="grid-3-elem-9" >
                <section class="shopping-card-container">
                    <img src="${productPhotoUrl}" alt="" >
                    <section class="shopping-card-info">
                        <p>${productName}</p>
                        <section class="shopping-card-price">
                            <p class="p-price">${productPrices[0]} $</p>
                        <img class="grid-shopping-cart-icon" src="img/png/039-shopping-cart.png" alt="">
                        </section>
                    </section>
                </section>
            </div>`
}
function getProducts() {
    fetch('http://localhost:8080/products/getAll',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then(response => response.json()).then(productList => updateProductsInDom(productList));
}
getProducts();