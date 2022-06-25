import React, { useState, useRef, useEffect } from 'react';
import ProductMainCarousel from './ProductCarousel/ProductMainCarousel';
import ProductSubCarousel from './ProductCarousel/ProductSubCarousel';
import PRODUCT_DATA from './ProductData/ProductData';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [mainCarousel, setMainCarousel] = useState(0);
  const mainCarouselButton = () => {
    console.log('op');
    if (mainCarousel > -2000) {
      setMainCarousel(mainCarousel - 1100);
    } else {
      setMainCarousel(mainCarousel + 1100);
    }
  };
  //state 값을 어떻게 전달할지 생각해볼 것.
  const subCarouselButton = () => {};
  return (
    <div className="product-detail">
      <div className="product_container">
        <div className="product_thumbnail">
          <div className="product_image_main">
            {PRODUCT_DATA.map(value => (
              <ProductMainCarousel
                mainCarousel={mainCarousel}
                key={value.headphone_id}
                headphoneId={value.headphone_id}
                imgPath={value.imgPath}
              />
            ))}
            {/* <p>20/20</p> */}
          </div>
          <div className="carousel_button">
            <button onClick={mainCarouselButton}>
              <img alt="arrow-left" src="../images/icon/arrow-left.png" />
            </button>
            <button onClick={mainCarouselButton}>
              <img alt="arrow-right" src="../images/icon/arrow-right.png" />
            </button>
          </div>
          <div className="product_image_sub">
            {PRODUCT_DATA.map(value => (
              <ProductSubCarousel
                key={value.headphone_id}
                headphoneId={value.headphone_id}
                imgPath={value.imgPath}
              />
            ))}
          </div>
        </div>

        <div className="product_detail">
          <div className="product_name">
            <h1>DROP INVDROP INVDROP INVDROPINVDROPINV</h1>
          </div>
          <div className="product_price">
            <h2>85$</h2>
          </div>
          <div className="product_option">
            <p>Option</p>
            <select className="product_option_select">
              <option>Chicken</option>
              <option>Pizza</option>
              <option>Jockbal</option>
              <option>Bulgogi</option>
            </select>
          </div>
          <div className="product_purchase">
            <button>ADD TO BUTTON</button>
          </div>
        </div>
      </div>
      <div className="overview_container">
        <div className="overview_title">
          <span>OVERVIEW</span>
          <span>DETAILS</span>
          <span>REVIEWS</span>
          <span>PHOTOS</span>
          <span>DISCUSSION</span>
        </div>
      </div>
      <div className="overview_article_container">
        <div className="overview_article">
          <img src="../images/headset/headset1.jpg" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetail;
