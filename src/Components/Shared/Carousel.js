import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Styles from '../../Styles/carousel.module.css';

export default function MyCarousel() {
  return (
    <div className={Styles.carouselWrapper}>
      <Carousel
        id="carouselExampleInterval"
        data-bs-ride="carousel"
        interval={1000}
        indicators={false} // we'll handle custom indicators below
      >
        <Carousel.Item>
          <img
            className={`d-block w-100 ${Styles.carouselImage}`}
            src="https://www.shutterstock.com/shutterstock/photos/80944735/display_1500/stock-vector-big-sale-promo-department-store-80944735.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${Styles.carouselImage}`}
            src="https://media.istockphoto.com/id/498301640/vector/big-sale-banner.jpg?s=612x612&w=0&k=20&c=fppPOZ3LZCyvtDUiy6tR52xDWofX52Fdu3a7Ltc_fVY="
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block w-100 ${Styles.carouselImage}`}
            src="https://www.freevector.com/uploads/vector/preview/23060/big_sale.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Custom Indicators */}
      <ol className={Styles.customIndicators}>
        <li data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleInterval" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleInterval" data-bs-slide-to="2"></li>
      </ol>
    </div>
  );
}
