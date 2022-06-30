import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = ({ productList, goToProductDetail }) => {
  return (
    <div className="productListWrapper">
      {productList && (
        <>
          {productList.map(productList => {
            return (
              <ProductCard key={productList.id} productList={productList} />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ProductList;
