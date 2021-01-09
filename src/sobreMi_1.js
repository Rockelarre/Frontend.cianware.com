import React from 'react';
import './sobreMi_1.css';

class SobreMi_1 extends React.Component {
    render() {
      return (
          <div className="sobreMi_1">
            <div className="sm-1">
              <h2 className="sm-1-titulo">Sobre mí</h2>
              <p className="sm-1-texto">Soy un desarrollador Front-End apasionado por el Diseño.</p>
              <p className="sm-1-texto">Las imágenes mostradas en esta página son de mi autoría.</p>
              <p className="sm-1-texto">Mi trabajo artístico ronda entre el modelado 3D, dibujo vectorial y medios tradicionales como el grafito, tintas y acuarelas.</p>
            </div>
            <div className="sm-2">
              <div className="sm-2-contacto">
                <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <h1><a href="tel:+56967020377">+56 9 6702 0377</a></h1>
              </div>
              <div className="sm-2-contacto">
                <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
                <h1><a href="mailto:urocyan@gmail.com">urocyan@gmail.com</a></h1>
              </div>
            </div>
          </div>
      );
    }
  }

export default SobreMi_1;