import React from 'react';
import './App.css';
import Logo from './logo';
import Nav from './nav';
import Banner from './banner';
import AboutUs from './aboutUs';
import WhyChooseUs from './whyChooseUs';
import CuatroElemResp from './cuatroElemResp';
import Galeria_1 from './galeria_1';
import ContactUs from './contactUs';
import SobreMi_1 from './sobreMi_1';
import Tema from './tema';


  class App extends React.Component {
/*
  handleClick() {
    
    /*if(document.getElementById('navigation').style.display === 'none'){*/
     // document.getElementById('navigation').className += " agregar-flex";
    /*} else {
      document.getElementById('navigation').style.display = 'none';
    }
  }
*/
render() {
  return (
    <div className="App container">
      <header id="header">
        <Logo />
        <Nav />
        <button type="button" className="btn-menu"
                /*onClick={this.handleClick}*/ >
          <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-list" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </header>


      <Banner className="banner" name="home"/>


      <main>
        <AboutUs />
        <WhyChooseUs />
        <CuatroElemResp />
        <Galeria_1 />

      </main>


      <aside>
        <ContactUs />
        <SobreMi_1 />
      </aside>


      <footer>
        <Tema />
      </footer>
    </div>
  );
}
  }



var last_known_scroll_position = 0;
var ticking = false;

function doSomething(/*scroll_pos*/) {
  document.getElementById("header").style.backgroundColor = "#111111";
  document.getElementById("header").classList.remove("header-animacion-arriba");
  document.getElementById("header").className += " header-animacion-abajo";
  document.getElementById("header").style.top = "0px";
}
function doReverse(/*scroll_pos*/) {
  document.getElementById("header").style.backgroundColor = "#111111";
  document.getElementById("header").classList.remove("header-animacion-abajo");
  document.getElementById("header").className += " header-animacion-arriba";
  document.getElementById("header").style.top = "-80px";
}

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   /*var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   */
   /*if (st > lastScrollTop){*/
    if (window.scrollY > 50){
      // downscroll code
      doSomething();
   } else if(window.scrollY < 1){
      // upscroll code
      doReverse();
   }
   /*lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling*/
}, false);

export default App;