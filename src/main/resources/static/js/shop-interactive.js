const choosethebutton = (value) => {
  fetch('http://localhost:8080/products/getAll',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(response => response.json())
      .then(productList => {

        let price = document.querySelector('.p-price');
        if (value == 1) {
          price.innerHTML = productList[0].productPrices[0];
        }
        if (value == 2) {
          price.innerHTML = productList[0].productPrices[1];
        }
        if (value == 3) {
          price.innerHTML = productList[0].productPrices[2];
        }

      });
}
let smallbtn = document.querySelector('#smallbtn');
wiuwqw.addEventListener('click', choosethebutton(1));
vcvcvc.onclick = choosethebutton(2);
fwwggr.onclick = choosethebutton(3);
