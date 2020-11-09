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
