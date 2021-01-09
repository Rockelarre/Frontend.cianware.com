import React from 'react';
import './capsula_1.css';

class Capsula_1 extends React.Component {
    render() {
      return (
          <div className="capsula-1">
            <img alt="" src={this.props.imagen} className="caps-imagen"/>
            <div className="caps-contenedor">
                <h4 className="cap-titulo">{this.props.titulo}</h4>
                <p className="cap-texto">{this.props.texto}</p>
            </div>
          </div>
      );
    }
  }

export default Capsula_1;