let gridrowthree = document.querySelector('.grid-row-3');
let t_one = document.querySelector('#uno');
let t_two = document.querySelector('#dos');
let t_three = document.querySelector('#tres');
let p_small = t_one.innerText;
let p_med = t_two.innerText;
let p_large = t_three.innerText;
t_one.id = '1';
t_one.innerText = '£' + p_small;
t_two.remove();
t_three.remove();

const counteradd = () => {
  let c = parseInt(imgnumber.innerHTML);
  imgnumber.innerHTML = c + 1;
}

const counterdeduct = () => {
  let c = parseInt(imgnumber.innerHTML);
  c <= 1 ? imgnumber.innerHTML = 1 : imgnumber.innerHTML = c - 1;
}

const gettheprightprice = (int) => {
  let i;
  if (int == 1) {
    i = p_small;
    return i;
  }
  if (int == 2) {
    i = p_med;
    return i;
  }
  if (int == 3) {
    i = p_large;
    return i;
  }
}

const updatethepricedivide = (str, int) => {
  let todelete = document.querySelector('.placeofinterest_1') || document.querySelector('.placeofinterest');
  let i = gettheprightprice(int);
  let x = str - parseInt(i);
  if (x <= 0) {
    placetopaste.insertAdjacentHTML('afterbegin', `
    <p id='${int}' class='placeofinterest'>£${i}</p>
    `)
    todelete.remove();
    return
  }
  placetopaste.insertAdjacentHTML('afterbegin', `
  <p id='${int}' class='placeofinterest'>£${x}</p>
  `)
  todelete.remove();
}

const updatethepricemult = (str, int) => {
  let todelete = document.querySelector('.placeofinterest_1') || document.querySelector('.placeofinterest');
  let i = gettheprightprice(int);
  todelete.remove();
  let x = str + parseInt(i);
  placetopaste.insertAdjacentHTML('afterbegin', `
  <p id='${int}' class='placeofinterest'>£${x}</p>
  `)
}

const updatetheprice = (str, int) => {
  imgnumber.innerHTML = '1';
  let todelete = document.querySelector('.placeofinterest_1') || document.querySelector('.placeofinterest');
  todelete.remove();
  placetopaste.insertAdjacentHTML('afterbegin', `
  <p id='${int}' class='placeofinterest'>£${str}</p>
  `)
}

const mutatethesubj = () => {
  let subj = parseInt(document.querySelector('.placeofinterest').innerText.slice(1));
  return subj;
}

const mutatetheobj = () => {
  let obj = parseInt(document.querySelector('.placeofinterest').id);
  return obj;
}

imgplus.onclick = () => {
  counteradd();
  updatethepricemult(mutatethesubj(), mutatetheobj());
};

imgminus.onclick = () => {
  counterdeduct();
  updatethepricedivide(mutatethesubj(), mutatetheobj());
};


gridrowthree.onclick = (event) => {
  let todelete = document.querySelector('.placeofinterest') || document.querySelector('.placeofinterest_1');
  if (placetopaste.childNodes) {
    if (prodcontbtnsml_1.checked) {
      updatetheprice(parseInt(p_small), 1);
    }
    if (prodcontbtnmed_2.checked) {
      updatetheprice(parseInt(p_med), 2);
    }
    if (prodcontbtnlrg_3.checked) {
      updatetheprice(parseInt(p_large), 3);
    }
  }
}

let shoparray = [];
addtocart.onclick = () => {
  function getthechecked() {
    if (prodcontbtnsml_1.checked) {
      return prod1data.innerHTML;
    }
    if (prodcontbtnmed_2.checked) {
      return prod2data.innerHTML;
    }
    if (prodcontbtnlrg_3.checked) {
      return prod3data.innerHTML;
    }
  }
  let luck = getthechecked();
  let price = document.querySelector(".placeofinterest");
  let itemobj = {
    prodname: productname_prod.innerHTML,
    price: price.innerHTML,
    prodsize: luck,
    prodquantity: imgnumber.innerHTML,
    prodimg: productpic_prod.src
  }
  shoparray.push(itemobj);
  checkthearray(shoparray);
}

const checkthearray = (arr) => {
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].prodname == arr[i+1].prodname) {
        arr.splice(0, 1);
        setthedata(arr, i);
      }
    }
  } else {
    setthedata(arr, 0);
  }
}
const setthedata = (arr, i) => {
  let stl = localStorage.length;
  if (stl > 0) {
      checkthestorage(arr, i, stl);
  } else {
    localStorage.setItem(0, [arr[i].prodname, arr[i].price, arr[i].prodsize, arr[i].prodquantity, arr[i].prodimg]);
    refreshpurchases();
  }
}

const checkthestorage = (arr, i, stl) => {
  if ((localStorage.getItem(stl - 1).split(',')[0]) !== arr[i].prodname) {
    localStorage.setItem(stl, [arr[i].prodname, arr[i].price, arr[i].prodsize, arr[i].prodquantity, arr[i].prodimg]);
    refreshpurchases();
  }
  if ((localStorage.getItem(stl - 1).split(',')[0]) == arr[i].prodname) {
    localStorage.removeItem(stl - 1);
    localStorage.setItem(stl - 1, [arr[i].prodname, arr[i].price, arr[i].prodsize, arr[i].prodquantity, arr[i].prodimg]);
    refreshpurchases();
  }
}
