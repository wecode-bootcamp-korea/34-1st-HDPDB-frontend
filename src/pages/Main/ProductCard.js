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
        <img src="image/productList/"></img>
      </div>
    </div>
  );
};

export default ProductCard;
