import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src="gambar1.jpg" alt="Gambar 1" />
        <p className="legend">Gambar 1</p>
      </div>
      <div>
        <img src="gambar2.jpg" alt="Gambar 2" />
        <p className="legend">Gambar 2</p>
      </div>
      <div>
        <img src="gambar3.jpg" alt="Gambar 3" />
        <p className="legend">Gambar 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;