import React from 'react';
import { useState } from 'react';
import './Filter.scss';
const Filter = () => {
  const [priceCheckList, setPriceCheckList] = useState([]);
  const [stockCheckList, setStockCheckList] = useState([]);
  return (
    <aside className="filter">
      <div className="category_section featured">
        <h3 className="category_title ">FEATURED</h3>
        <ul className="category_nav">
          {FEATURED_LIST.map(featured_nav_list => {
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
          {CATEGORIES.map(category_nav_list => {
            return (
              <li className="under_line" key={category_nav_list.id}>
                <div className="category_nav_list">
                  {category_nav_list.listName}
                  <span className="item_count">
                    ({category_nav_list.count})
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
          {SHOP_BY_PRICE.map(price_nav_list => {
            return (
              <li className="under_line" key={price_nav_list.id}>
                <div className="category_nav_list " key={price_nav_list.id}>
                  <input
                    type="checkBox"
                    class="filter_checkBox"
                    name="stock_filter"
                  />
                  {price_nav_list.listName}
                  <span className="item_count">({price_nav_list.count})</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="category_section shop_by_product_stage">
        <h3 className="category_title ">Available stock</h3>
        <ul className="category_nav">
          {SHOP_BY_PRODUCT_STAGE.map(stock_nav_list => {
            return (
              <li className="under_line" key={stock_nav_list.id}>
                <div className="category_nav_list">
                  <input
                    type="checkBox"
                    className="filter_checkBox"
                    name="stock_filter"
                  />
                  {stock_nav_list.listName}
                  <span className="item_count">({stock_nav_list.count})</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
const FEATURED_LIST = [
  { id: 1, listName: 'Ready-to-Ship Keycaps', count: 72 },
  { id: 2, listName: 'Exclusive Deals', count: 120 },
  { id: 3, listName: 'Ready-to-Ship GMK Keycaps', count: 55 },
  { id: 4, listName: 'MT3 BOGO–Buy One Get One Free', count: 75 },
  { id: 5, listName: 'Summer Staycation Sale', count: 66 },
  { id: 6, listName: 'Drop + Marvel', count: 23 },
  { id: 7, listName: 'Drop Icon Collection Keyboards', count: 132 },
  { id: 8, listName: 'Drop + The Lord of the Rings', count: 105 },
  { id: 9, listName: 'DCX Profile Collection', count: 22 },
];

const CATEGORIES = [
  { id: 1, listName: 'AUDIOPHIL', count: 87 },
  { id: 2, listName: 'Mechanical Keyboards', count: 288 },
  { id: 3, listName: 'More Community Picks', count: 3 },
];

const SHOP_BY_PRICE = [
  { id: 1, listName: 'Under $100', count: 237 },
  { id: 2, listName: '$100-$150', count: 99 },
  { id: 3, listName: 'Above $150', count: 33 },
];

const SHOP_BY_PRODUCT_STAGE = [
  { id: 1, listName: 'Stock', count: 79 },
  { id: 2, listName: 'Low Stock', count: 16 },
  { id: 3, listName: 'Out of Stock', count: 14 },
];

export default Filter;
