function placeNavbar() {
  let navbar = document.getElementById("nav-placeholder");
  navbar.insertAdjacentHTML('afterbegin', `

  <nav>
      <div class="logo">
          <h4>TORTIKO</h4>
      </div>
      <ul class="nav-links">
          <li>
              <a href="#">Home</a>
          </li>
          <li>
              <a href="#">About</a>
          </li>
          <li class="shop">
              <a  href="/shop.html">Shop</a>
          </li>
          <li>
              <a href="#">Contact</a>
          </li>
          <li></li>
          <li>
              <a class="login-nav" id='lgnButton'>Login</a>
          </li>
          <li>
              <a class="logout-nav hide" href='/logout' >Logout</a>
          </li>
      </ul>
      <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
      </div>
  </nav>

  `)
}

window.addEventListener("onload", placeNavbar());
