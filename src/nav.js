import React from 'react';
import './nav.css';

class Nav extends React.Component {
    render() {
      return (
        <div>
          <ul className="navigation">
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre Mi</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#trabajos">Trabajos</a></li>
              <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      );
    }
  }

export default Nav;