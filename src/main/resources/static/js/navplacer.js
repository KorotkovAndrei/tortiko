function placeNavbar() {
  let navbar = document.getElementById("nav-placeholder");
  navbar.insertAdjacentHTML('afterbegin', `

  <div id="line" class="line">
  </div>
  <nav id="navigationbar">
      <div  class="logo">
          <h4>TORTIKO</h4>
      </div>
      <ul id="nav-links" class="nav-links">
          <li id="home" class="home">
              <a  href="/index.html">Home</a>
          </li>
          <li id="about" class="about">
              <a  href="#">About</a>
          </li>
          <li id="shop" class="shop">
              <a  href="/shop.html">Shop</a>
          </li>
          <li id="contact"  class="contact">
              <a href="#">Contact</a>
          </li>
          <li></li>
          <li id="logine">
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
