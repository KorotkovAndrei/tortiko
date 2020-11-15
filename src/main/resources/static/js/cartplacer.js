function placeCart() {
  let cartmodal = document.getElementById("cart-placeholder");
  cartmodal.insertAdjacentHTML('afterbegin', `

  <div class="card-t off">
    <div class="heading">
      <h1>SHOPPING BAG</h1>
    </div>
    <div class="chosen-item-list">
      <div class="chosen-item">

        <div class="item-imgplaceholder">
          <img src="img/butterscothc.jpg" alt="">
        </div>

        <div class="item-infoplaceholder">

          <div class="item-heading">
            <div class="item-name">
              <p>Vanilla Cake</p>
            </div>
            <div class="item-price">
              <p>£20</p>
            </div>
          </div>

          <div class="item-sizing">
            <p>medium</p>
          </div>

          <div class="item-options">
            <div class="item-moreless">
              <img src="img/minus-button.png" alt="">
                <p>1</p>
              <img src="img/plus-button.png" alt="">
            </div>
            <div class="remove">
              <button type="button" name="button">remove</button>
            </div>
          </div>

        </div>

      </div>
      <div class="chosen-item">

        <div class="item-imgplaceholder">
          <img src="img/butterscothc.jpg" alt="">
        </div>

        <div class="item-infoplaceholder">

          <div class="item-heading">
            <div class="item-name">
              <p>Vanilla Cake</p>
            </div>
            <div class="item-price">
              <p>£20</p>
            </div>
          </div>

          <div class="item-sizing">
            <p>medium</p>
          </div>

          <div class="item-options">
            <div class="item-moreless">
              <img src="img/minus-button.png" alt="">
                <p>1</p>
              <img src="img/plus-button.png" alt="">
            </div>
            <div class="remove">
              <button type="button" name="button">remove</button>
            </div>
          </div>

        </div>

      </div>

    </div>
    <div class="the-summing-up">
        <p>Quantity: X</p>
        <p>Total: £XX</p>
    </div>
    <div class="shopping-button-nest">
      <button type="button" name="button">Check-out</button>
    </div>
  </div>


  `)
}

window.addEventListener("onload", placeCart());

let shoppingcart = document.querySelector('.nav-shop-cart');
let shoppingcartmodal = document.querySelector('.card-t');
let indexUI = document.querySelector('.index-ui');
let isshoppingmodalsopened;
shoppingcart.onclick = () => {
  shoppingcartmodal.classList.toggle('off');
  shoppingcartmodal.classList.toggle('flex');
  isshoppingmodalsopened = true;
}
indexUI.onclick = (event) => {
  if (isshoppingmodalsopened == true) {
    if (event.target.className != 'card-t' || event.target.className != 'nav-shop-cart') {
      shoppingcartmodal.classList.toggle('off');
      shoppingcartmodal.classList.toggle('flex');
  }
}
}
