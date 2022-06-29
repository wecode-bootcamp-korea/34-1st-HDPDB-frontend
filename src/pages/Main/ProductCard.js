import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';
const ProductCard = ({
  id,
  productTitle,
  productImage,
  rateCount,
  reviewCount,
  salePrice,
  defaultPrice,
  saleRate,
}) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    // navigate(`/purchase${procuctId}`);
  };
  return (
    <div className="product_card" onClick={goToProductDetail}>
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
          className="card_product_image"
          src={productImage}
          alt="productimage"
        />
        <h3 className="card_product_title">{productTitle}</h3>
        <div className="card_product_price">
          <span className="card_sale_price">${salePrice}</span>
          {defaultPrice !== null && (
            <div className="card_sale_info">
              <span className="card_default_price">${defaultPrice}</span>
            </div>
          )}
        </div>
        <div className="card_review_grade">
          <span className="review_star">★★★★★</span>
          <span className="reviwe_grade">{rateCount}</span>
        </div>
        <p className="free_return">Free Return in USA</p>
        <div className="card_sale_rate_info">
          <p className="product_review_count">Review {reviewCount}</p>
          <p className="product_sale_rate">{saleRate} sold</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
