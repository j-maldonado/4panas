import React from "react";
import "./cards.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import monitor from "../../media/img/Monitor.png";
import notebook from "../../media/img/Notebook.png";
import headset from '../../media/img/headset.png'
import placavideo from '../../media/img/placavideo.png'
import ram from '../../media/img/ram.png'
import gabinete from '../../media/img/gabinete.png'

const Cards = () => {
  return (
      <div>
        <h2>Buscar por Categoria</h2>
      <CardGroup>
        
        <Card id='cards' text='light' className="text-center">
          <Card.Img variant="top" src={monitor} />
            <Card.Title>Monitores</Card.Title>
        </Card>

        <Card id='cards' text='light' className="text-center">
          <Card.Img variant="top" src={notebook} />
            <Card.Title>Notebooks</Card.Title>
        </Card>
        
        <Card id='cards' text='light' className="text-center">
          <Card.Img variant="top" src={headset} />
            <Card.Title>Headsets</Card.Title>
        </Card>

        <Card id='cards' text='light' className="text-center">
          <Card.Img variant="top" src={placavideo} />
            <Card.Title>Placas de Video</Card.Title>
        </Card>

        <Card id='cards' text='light' className="text-center">
          <Card.Img variant="top" src={ram} />
            <Card.Title>Memorias Ram</Card.Title>
        </Card>

        <Card id='cards' text='light' className="text-center">
          <Card.Img variant="top" src={gabinete} />
            <Card.Title>Gabinetes</Card.Title>
        </Card>

      </CardGroup>
      </div>
  );
};

export default Cards;
