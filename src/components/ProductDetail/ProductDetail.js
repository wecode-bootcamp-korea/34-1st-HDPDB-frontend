import React, { useState } from 'react';
import ProductMainCarousel from './ProductCarousel/ProductMainCarousel';
import ProductSubCarousel from './ProductCarousel/ProductSubCarousel';
import PurchaseButton from './PurchaseButton';
import ProductPrice from './ProductPrice';
import PRODUCT_DATA from './ProductData/ProductData';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [mainCarousel, setMainCarousel] = useState(0);
  const [subCarousel, setSubCarousel] = useState(0);
  const leftCarouselButton = () => {
    if (mainCarousel === 0 && subCarousel === 0) {
      setMainCarousel(0);
      setSubCarousel(0);
      console.log(PRODUCT_DATA);
    } else {
      setMainCarousel(mainCarousel + 1050);
      setSubCarousel(subCarousel + 160);
    }
  };

  const rightCarouselButton = () => {
    //10000은 img width * img 갯수로 정해질 예정임.
    //if(carousel값이 img width * img 갯수보다 클 때 안움직이게 할 예정.)
    if (mainCarousel > 10000 && subCarousel > 10000) {
      setMainCarousel(mainCarousel => mainCarousel + 0);
      setSubCarousel(subCarousel => subCarousel + 0);
    } else {
      setMainCarousel(mainCarousel - 1050);
      setSubCarousel(subCarousel - 160);
    }
  };

  const purchaseSubmit = event => {
    event.preventDefault();
  };

  //state 값을 어떻게 전달할지 생각해볼 것.

  return (
    <div className="product-detail">
      <div className="product_container">
        <div className="product_thumbnail">
          <div className="product_image_main">
            <ul className="main_carousel_box">
              {PRODUCT_DATA.map(value => (
                <ProductMainCarousel
                  mainCarousel={mainCarousel}
                  key={value.id}
                  headphoneId={value.headphone_id}
                  imgPath={value.imgPath}
                />
              ))}
            </ul>

            {/* <p>20/20</p> */}
          </div>
          <div className="carousel_button">
            <button onClick={leftCarouselButton}>
              <img alt="arrow-left" src="../images/icon/arrow-left.png" />
            </button>
            <button onClick={rightCarouselButton}>
              <img alt="arrow-right" src="../images/icon/arrow-right.png" />
            </button>
          </div>
          {/* <div className="yellow_square"></div> */}
          <div className="product_image_sub">
            <ul className="sub_carousel_box">
              {PRODUCT_DATA.map(value => (
                <ProductSubCarousel
                  key={value.id}
                  subCarousel={subCarousel}
                  headphoneId={value.headphone_id}
                  imgPath={value.imgPath}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="product_detail">
          <div className="product_name">
            <h1>DROP INVDROP INVDROP INVDROPINVDROPINV</h1>
          </div>
          <div className="product_price">
            <h2>
              {/* {PRODUCT_DATA.map(value => (
                <ProductPrice key={value.id} price={value.price} />
              ))} */}
              <ProductPrice />
            </h2>
          </div>
          <div className="product_option">
            <p>Option</p>
            <div className="product_option_select">
              {/* map을 돌려서 데이터를 받아서 옵션을 선택하게 한다. */}
              <form onSubmit={purchaseSubmit}>
                <PurchaseButton mainCarousel={mainCarousel} />
                <PurchaseButton mainCarousel={mainCarousel} />
                <PurchaseButton mainCarousel={mainCarousel} />
                <PurchaseButton mainCarousel={mainCarousel} />
                <div className="product_purchase">
                  <button>ADD TO BUTTON</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* footer에 있는 icon component를 사용할 예정입니다. */}
      <div className="icon_container"></div>
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
          <div className="overview_article_section">
            <div className="overview_article_section_main">
              <h1>May be Article Title1</h1>
            </div>
            <div className="overview_article_section_sub">
              <p>
                dlajdadadsdlajdadad sdlajdadadsdla jdadadsdl ajda
                dadsdlajdadadsdlajdadadsdlajdadadsdlajdadadsdlajdadadsdlajdadads
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetail;
