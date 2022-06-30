import React from 'react';
import './ProductCard.scss';
const ProductCard = ({ productList, goToProductDetail }) => {
  const {
    id,
    name,
    rate_count,
    review_count,
    sold_count,
    thumbnail_image_url,
    discount_price,
    price,
  } = productList;
  console.log(productList);
  return (
    <div
      className="product_card"
      onClick={() => goToProductDetail(id)}
      key={id}
    >
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
          src={thumbnail_image_url}
          alt="productimage"
        />
        <h3 className="card_product_title">{name}</h3>
        <div className="card_product_price">
          <span className="card_sale_price">${discount_price}</span>
          {discount_price !== null && (
            <div className="card_sale_info">
              <span className="card_default_price">${price}</span>
            </div>
          )}
        </div>
        <div className="card_review_grade">
          <span className="review_star">★★★★★</span>
          <span className="reviwe_grade">{rate_count}</span>
        </div>
        <p className="free_return">Free Return in USA</p>
        <div className="card_sale_rate_info">
          <p className="product_review_count">Review {review_count}</p>
          <p className="product_sale_rate">{sold_count} sold</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
