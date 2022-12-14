import React from 'react'
import './Cover.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import oferta1 from '../../media/img/oferta1.webp'
import oferta2 from '../../media/img/oferta2.webp'
import oferta3 from '../../media/img/oferta3.webp'



const Cover = () => {
  return (
    <div className="cover-Container">
      <div className="carousel-container" >
        <Carousel className="carousel" variant="dark" controls={false} interval={3000} wrap={true}>
          <Carousel.Item>
            <img className="d-block-w-100" src={oferta1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block-w-100" src={oferta2} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block-w-100" src={oferta3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Cover