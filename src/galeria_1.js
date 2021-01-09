import React from 'react';
import './galeria_1.css';
import Galfoto from './galfoto';
import img_1 from './nema17-1.png';
import img_2 from './MaagGearPPU.png';
import img_3 from './helicoptero-1.png';
import img_4 from './Ratrod-1.jpg';
import img_5 from './FB-500.jpg';
import img_6 from './emex.svg';
import img_7 from './halcon-1.jpg';
import img_8 from './Shogun&Dago.jpg';
import img_9 from './BornToGrrrr.png';

class Galeria_1 extends React.Component {

  constructor(props){
    super(props);
    this.state = {btnActivo: 'opcion1'};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(opcion){
    this.setState({
      btnActivo: opcion
      });
    this.hacerAparecer(opcion);
  }


  hacerAparecer(opcion){
    
    var elemento_padre = document.getElementById('gal-fotos');

  var clonChild1 = elemento_padre.childNodes[0].cloneNode(true);
  var clonChild2 = elemento_padre.childNodes[1].cloneNode(true);
  var clonChild3 = elemento_padre.childNodes[2].cloneNode(true);
  var clonChild4 = elemento_padre.childNodes[3].cloneNode(true);
  var clonChild5 = elemento_padre.childNodes[4].cloneNode(true);
  var clonChild6 = elemento_padre.childNodes[5].cloneNode(true);
  var clonChild7 = elemento_padre.childNodes[6].cloneNode(true);
  var clonChild8 = elemento_padre.childNodes[7].cloneNode(true);
  var clonChild9 = elemento_padre.childNodes[8].cloneNode(true);

    var child1 = document.getElementById('gal-fotos').childNodes[0];
    var child2 = document.getElementById('gal-fotos').childNodes[1];
    var child3 = document.getElementById('gal-fotos').childNodes[2];
    var child4 = document.getElementById('gal-fotos').childNodes[3];
    var child5 = document.getElementById('gal-fotos').childNodes[4];
    var child6 = document.getElementById('gal-fotos').childNodes[5];
    var child7 = document.getElementById('gal-fotos').childNodes[6];
    var child8 = document.getElementById('gal-fotos').childNodes[7];
    var child9 = document.getElementById('gal-fotos').childNodes[8];

    switch (opcion) {
      case 1:
        document.getElementById('tresde-1').style = 'none';
        break;
      case 2:
        elemento_padre.removeChild(child4);
        elemento_padre.removeChild(child6);
        elemento_padre.removeChild(child7);
        elemento_padre.removeChild(child8);
        elemento_padre.removeChild(child9);
        break;
      case 3:

        elemento_padre.appendChild();

        if (document.contains(child1)) {
        elemento_padre.removeChild(child1);}
        if (document.contains(child2)) {
        elemento_padre.removeChild(child2);}
        if (document.contains(child3)) {
        elemento_padre.removeChild(child3);}
        if (document.contains(child4)) {
        elemento_padre.removeChild(child4);}
        if (document.contains(child5)) {
        elemento_padre.removeChild(child5);}
        if (document.contains(child6)) {
        elemento_padre.removeChild(child6);}
        if (document.contains(child7)) {
        elemento_padre.removeChild(child7);}
        if (document.contains(child8)) {
        elemento_padre.removeChild(child8);}
        if (document.contains(child9)) {
        elemento_padre.removeChild(child9);}

        elemento_padre.appendChild();
        break;
      case 4:

        break;
      case 5:

        break;
    } 
  }

    render() {
      return (
          <div className="galeria_1">
            <div className="gal-1-titulo">
                <hr className="hr-1"/>
                <h3 className="galt-1">Antes de ser programador me dedicaba a dibujar >:D</h3>
                <h1 className="galt-2">MI PORTAFOLIO GRAFICO</h1>
                <p className="galt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </div>
            <div className="gal-nav-0">
                <ul className="gal-nav">
                    <li><button type="button" className="gal-btn"
                          onClick={this.handleClick.bind(this,1)}>TODOS</button></li>
                    <li><button type="button" className="gal-btn"
                          onClick={this.handleClick.bind(this,2)}>MODELOS 3D</button></li>
                    <li><button type="button" className="gal-btn"
                          onClick={this.handleClick.bind(this,3)}>VECTORIAL</button></li>
                    <li><button type="button" className="gal-btn"
                          onClick={this.handleClick.bind(this,4)}>PINTURA</button></li>
                    <li><button type="button" className="gal-btn"
                          onClick={this.handleClick.bind(this,5)}>DIBUJO</button></li>
                </ul>
            </div>
            <div className="gal-fotos" id="gal-fotos">
                <Galfoto id="tresde-1" imagen={img_1} titulo="Nema-17" texto="Software: Blender 3d"/>
                <Galfoto id="tresde-2" imagen={img_2} titulo="Maag Gear PPU" texto="Software: 3DS Max"/>
                <Galfoto id="tresde-3" imagen={img_3} titulo="Helicoptero RC" texto="Software: Blender 3d"/>
                <Galfoto id="vectorial-1" imagen={img_4} titulo="Ratrod" texto="Software: Adobe Illustrator"/>
                <Galfoto id="tresde-4" imagen={img_5} titulo="Planta Tratamiento de Aguas" texto="Software: 3DS Max"/>
                <Galfoto id="vectorial-2" imagen={img_6} titulo="Logotipo EMEX" texto="Software: Inkscape"/>
                <Galfoto id="pintura-1" imagen={img_7} titulo="Halcón" texto="Técnica: Sumi-e"/>
                <Galfoto id="pintura-2" imagen={img_8} titulo="Shogún y Dago" texto="Técnica: Acuarela"/>
                <Galfoto id="dibujo-1" imagen={img_9} titulo="Born To Grrrr" texto="Técnica: Pluma Fuente"/>
            </div>
          </div>
      );
    }
  }

export default Galeria_1;