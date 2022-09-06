import React from "react";
import './Flwhatsapp.css'
import FloatingWhatsApp from 'react-floating-whatsapp'
import logo from '../../media/img/4panas-Logo.png'

const Flwhatsappc = () => {

  return (
    <div className="whatsappFl">
      <FloatingWhatsApp phoneNumber="+5491557558051" accountName="4 Panas Tech" avatar={logo} statusMessage='Activo' chatMessage='¡Hola! 😁 Bienvenido a 4 Panas Tech. Decime, ¿En que podemos ayudarte? 🤔' placeholder="Escribe un mensaje aqui..." darkMode='true' notification='true'  />
    </div>
  )
};

export default Flwhatsappc
