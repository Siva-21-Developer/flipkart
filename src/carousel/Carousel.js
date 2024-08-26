import { useState, useEffect } from "react";
import "./Carousel.css";
import Carouselitems from "./Carousel_items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const Carousel_items_details = [
    {
      imgs: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d80d231ad0c69ede.jpg?q=20",
    },
    {
      imgs: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/431f9e04380ecc24.jpg?q=20",
    },
    {
      imgs: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f871c3dec2984ff3.jpeg?q=20",
    },
    {
      imgs: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f07f2682bef851ce.jpeg?q=20",
    },
    {
      imgs: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b35a105fe8bc8cbb.png?q=20",
    },
    {
      imgs: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/dbe35331bd4aed24.jpg?q=20",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((preindex) =>
        preindex === Carousel_items_details.length - 1 ? 0 : preindex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [CurrentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Carousel_items_details.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Carousel_items_details.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="carousel-product">
        {Carousel_items_details.map((details, index) => (
          <Carouselitems
            key={index}
            details={{ ...details, isActive: index === CurrentIndex }}
          />
        ))}
        <div className="btn-container">
          <button onClick={handlePrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
