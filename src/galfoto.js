import React from 'react';
import './galfoto.css';
import img_1 from './nema17-1.png';

class Galfoto extends React.Component {
    render() {
      return (
          <div className="galfoto">
            <div className="galfoto-contenedor">
                <img alt="" src={this.props.imagen} className="gal-fot" />
            </div>
            
            <div className="galfoto-etiqueta">
                <h4 className="galfoto-titulo">{this.props.titulo}</h4>
                <p className="galfoto-texto">{this.props.texto}</p>
            </div>
          </div>
      );
    }
  }

export default Galfoto;