import React from 'react';
import './Filter.scss';
const Filter = () => {
  return (
    <aside className="filter">
      <div className="category-section featured">
        <h3 className="category-title ">FEATURED</h3>
        <ul className="category-nav">
          {FEATURED_LIST.map(el => {
            return (
              <div className="underLine">
                <li className="category-nav-list " key={el.id}>
                  {el.listName}
                  <span className="itemCount">({el.count})</span>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="category-section categories">
        <h3 className="category-title ">CATEGORIES</h3>
        <ul className="category-nav">
          {CATEGORIES.map(el => {
            return (
              <li className="category-nav-list " key={el.id}>
                {el.listName}
                <span className="itemCount">({el.count})</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="category-section shop_by_product_stage">
        <h3 className="category-title ">SHOP BY PRICE</h3>
        <ul className="category-nav">
          {SHOP_BY_PRICE.map(el => {
            return (
              <li className="category-nav-list " key={el.id}>
                <input type="checkbox" /> {el.listName}
                <span className="itemCount">({el.count})</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="category-section shop_by_product_stage">
        <h3 className="category-title ">SHOP BY PRODUCT STAGE</h3>
        <ul className="category-nav">
          {SHOP_BY_PRODUCT_STAGE.map(el => {
            return (
              <li className="category-nav-list " key={el.id}>
                <input type="checkbox" /> {el.listName}
                <span className="itemCount">({el.count})</span>
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
  { id: 1, listName: 'Under $50', count: 237 },
  { id: 2, listName: '$50-$100', count: 99 },
  { id: 3, listName: '$100-$250', count: 109 },
  { id: 4, listName: 'Above $250', count: 33 },
];

const SHOP_BY_PRODUCT_STAGE = [
  { id: 1, listName: 'In-Stocks', count: 79 },
  { id: 2, listName: 'Ships Soon', count: 16 },
  { id: 3, listName: 'Pre-Order', count: 14 },
];

export default Filter;
