import React from 'react';
import './cuatroElemResp.css';
import img_1 from './nema17-1.png';
import img_2 from './MaagGearPPU.png';

class CuatroElemResp extends React.Component {
    render() {
      return (
          <div className="cuatroElemenResp">
            <img alt="" src={img_1} className="cer-img-1" />
            <div className="cer-txt-0 cer-margen">
              <div className="cer-txt-1">
                  <h3 className="cer-txt-1">Black & White</h3>
                  <h1 className="cer-txt-2">100% RESPONSIVE</h1>
                  <h1 className="cer-txt-3">FROM HD TO MOBILE</h1>
                  <p className="cer-txt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..."</p>
                  <button type="button" className="cer-btn">Click Me!</button> 
              </div>
            </div>
            <div className="cer-txt-0 cer-margen-2">
              <div className="cer-txt-1">
                  <h3 className="cer-txt-1">Black & White</h3>
                  <h1 className="cer-txt-2">100% RESPONSIVE</h1>
                  <h1 className="cer-txt-3">FROM HD TO MOBILE</h1>
                  <p className="cer-txt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..."</p>
                  <button type="button" className="cer-btn">Click Me!</button> 
              </div>
            </div>
            <img alt="" src={img_2} className="cer-img-1" style={{background:"#eeeeee"}} />
          </div>
      );
    }
  }

export default CuatroElemResp;