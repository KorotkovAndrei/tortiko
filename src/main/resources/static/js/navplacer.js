function placeNavbar() {
  let navbar = document.getElementById("nav-placeholder");
  navbar.insertAdjacentHTML('afterbegin', `

  <div id="line" class="line">
  </div>
  <nav id="navigationbar">
      <div  class="logo">
          <a href="/index.html"><h4 >TORTIKO</h4></a>
      </div>
      <ul id="nav-links" class="nav-links">
          <li id="home" class="home">
              <a  href="/index.html">Home</a>
          </li>
          <li id="about" class="about">
              <a  href="/index.html#about-us">About</a>
          </li>
          <li id="shop" class="shop">
              <a  href="/shop.html">Shop</a>
          </li>
          <li id="contact"  class="contact">
              <a href="/index.html#contacts">Contact</a>
          </li>
          <li></li>
          <li id="logine">
              <a class="login-nav" id='lgnButton'>Login</a>
          </li>
          <div>
              <a class="logout-nav hide" href='/logout' >Logout</a>
          </div>
          <li class="nav-shop-cart">
            <svg  viewBox="0 -31 512.00026 512" xmlns="http://www.w3.org/2000/svg"><path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"/><path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/><path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/></svg>
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
