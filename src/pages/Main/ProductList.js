import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = ({ productList, goToProductDetail }) => {
  return (
    <div className="productListWrapper">
      {productList.map(productList => {
        return (
          <ProductCard
            key={productList.id}
            id={productList.id}
            productTitle={productList.name}
            productImage={productList.thumbnail_image_url}
            rateCount={productList.rate_count}
            reviewCount={productList.review_count}
            salePrice={productList.discount_price}
            defaultPrice={productList.price}
            saleRate={productList.sold_count}
            goToProductDetail={goToProductDetail}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
