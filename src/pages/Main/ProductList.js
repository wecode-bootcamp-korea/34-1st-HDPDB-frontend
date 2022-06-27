import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="productListWrapper">
      {PRUDUCTLISTINFO.map(el => {
        return (
          <ProductCard
            key={el.id}
            productTitle={el.productTitle}
            salePrice={el.salePrice}
            defaultPrice={el.defaultPrice}
            salePercent={el.salePercent}
            reviewCount={el.reviewCount}
            saleRate={el.saleRate}
            productImage={el.productImage}
          />
        );
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
    reviewCount: 35,
    saleRate: '',
    productImage: 'images/productList/BmcmXvwS0638Qf2xl47I_hd6xx-pc.webp',
  },
  {
    id: 2,
    productTitle: 'Massdrop x Sennheiser HD7XX Headphone',
    salePrice: 199,
    defaultPrice: 240,
    salePercent: 15,
    reviewCount: 34900,
    saleRate: 157800,
    productImage: 'images/productList/FAGRnp5rSoGYYAoZEJOW_wob PC.webp',
  },
  {
    id: 3,
    productTitle: 'SMSL SU-8s DAC',
    salePrice: 180,
    defaultPrice: 360,
    salePercent: '',
    reviewCount: 42,
    saleRate: 660,
    productImage:
      'images/productList/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.webp',
  },
  {
    id: 4,
    productTitle: 'JTK POlycalbonate Keycap Storage Trays:...',
    salePrice: 149,
    defaultPrice: 190,
    salePercent: 20,
    reviewCount: 4600,
    saleRate: 79300,
    productImage: 'images/productList/MWvTWr94RMerZfQr0kRy_0526.webp',
  },
  {
    id: 5,
    productTitle: 'Cherry MX RGB Mechanical Swith',
    salePrice: 149,
    defaultPrice: 190,
    salePercent: 20,
    reviewCount: 38,
    saleRate: 6900,
    productImage: 'images/productList/RcgDWTQITiqKcOhiwLGK_PC.webp',
  },
];

export default ProductList;
