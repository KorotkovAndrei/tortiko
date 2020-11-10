const selectedProduct = document.querySelector('.grid-subdiv-3');

function updateProductsInDom(productList) {
    console.log(productList);
    selectedProduct.innerHTML = '';
    productList.forEach(({id, productName, productDescription, productPhotoUrl, productPrices }) => selectedProduct.innerHTML += productTemplate({id, productName, productDescription, productPhotoUrl, productPrices }))
}


function productTemplate({id, productName, productDescription, productPhotoUrl, productPrices }) {
    return `<section id="shop-container-secondary" class="shopping-card-container">
            <a class="shoplink" href="/shop/${id}">
            <img class="prodpic" src=${productPhotoUrl} alt="">
            </a>
              <section class="shopping-card-info">

                  <div class="shopping-card-header">
                  <h2 id="shoppingcardname">${productName}</h2>
                  </div>

                  <div class="shopping-card-price-section_one">
                  <button id="wiuwqw" type="button" name="button">small</button>
                  <button id="vcvcvc" type="button" name="button">medium</button>
                  <button id="fwwggr" type="button" name="button">large</button>
                  </div>

                  <div class="shopping-card-price-section_two">
                  <button type="button" name="button">Add to cart</button>
                  <p class="p-price">£${productPrices[1]}</p>
                  </div>

              </section>
          </section>`
    }
function getProducts() {
    fetch('http://localhost:8080/products/getAll',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(productList => updateProductsInDom(productList));


}
getProducts();
