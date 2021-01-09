import React from 'react';
import './contactUs.css';
import img_contact from './leon-1.jpg';

class ContactUs extends React.Component {
    render() {
      return (
          <div className="contactUs">
            <img alt="" src={img_contact} className="contact-img"/>
            <h4 className="contact-text-1">Este es un ejemplo, la funcionalidad aún no está implementada.</h4>
            <h1 className="contact-text-2">FORMULARIO DE CONTACTO</h1>
            <form className="contact-form">
                <input defaultValue="Name*" type="text" className="contact-txt"></input>
                <input defaultValue="Email@email.com" type="email" className="contact-txt"></input>
                <input defaultValue="Subject" type="text" className="contact-txt"></input>
                <textarea defaultValue="Message*" className="contact-txtarea"></textarea>
                <button type="button" className="contact-btn">SEND MAIL</button>
            </form>
          </div>
      );
    }
  }

export default ContactUs;