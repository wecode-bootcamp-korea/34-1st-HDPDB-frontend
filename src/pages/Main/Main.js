import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';
import ProductList from './ProductList';
import './Main.scss';

const Main = () => {
  const [selectBoxStatus, setSelectBoxStatus] = useState(false);
  const [selectSortOption, setSelectSortOPtion] = useState('RECOMMENDED');
  const [productList, setProductList] = useState([]);

  const [priceCheckList, setPriceCheckList] = useState([]);
  const [stockCheckList, setStockCheckList] = useState([]);

  useEffect(() => {
    fetch('data/productList.json')
      .then(productList => productList.json())
      .then(productList => {
        setProductList(productList);
      });
  }, []);

  const showSelectBox = () => {
    setSelectBoxStatus(!selectBoxStatus);
  };
  const navigate = useNavigate();

  const goToProductDetail = id => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="main">
      <div className="main_contents">
        <div className="main_header">
          <div className="header_titles">
            <h2 className="header_title">SHOP: READY-TO-SHIP KEYCAPS</h2>
            <p className="header_title_itemCount">100</p>
          </div>
          <div className="header_categories">
            <h3 className="header_category">All Products </h3>
            <span className="devideLine">/</span>
            <h3 className="header_category_name"> Ready-to-Ship Keycaps</h3>
          </div>
          <div className="filter_status">
            <img
              className="filter_status_icon"
              src="/images/icon/icons8-squared-menu-24.png"
              alt="category_filter_button"
            />
            <p className="filter_status_button">HIDE FILTERS</p>
          </div>
        </div>
        <div className="main_section">
          <Filter />
          <div className="productList">
            <div className="productList_banners">
              {BANNER.map(ad_banner => {
                return (
                  <div className="productList_banner" key={ad_banner.id}>
                    <img
                      className="productList_image"
                      src={ad_banner.imgURL}
                      alt={ad_banner.alt}
                    />
                    <h3 className="productList_banner_title">
                      {ad_banner.title}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className="product_sort_section">
              <div
                className="product_sort_select"
                onClick={showSelectBox}
                style={{
                  border: selectBoxStatus && '1px solid #222',
                }}
              >
                <p className="product_sort_select_select_option">
                  SHORT BY: {selectSortOption}
                </p>
                {selectBoxStatus ? (
                  <span className="sortMore_button">▲</span>
                ) : (
                  <span className="sortMore_button">▼</span>
                )}

                {selectBoxStatus && (
                  <div className="product_sort_select_optionBox">
                    {PRODUCTSORTLIST.map(product_sort_option => {
                      return (
                        <p
                          className="product_sort_select_option"
                          key={product_sort_option.id}
                          onClick={() => {
                            setSelectSortOPtion(product_sort_option.selectText);
                          }}
                        >
                          {product_sort_option.selectText}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <ProductList
              productList={productList}
              goToProductDetail={goToProductDetail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BANNER = [
  {
    id: 1,
    title: 'Mechanical Keyboards',
    alt: 'banner keyboard image',
    imgURL: '/images/pageBanner/keyboard.png',
  },
  {
    id: 2,
    title: 'Audiophile',
    alt: 'banner keyboard image',
    imgURL: '/images/pageBanner/headset.png',
  },
  {
    id: 3,
    title: 'Keycaps',
    alt: 'banner keyboard image',
    imgURL: '/images/pageBanner/keycap.png',
  },
];

const PRODUCTSORTLIST = [
  { id: 1, selectText: 'RECOMMENDED' },
  { id: 2, selectText: 'ORDER OF SALE' },
  { id: 3, selectText: 'DECENDING ORDER PRICE' },
  { id: 4, selectText: 'ASCENDING ORDER PRICE' },
];

export default Main;
