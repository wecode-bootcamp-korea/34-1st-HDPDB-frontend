import React from 'react';
import './ProductCard.scss';
const ProductCard = ({
  id,
  productTitle,
  salePrice,
  defaultPrice,
  salePercent,
  reviewCount,
  saleRate,
  productImage,
}) => {
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
          src={productImage}
          alt="productimage"
        />
        <h3 className="card_productTitle">{productTitle}</h3>
        <div className="card_productPrice">
          <span className="card_salePrice">${salePrice}</span>
          <div className="card_saleInfo">
            <span className="card_defaultPrice">${defaultPrice}</span>
            <span>|</span>
            <span className="card_salePercent">{salePercent}% OFF</span>
          </div>
        </div>
        <div className="card_reviewGrade">
          <span className="reviewStar">★★★★★</span>
          <span className="reviwGrade">139</span>
        </div>
        <p className="freeReturn">Free Return in USA</p>
        <div className="card_saleRateInfo">
          {!!reviewCount && (
            <p className="productReview_Count">Review {reviewCount}</p>
          )}
          {!!saleRate && <p className="product_saleRate">{saleRate} sold</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
