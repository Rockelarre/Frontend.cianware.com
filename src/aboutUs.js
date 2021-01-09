import React from 'react';
import './aboutUs.css';
import doble_circulo from './doble-circulo.svg';


    var color1;
    var color2;
    var color3;
    var color4;
    var color5;
    var color6;

class AboutUs extends React.Component {

/*
  interval(){
    setInterval(function(){
        document.getElementById('circulito-1').style.height='100px';
    },1000,"JavaScript");
  }
*/

constructor(props){
  super(props);
  this.state = {btnActivo: 'opcion1'};

  this.handleMouse = this.handleMouse.bind(this);
}

handleMouse(opcion){
    
  this.setState({
    btnActivo: opcion
    });
  this.cambiarColores(opcion);
}
cambiarColores(opcion){
  if(opcion === 'opcion1'){
    color1 = 'MidnightBlue';
    color2 = 'black';
    color3 = 'black';
    color4 = 'black';
    color5 = 'black';
    color6 = 'black';

    document.getElementById('texto-central-1').style.display = 'flex';
    document.getElementById('texto-central-2').style.display = 'none';
    document.getElementById('texto-central-3').style.display = 'none';
    document.getElementById('texto-central-4').style.display = 'none';
    document.getElementById('texto-central-5').style.display = 'none';
    document.getElementById('texto-central-6').style.display = 'none';

  } else if (opcion === 'opcion2'){
    color1 = 'black';
    color2 = 'MidnightBlue';
    color3 = 'black';
    color4 = 'black';
    color5 = 'black';
    color6 = 'black';

    document.getElementById('texto-central-1').style.display = 'none';
    document.getElementById('texto-central-2').style.display = 'flex';
    document.getElementById('texto-central-3').style.display = 'none';
    document.getElementById('texto-central-4').style.display = 'none';
    document.getElementById('texto-central-5').style.display = 'none';
    document.getElementById('texto-central-6').style.display = 'none';
    
  } else if (opcion === 'opcion3'){
    color1 = 'black';
    color2 = 'black';
    color3 = 'MidnightBlue';
    color4 = 'black';
    color5 = 'black';
    color6 = 'black';
    
    document.getElementById('texto-central-1').style.display = 'none';
    document.getElementById('texto-central-2').style.display = 'none';
    document.getElementById('texto-central-3').style.display = 'flex';
    document.getElementById('texto-central-4').style.display = 'none';
    document.getElementById('texto-central-5').style.display = 'none';
    document.getElementById('texto-central-6').style.display = 'none';

  }  else if (opcion === 'opcion4'){
    color1 = 'black';
    color2 = 'black';
    color3 = 'black';
    color4 = 'MidnightBlue';
    color5 = 'black';
    color6 = 'black';
    
    document.getElementById('texto-central-1').style.display = 'none';
    document.getElementById('texto-central-2').style.display = 'none';
    document.getElementById('texto-central-3').style.display = 'none';
    document.getElementById('texto-central-4').style.display = 'flex';
    document.getElementById('texto-central-5').style.display = 'none';
    document.getElementById('texto-central-6').style.display = 'none';

  } else if (opcion === 'opcion5'){
    color1 = 'black';
    color2 = 'black';
    color3 = 'black';
    color4 = 'black';
    color5 = 'MidnightBlue';
    color6 = 'black';
    
    document.getElementById('texto-central-1').style.display = 'none';
    document.getElementById('texto-central-2').style.display = 'none';
    document.getElementById('texto-central-3').style.display = 'none';
    document.getElementById('texto-central-4').style.display = 'none';
    document.getElementById('texto-central-5').style.display = 'flex';
    document.getElementById('texto-central-6').style.display = 'none';

  } else {
    color1 = 'black';
    color2 = 'black';
    color3 = 'black';
    color4 = 'black';
    color5 = 'black';
    color6 = 'MidnightBlue';
  
    document.getElementById('texto-central-1').style.display = 'none';
    document.getElementById('texto-central-2').style.display = 'none';
    document.getElementById('texto-central-3').style.display = 'none';
    document.getElementById('texto-central-4').style.display = 'none';
    document.getElementById('texto-central-5').style.display = 'none';
    document.getElementById('texto-central-6').style.display = 'flex';
  }
}


    render() {
      return (
          <div className="aboutUs">
          <a name="sobre" id="sobre"></a>
            <div className="aboutUs-1">
                <h3 className="aU-1">Black & White</h3>
                <h1 className="aU-2">ABOUT US</h1>
                <p className="aU-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </div>
            <div className="aboutUs-2">
                <img alt="" src={doble_circulo} className="doble-circulo" />
                <div className="texto-central" id="texto-central-1">
                    <h2 className="tc-1">Brand New Features</h2>
                    <h4 className="tc-2">Competently transform proactive internal or “organic”.</h4>
                </div>
                <div className="texto-central" id="texto-central-2">
                    <h2 className="tc-1">Done Awesomely</h2>
                    <h4 className="tc-2">Quicquam fratrum declivia gravitate. Nam coegit alto unda.</h4>
                </div>
                <div className="texto-central" id="texto-central-3">
                    <h2 className="tc-1">100% Mobile Ready</h2>
                    <h4 className="tc-2">Pumero divino toto prima ensis. Cingebant uno pluvialibus.</h4>
                </div>
                <div className="texto-central" id="texto-central-4">
                    <h2 className="tc-1">Award Winning</h2>
                    <h4 className="tc-2">Nitidis locum auroram dissaepserat ulla dextra rapidisque.</h4>
                </div>
                <div className="texto-central" id="texto-central-5">
                    <h2 className="tc-1">New Technology</h2>
                    <h4 className="tc-2">Phosfluorescently redefine plug-and-play best practices.</h4>
                </div>
                <div className="texto-central" id="texto-central-6">
                    <h2 className="tc-1">Ultimate Solution</h2>
                    <h4 className="tc-2">Nam coegit alto unda austro liberioris effigiem?</h4>
                </div>
                <button type="button" className="circulitos circulito-1" id="circulito-1"
                        onMouseOver={this.handleMouse.bind(this,'opcion1')}
                        style= {{backgroundColor:color1}}
                >
                  <svg className="circ-icon" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                  </svg>
                </button>
                <button type="button" className="circulitos circulito-2" id="circulito-2"
                        onMouseOver={this.handleMouse.bind(this,'opcion2')}
                        style= {{backgroundColor:color2}}
                >
                  <svg className="circ-icon" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                </button>
                <button type="button" className="circulitos circulito-3" id="circulito-3"
                        onMouseOver={this.handleMouse.bind(this,'opcion3')}
                        style= {{backgroundColor:color3}}
                >
                  <svg className="circ-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
                  </svg>
                </button>
                <button type="button" className="circulitos circulito-4" id="circulito-4"
                        onMouseOver={this.handleMouse.bind(this,'opcion4')}
                        style= {{backgroundColor:color4}}
                >
                  <svg className="circ-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                  </svg>
                </button>
                <button type="button" className="circulitos circulito-5" id="circulito-5"
                        onMouseOver={this.handleMouse.bind(this,'opcion5')}
                        style= {{backgroundColor:color5}}
                >
                  <svg className="circ-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
                    <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                  </svg>
                </button>
                <button type="button" className="circulitos circulito-6" id="circulito-6"
                        onMouseOver={this.handleMouse.bind(this,'opcion6')}
                        style= {{backgroundColor:color6}}
                >
                  <svg className="circ-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM4.969 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75z"/>
                  </svg>
                </button>
            </div>
          </div>
      );
    }
  }

export default AboutUs;