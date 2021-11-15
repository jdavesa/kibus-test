import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselOne from "../images/carousel-1.jpeg";
import carouselTwo from "../images/carousel-2.jpeg";
import carouselThree from "../images/carousel-3.jpeg";
import carouselFour from "../images/carousel-4.jpeg";

function CarouselElement() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselOne} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselTwo} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselThree} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselFour} alt="Four slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselElement;
