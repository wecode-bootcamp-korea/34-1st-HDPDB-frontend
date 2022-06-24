import React from 'react';
import './Main.scss';
import Filter from './Filter';

const Main = () => {
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
            <div className="productList_banner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const banner = [{ id: 1, text: 'Mechanical Keyboards', imgURL: '' }];

export default Main;
