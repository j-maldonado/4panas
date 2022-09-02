import React from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.mp4'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import oferta1 from '../../media/img/oferta1.png'
import oferta2 from '../../media/img/oferta2.png'
import oferta3 from '../../media/img/oferta3.png'



const Cover = () => {
  return (
    <div className='cover-Container'>
      <video className="video" src={coverVideo} autoPlay loop muted />
      <Carousel className='carousel' autoPlay wrapAround={true} slidesToShow={3}>
        <div className='carouselimg'>
          <img src={oferta1} />
        </div>
        <div className='carouselimg'>
          <img src={oferta2} />

        </div>
        <div className='carouselimg'>
          <img src={oferta3} />

        </div>
      </Carousel>


    </div>
  )
}

export default Cover