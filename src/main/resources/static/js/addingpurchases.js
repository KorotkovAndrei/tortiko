const refreshpurchases = () => {
  let targetwindow = document.querySelector('.chosen-item-list');
  targetwindow.textContent = '';
  for(let i=0; i<localStorage.length; i++) {
    targetwindow.insertAdjacentHTML('beforeend', `
      <div class="chosen-item" id="itemid_${i}">

        <div class="item-imgplaceholder">
          <img src="${localStorage.getItem(i).split(',')[4]}" alt="">
        </div>

        <div class="item-infoplaceholder">

          <div class="item-heading">
            <div class="item-name">
              <p>${localStorage.getItem(i).split(',')[0]}</p>
            </div>
            <div class="item-price">
              <p>${localStorage.getItem(i).split(',')[1]}</p>
            </div>
          </div>

          <div class="item-sizing">
            <p>${localStorage.getItem(i).split(',')[2]}</p>
          </div>

          <div class="item-options">
            <div class="item-moreless">
              <img src="img/minus-button.png" alt="">
                <p>${localStorage.getItem(i).split(',')[3]}</p>
              <img src="img/plus-button.png" alt="">
            </div>
            <div class="remove">
              <button id="shpcrtrembtn_${i}" type="button" name="button">remove</button>
            </div>
          </div>

        </div>

      </div>
    `);
  }
}

window.addEventListener("onload", refreshpurchases());

document.onclick = (event) => {
  if (event.target.id.slice(0, event.target.id.indexOf('_')) == 'shpcrtrembtn') {
    let id = event.target.id.slice(event.target.id.indexOf('_')+1);
    if ((parseInt(id) + 1) == localStorage.length) {
      localStorage.removeItem(id);
    } else {
      localStorage.removeItem(id);
      for (let i = parseInt(id); i < localStorage.length; i++) {
        let x = localStorage.getItem(i+1);
        localStorage.removeItem(i+1)
        localStorage.setItem(i, x);
      }
    }
    refreshpurchases();
  }
}
