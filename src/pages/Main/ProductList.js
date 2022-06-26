import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="productListWrapper">
      {PRUDUCTLISTINFO.map(el => {
        return <ProductCard productTitle={el.productTitle} key={el.id} />;
      })}
    </div>
  );
};

const PRUDUCTLISTINFO = [
  {
    id: 1,
    productTitle: 'DROP + EPOS PC38X GAMING HEADSET',
    salePrice: 139,
    defaultPrice: 169,
    salePercent: 20,
  },
  {
    productTitle: 'DROP + EPOS PC38X GAMING HEADSET',
    salePrice: 139,
    defaultPrice: 169,
    salePercent: 20,
  },
  {
    productTitle: 'DROP + EPOS PC38X GAMING HEADSET',
    salePrice: 139,
    defaultPrice: 169,
    salePercent: 20,
  },
  {
    productTitle: 'DROP + EPOS PC38X GAMING HEADSET',
    salePrice: 139,
    defaultPrice: 169,
    salePercent: 20,
  },
];

export default ProductList;
