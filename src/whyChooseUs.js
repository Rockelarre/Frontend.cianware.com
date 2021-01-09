import React from 'react';
import './whyChooseUs.css';
import Capsula_1 from './capsula_1';
import img_1 from './icon-modelo-3d.svg';
import img_2 from './icon-javascript.svg';
import img_3 from './icon-react.svg';
import img_4 from './icon-html5.svg';
import img_5 from './icon-css3.svg';

class WhyChooseUs extends React.Component {


  
    handleClick_izq(){

        var parentElement = document.getElementById('caps-parent');

        var child1 = parentElement.childNodes[0];
        var child2 = parentElement.childNodes[1];
        var child3 = parentElement.childNodes[2];
        var child4 = parentElement.childNodes[3];
        var child5 = parentElement.childNodes[4];

        var clonChild1 = parentElement.childNodes[0].cloneNode(true);
        var clonChild2 = parentElement.childNodes[1].cloneNode(true);
        var clonChild3 = parentElement.childNodes[2].cloneNode(true);
        var clonChild4 = parentElement.childNodes[3].cloneNode(true);
        var clonChild5 = parentElement.childNodes[4].cloneNode(true);

        clonChild1.classList.remove("movimiento-der");
        clonChild2.classList.remove("movimiento-der");
        clonChild3.classList.remove("movimiento-der");
        clonChild4.classList.remove("movimiento-der");
        clonChild5.classList.remove("movimiento-der");

        parentElement.replaceChild(clonChild1,child2);
        parentElement.replaceChild(clonChild2,child3);
        parentElement.replaceChild(clonChild3,child4);
        parentElement.replaceChild(clonChild4,child5);
        parentElement.replaceChild(clonChild5,child1);

        clonChild1.className += " movimiento-izq";
        clonChild2.className += " movimiento-izq";
        clonChild3.className += " movimiento-izq";
        clonChild4.className += " movimiento-izq";
        clonChild5.className += " movimiento-izq";
        
    }

    handleClick_der(){

      var parentElement = document.getElementById('caps-parent');

      var child1 = parentElement.childNodes[4];
      var child2 = parentElement.childNodes[3];
      var child3 = parentElement.childNodes[2];
      var child4 = parentElement.childNodes[1];
      var child5 = parentElement.childNodes[0];

      var clonChild1 = parentElement.childNodes[4].cloneNode(true);
      var clonChild2 = parentElement.childNodes[3].cloneNode(true);
      var clonChild3 = parentElement.childNodes[2].cloneNode(true);
      var clonChild4 = parentElement.childNodes[1].cloneNode(true);
      var clonChild5 = parentElement.childNodes[0].cloneNode(true);

      clonChild1.classList.remove("movimiento-izq");
      clonChild2.classList.remove("movimiento-izq");
      clonChild3.classList.remove("movimiento-izq");
      clonChild4.classList.remove("movimiento-izq");
      clonChild5.classList.remove("movimiento-izq");

      parentElement.replaceChild(clonChild1,child2);
      parentElement.replaceChild(clonChild2,child3);
      parentElement.replaceChild(clonChild3,child4);
      parentElement.replaceChild(clonChild4,child5);
      parentElement.replaceChild(clonChild5,child1);


      clonChild1.className += " movimiento-der";
      clonChild2.className += " movimiento-der";
      clonChild3.className += " movimiento-der";
      clonChild4.className += " movimiento-der";
      clonChild5.className += " movimiento-der";

  }

    render() {
      return (
          <div className="whyChooseUs">
            <div className="whyChooseUs-1">
                <h1 className="wCh-1">MIS HABILIDADES</h1>
            </div>
            <div className="whyChooseUs-20">
              <div className="whyChooseUs-21">

                <button type="button" className="btn-chevron"
                        onClick={this.handleClick_izq}
                >
                  <svg className="icon-chevron" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </button>
              </div>
              <div className="whyChooseUs-22-front">

              </div>
              
              <div className="whyChooseUs-22-back" id="caps-parent">
                <Capsula_1 id="caps-child-1" imagen={img_1} titulo="DISEÑO 3D Y VECTORIAL" texto="Lorem ipsum dolor sit amet, consectetur adipiscing integer solades vel eros quis consequat."/>
                <Capsula_1 id="caps-child-2" imagen={img_2} titulo="PROGRAMACION JAVASCRIPT" texto="Lorem ipsum dolor sit amet, consectetur adipiscing integer solades vel eros quis consequat."/>
                <Capsula_1 id="caps-child-3" imagen={img_3} titulo="DESARROLLO REACT" texto="Lorem ipsum dolor sit amet, consectetur adipiscing integer solades vel eros quis consequat."/>
                <Capsula_1 id="caps-child-4" imagen={img_4} titulo="MAQUETACIÓN HTML" texto="Lorem ipsum dolor sit amet, consectetur adipiscing integer solades vel eros quis consequat."/>
                <Capsula_1 id="caps-child-5" imagen={img_5} titulo="ESTILOS CSS" texto="Lorem ipsum dolor sit amet, consectetur adipiscing integer solades vel eros quis consequat."/>
              </div>
              <div className="whyChooseUs-23">
                <button type="button" className="btn-chevron"
                onClick={this.handleClick_der}
                >
                  <svg className="icon-chevron" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>                </svg>
                </button>
              </div>
            </div>
          </div>
      );
    }
  }

export default WhyChooseUs;