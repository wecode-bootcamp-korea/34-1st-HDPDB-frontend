import React, { useState } from 'react';
import Filter from './Filter';
import ProductList from './ProductList';
import './Main.scss';

const Main = () => {
  const [selectBoxStatus, setSelectBoxStatus] = useState(false);
  const [selectSortOption, setSelectSortOPtion] = useState('RECOMMENDED');
  const showSelectBox = () => {
    setSelectBoxStatus(!selectBoxStatus);
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
              {BANNER.map(advertiseProduct => {
                return (
                  <div className="productList_banner" key={advertiseProduct.id}>
                    <img
                      className="productList_image"
                      src={advertiseProduct.imgURL}
                      alt={advertiseProduct.alt}
                    />
                    <h3 className="productList_banner_title">
                      {advertiseProduct.title}
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
                  border: selectBoxStatus ? '1px solid #222' : '',
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
                {/* !! === undefined, null, NaN ,"",0같은 data type을 명시적으로 boolean type으로 바꿔줄 때 */}
                {selectBoxStatus && (
                  <div className="product_sort_select_optionBox">
                    {PRODUCT_SORT_LIST.map(el => {
                      return (
                        <p
                          className="product_sort_select_option"
                          key={el.id}
                          onClick={() => {
                            setSelectSortOPtion(el.selectText);
                          }}
                        >
                          {el.selectText}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <ProductList />
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
    imgURL: '/images/pageBanner/10215_Keyboards_Yellow.webp',
  },
  {
    id: 2,
    title: 'Mechanical Keyboards',
    alt: 'banner keyboard image',
    imgURL: '/images/pageBanner/10008_Audiophile_Yellow.webp',
  },
  {
    id: 3,
    title: 'Mechanical Keyboards',
    alt: 'banner keyboard image',
    imgURL: '/images/pageBanner/16870_Mech-Keys-Builder_Yellow.webp',
  },
];

const PRODUCT_SORT_LIST = [
  { id: 1, selectText: 'RECOMMENDED' },
  { id: 2, selectText: 'ENDING BY' },
  { id: 3, selectText: 'NEWEST' },
  { id: 4, selectText: 'BEST REVIEWED' },
];

export default Main;
