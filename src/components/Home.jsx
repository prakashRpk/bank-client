
import { useState, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import {Carousel} from 'react-bootstrap';
import ExampleCarouselImage from "./ExampleCarouselImage"


import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Style.css';


function Home() {

  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" imagePath={img1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" imagePath={img2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" imagePath={img3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Home;
