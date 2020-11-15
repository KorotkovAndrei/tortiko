const counteradd = () => {
  let c = parseInt(imgnumber.innerHTML);
  console.log(c);
  imgnumber.innerHTML = c + 1;
}
const counterdeduct = () => {
  let c = parseInt(imgnumber.innerHTML);
  c <= 1 ? imgnumber.innerHTML = 1 : imgnumber.innerHTML = c - 1;
}
imgplus.onclick = counteradd;
imgminus.onclick = counterdeduct;


const placethehtml = (value) => {
  let nest = document.querySelector('#placetopaste');
  let place = document.querySelector('.placeofinterest');
  let ndata = "${product.getProductPrices()" + `[${value}]}`
  place.remove();
  nest.insertAdjacentHTML('afterbegin', `<p th:text="${ndata}" class='placeofinterest'></p>`)
}
prodcontbtnsml.addEventListener('click', () => {
  placethehtml(0);
});
prodcontbtnmed.addEventListener('click', () => {
  placethehtml(1);
});
prodcontbtnlrg.addEventListener('click', () => {
  placethehtml(2);
});
