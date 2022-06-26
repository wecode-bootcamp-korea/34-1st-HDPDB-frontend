import React from 'react';
import './ProductCard.scss';
const ProductCard = () => {
  return (
    <div className="productCard">
      <div className="card_header">
        <div className="card_icon_box">
          <img
            className="card_icon"
            src="./images/logo/drop-favicon.svg"
            alt="product list drop logo icon"
          />
        </div>
      </div>
      <div className="card_contents">
        <img
          className="card_productImage"
          src="images/productList/BmcmXvwS0638Qf2xl47I_hd6xx-pc.webp"
        ></img>
        <h3 className="card_productTitle">Drop + EPOS PC38X Gaming Headset</h3>
        <div className="card_productPrice">
          <span className="card_salePrice">$139</span>
          <div className="card_saleInfo">
            <span className="card_defaultPrice">$169</span> <span>|</span>
            <span className="card_salePercent">20% OFF</span>
          </div>
        </div>
        <div className="card_reviewGrade">
          <span className="reviewStar">★★★★★</span>
          <span className="reviwGrade">139</span>
        </div>
        <p className="freeReturn">Free Return in USA</p>
        <div className="card_saleRateInfo">
          <p className="productReview_Count">Review 7.6K</p>
          <p className="product_saleRate">79.3k sold</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
