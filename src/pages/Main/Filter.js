import React, { useEffect } from 'react';
import { useState } from 'react';
import './Filter.scss';

const Filter = ({ categoryList }) => {
  const [categoryName, setCategoryName] = useState([]);

  useEffect(() => {
    fetch('/data/mainData.json')
      .then(res => res.json())
      .then(res => setCategoryName(res));
  }, []);

  return (
    <aside className="filter">
      {categoryName.length !== 0 && (
        <>
          {' '}
          <div className="category_section featured">
            <h3 className="category_title ">FEATURED</h3>
            <ul className="category_nav">
              {categoryName[0].map(featured_nav_list => {
                return (
                  <li className="under_line" key={featured_nav_list.id}>
                    <div className="category_nav_list">
                      {featured_nav_list.listName}
                      <span className="item_count">
                        ({featured_nav_list.count})
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="category_section categories">
            <h3 className="category_title ">CATEGORIES</h3>
            <ul className="category_nav">
              {categoryName[1].map(featured_nav_list => {
                return (
                  <li className="under_line" key={featured_nav_list.id}>
                    <div className="category_nav_list">
                      {featured_nav_list.listName}
                      <span className="item_count">
                        ({featured_nav_list.count})
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="category_section shop_by_product_stage">
            <h3 className="category_title ">SHOP BY PRICE</h3>
            <ul className="category_nav">
              {categoryName[2].map(price_nav_list => {
                return (
                  <li className="under_line" key={price_nav_list.id}>
                    <div className="category_nav_list " key={price_nav_list.id}>
                      <input
                        type="checkBox"
                        className="filter_checkBox"
                        name="stock_filter"
                      />
                      {price_nav_list.listName}
                      <span className="item_count">
                        ({price_nav_list.count})
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="category_section shop_by_product_stage">
            <h3 className="category_title ">Available stock</h3>
            <ul className="category_nav">
              {categoryName[3].map(stock_nav_list => {
                return (
                  <li className="under_line" key={stock_nav_list.id}>
                    <div className="category_nav_list">
                      <input
                        type="checkBox"
                        className="filter_checkBox"
                        name="stock_filter"
                      />
                      {stock_nav_list.listName}
                      <span className="item_count">
                        ({stock_nav_list.count})
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </aside>
  );
};

export default Filter;
