import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner01 from '../imagens/Banner01.jpg';
import Banner02 from '../imagens/Banner02.jpg';
import Banner03 from '../imagens/Banner03.png';


function Banner() {
    return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100" id="img-carrossel"
              src= { Banner01 }
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" id="img-carrossel"
              src= { Banner02 }
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" id="img-carrossel"
              src= { Banner03 }
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Banner