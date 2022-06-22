import React, { useState, useRef, useEffect } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  const TOTAL_SLIDE = 7;
  const [currentSlide, setcurrentSlide] = useState(0);
  const [headsetImage, setheadsetImage] = useState([]);
  const slideRef = useRef(0);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDE) {
      setcurrentSlide(0);
    } else {
      setcurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setcurrentSlide(TOTAL_SLIDE);
    } else {
      setcurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    console.log('ddd');
    fetch('/data/headsetData.json')
      .then(res => res.json()) // (2)
      .then(data => {
        setheadsetImage(data);
        console.log(data);
      });
  }, []);
  // useEffect(() => {
  //   slideRef.current.style.transition = 'all 0.5s ease-in-out';
  //   slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  // }, [currentSlide]);
  return (
    <div>
      <div className="product_container">
        <div className="product_image_main">
          <img alt="headset" src="../images/headset/headset1.jpg" />
          <div className="carousel_button">
            <button>
              <img alt="arrow-left" src="../images/icon/arrow-left.png" />
            </button>
            <button>
              <img alt="arrow-right" src="../images/icon/arrow-right.png" />
            </button>
          </div>
          <div className="product_image_page">
            <p>20/20</p>
          </div>
          <div className="product_image_sub">
            <div>
              <img alt="headset" src="../images/headset/headset2.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset3.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset4.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset5.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset2.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset2.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset3.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset4.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset5.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset2.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset3.jpg" />
            </div>
            <div>
              <img alt="headset" src="../images/headset/headset4.jpg" />
            </div>
          </div>
        </div>

        <div className="product_detail">
          <div className="product_name">
            <h1>DROP INVDROP INVDROP INVDROPINVDROPINV</h1>
          </div>
          <div className="product_price">
            <h1>85$</h1>
          </div>
          <div className="product_option">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
