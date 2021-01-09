import React from 'react';
import './banner.css';
import aguila from './aguila-marcial.mp4';
import heli from './helicoptero-1.png';
import nema17 from './nema17-2.png';


    var color1 = '#ffffff';
    var color2 = '#ffffff22';
    var color3 = '#ffffff22';

class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state = {btnActivo: 'opcion1'};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(opcion){
    
    this.setState({
      btnActivo: opcion
      });
    this.cambiarColores(opcion);
  }
/*
    var color1 = '#ffffff';
    var color2 = '#ffffff22';
    var color3 = '#ffffff22';
*/
  cambiarColores(opcion){
    if(opcion === 'opcion1'){
      color1 = '#ffffff';
      color2 = '#ffffff22';
      color3 = '#ffffff22';

      document.getElementById('ban-titulo-container-1').style.display = 'flex';
      document.getElementById('ban-titulo-container-2').style.display = 'none';
      document.getElementById('ban-titulo-container-3').style.display = 'none';

      document.getElementById('ban-imagen-1').style.opacity = '1';
      document.getElementById('ban-imagen-2').style.opacity = '0';
      document.getElementById('ban-imagen-3').style.opacity = '0';
    }else if (opcion === 'opcion2'){
      color1 = '#ffffff22';
      color2 = '#ffffff';
      color3 = '#ffffff22';
      document.getElementById('ban-titulo-container-1').style.display = 'none';
      document.getElementById('ban-titulo-container-2').style.display = 'flex';
      document.getElementById('ban-titulo-container-3').style.display = 'none';

      document.getElementById('ban-imagen-1').style.opacity = '0';
      document.getElementById('ban-imagen-2').style.opacity = '1';
      document.getElementById('ban-imagen-3').style.opacity = '0';
    } else {
      color1 = '#ffffff22';
      color2 = '#ffffff22';
      color3 = '#ffffff';
      document.getElementById('ban-titulo-container-1').style.display = 'none';
      document.getElementById('ban-titulo-container-2').style.display = 'none';
      document.getElementById('ban-titulo-container-3').style.display = 'flex';

      document.getElementById('ban-imagen-1').style.opacity = '0';
      document.getElementById('ban-imagen-2').style.opacity = '0';
      document.getElementById('ban-imagen-3').style.opacity = '1';
    }
  }


    render() {
      return (
        <div className="banner">
          <video  className="ban-imagen" autoPlay muted loop={true} id="ban-imagen-1">
            <source src={aguila} type="video/mp4" />
          </video>
          <img alt="" src={heli} className="ban-imagen" id="ban-imagen-2"/>
          
          <img alt="" src={nema17} className="ban-imagen" id="ban-imagen-3"/>
          
          <div className="ban-z1">
            <div id="ban-titulo-container-1" className="ban-titulo-container">
              <h6 className="ban-subtitulo">MINIMAL REACT THEME</h6>
              <h1 className="ban-titulo">Experiencia de</h1>
              <h1 className="ban-titulo">Libertad Creativa</h1>
            </div>
            <div id="ban-titulo-container-2" className="ban-titulo-container">
              <h6 className="ban-subtitulo">OPTIMIZADO PARA DISPOSITIVO MÓVILES</h6>
              <h1 className="ban-titulo">Presentaciones</h1>
              <h1 className="ban-titulo">Web de Calidad</h1>
            </div>
            <div id="ban-titulo-container-3" className="ban-titulo-container">
              <h6 className="ban-subtitulo">EXPLORA NUEVOS MUNDOS CONCEPTUALES</h6>
              <h1 className="ban-titulo">Tecnología</h1>
              <h1 className="ban-titulo">Revolucionaria</h1>
            </div>

          </div>
          <div className="ban-z2">
          
            <button type="button" className="ban-boton" 
                    onClick={this.handleClick.bind(this,'opcion1')}
                    style= {{color:color1}}
                    >01</button>
            <button type="button" className="ban-boton"
                    onClick={this.handleClick.bind(this,'opcion2')}
                    style= {{color:color2}}
                     >02</button>
            <button type="button" className="ban-boton"
                    onClick={this.handleClick.bind(this,'opcion3')}
                    style= {{color:color3}}
                     >03</button>
          </div>
          <div className="ban-z3">
            <h3 className="ban-concepto" style= {{color:color1}}>Creatividad</h3>
            <h3 className="ban-concepto" style= {{color:color2}}>Calidad</h3>
            <h3 className="ban-concepto" style= {{color:color3}}>Concepto</h3>
          </div>

        </div>
      );
    }
  }

export default Banner;