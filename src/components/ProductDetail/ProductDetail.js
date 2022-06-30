import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductMainCarousel from './ProductCarousel/ProductMainCarousel';
import ProductSubCarousel from './ProductCarousel/ProductSubCarousel';
import PurchaseButton from './PurchaseButton';
import ProductPrice from './ProductPrice';
import PRODUCT_DATA from './ProductData/ProductData';
import OptionButton from './OptionButton';
import Cart from '../Cart/Cart';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const params = useParams();
  const [modal, setModal] = useState('');

  useEffect(() => {
    fetch(`data/headsetData.json`)
      // http://172.20.10.2:8000/products/detail/${params.productId}
      .then(response => response.json())
      .then(products => setProductInfo(products));
  }, [params.productId]);

  const navigation = useNavigate();
  const changeOption = () => {
    navigation(`purchase/${Number(params.productId)}`);
  };
  const addToCart = () => {
    setModal('cart');
  };
  const [mainCarousel, setMainCarousel] = useState(0);
  const [subCarousel, setSubCarousel] = useState(0);
  const leftCarouselButton = () => {
    if (mainCarousel === 0 && subCarousel === 0) {
      setMainCarousel(0);
      setSubCarousel(0);
    } else {
      setMainCarousel(mainCarousel + 1050);
      setSubCarousel(subCarousel + 160);
    }
  };

  const rightCarouselButton = () => {
    if (mainCarousel === 13650 && subCarousel === 1920) {
      setMainCarousel(13650);
      setSubCarousel(1920);
    } else {
      setMainCarousel(mainCarousel - 1050);
      setSubCarousel(subCarousel - 160);
    }
  };

  const purchaseSubmit = event => {
    event.preventDefault();
  };

  if (productInfo.length === 0) return <>Loadding</>;
  const arr = [];
  const {
    message: { product_info },
  } = productInfo;

  console.log(arr);
  return (
    <div className="product-detail">
      <div className="product_container">
        <div className="product_thumbnail">
          <div className="product_image_main">
            <ul className="main_carousel_box">
              {PRODUCT_DATA.map(products => (
                <ProductMainCarousel
                  mainCarousel={mainCarousel}
                  key={products.id}
                  headphoneId={products.headphone_id}
                  imgPath={products.imgPath}
                />
              ))}
            </ul>
          </div>
          <div className="carousel_button">
            <button onClick={leftCarouselButton}>
              <img alt="arrow-left" src="../images/icon/arrow-left.png" />
            </button>
            <button onClick={rightCarouselButton}>
              <img alt="arrow-right" src="../images/icon/arrow-right.png" />
            </button>
          </div>

          <div className="product_image_sub">
            <ul className="sub_carousel_box">
              {PRODUCT_DATA.map(products => (
                <ProductSubCarousel
                  key={products.id}
                  subCarousel={subCarousel}
                  headphoneId={products.headphone_id}
                  imgPath={products.imgPath}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="product_detail">
          <div className="product_name">
            <h1>{productInfo.message.name}</h1>
          </div>
          <div className="product_price">
            <h2>
              <ProductPrice productInfo={productInfo} />
            </h2>
          </div>
          <div className="product_option">
            <p>Case Color</p>

            <OptionButton
              changeOption={changeOption}
              productInfo={productInfo}
            />

            <p>Switch Type</p>
            <div className="product_option_select">
              <form onSubmit={purchaseSubmit}>
                <PurchaseButton
                  changeOption={changeOption}
                  productInfo={productInfo}
                />
                <button className="product_purchase" onClick={addToCart}>
                  ADD TO CART
                </button>
                {modal === 'cart' && <Cart />}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="icon_container"></div>
      <div className="overview_container">
        <div className="overview_title">
          <span>
            <button>OVERVIEW</button>
          </span>
          <span>
            <button>DETAILS</button>
          </span>
          <span>
            <button>REVIEWS({productInfo.message.review_count})</button>
          </span>
          <span>
            <button>PHOTOS</button>
          </span>
          <span>
            <button>DISCUSSION</button>
          </span>
        </div>
      </div>
      <div className="overview_article_container">
        <div className="overview_article">
          <div className="overview_article_section">
            <div className="overview_article_section_main">
              <h1>{productInfo.message.name}</h1>
            </div>
            <div className="overview_article_section_sub">
              <p>{productInfo.message.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
