const selectedProduct = document.querySelector('.grid-subdiv-3');

function updateProductsInDom(productList) {
    selectedProduct.innerHTML = '';
    productList.forEach(({id, productName, productDescription, productPhotoUrl, productPrices }) => selectedProduct.innerHTML += productTemplate({id, productName, productDescription, productPhotoUrl, productPrices }))
}


function productTemplate({id, productName, productDescription, productPhotoUrl, productPrices }) {
    return    `<div class="grid-3-elem-9" >
                <a href="/shop/${id}">
                    <section class="shopping-card-container">
                        <img src="${productPhotoUrl}" height=300px width=250px>
                        <section class="shopping-card-info">
                            <p>${productName}</p>
                            <section class="shopping-card-price">
                                <p class="p-price">${productPrices[0]} $</p>
                            <img class="grid-shopping-cart-icon" src="img/png/039-shopping-cart.png" alt="">
                            </section>
                        </section>
                    </section>
                </a>
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

let shopUI = document.querySelector('#shop-container-main');
let shopDashboard = document.querySelector('#shop-container-secondary');
let shopDashboardChildren = shopDashboard.childNodes;
console.log(shopDashboardChildren);

let c;
shopUI.onclick = (event) => {
  console.log("event.target.parentNode.className: " + event.target.parentNode.className + ",");
  for (let i = 0; i < shopDashboardChildren.length; i++) {
    if (shopDashboardChildren[i].className == event.target.className) {
      console.log('shopDashboardChildren[i].className: ' + shopDashboardChildren[i].className)
      c = 1;
      return showtheprod(shopDashboardChildren[i].className);
    }
  }
  if (c == 1) {
    c = 0;
    hidetheprod();
  }
}

function showtheprod(classname) {
  let cont = document.getElementById('prodcont');
  cont.classList.toggle('off');
  cont.classList.toggle('grid');
  if (classname == "shop-container") {
    console.log('classname one :' + classname);
    let currelement = document.getElementsByClassName(classname);
    console.log('currelement one :' + currelement);
    let currelementheader = currelement.getElementsByTagName('h2');
    contpname.innerHTML = currelementheader.innerHTML;
  }
  if (classname == "prodpic") {
    console.log('classname two :' + classname);
    classname = "shop-container";
    let currelement = document.querySelector(`.${classname}`);
        console.log('currelement two :' + currelement);
    let currelementheader = currelement.querySelector('#shoppingcardname');
    contpname.innerHTML = currelementheader.innerHTML;
  }
  console.log('showtheprod classname: ' + classname);
}
function hidetheprod() {
  let cont = document.getElementById('prodcont');
  cont.classList.toggle('off');
  cont.classList.toggle('grid');
  contpname.innerHTML = ''
}
