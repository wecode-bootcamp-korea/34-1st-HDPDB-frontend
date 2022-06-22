import React, { useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [CartList, setCartList] = useState([]);

  fetch('/data/itemsData.json')
    .then(res => res.json())
    .then(data => setCartList(data));

  return (
    <div className="main">
      <div className="overlay" />
      <div className="cart">
        <div className="title">
          <div className="title_span_box">
            <span className="title_header"> YOUR CART</span>
            <span className="title_text">is empty! </span>
          </div>
          <button className="close_btn">X</button>
        </div>
        {/* <CartBtn /> */}
        <CartItems CartList={CartList} />
        <div className="total_price_box">
          <span className="total_text">Estimated total</span>
          <span className="total_price"> 22 </span>
        </div>
        <button className="checkout_btn">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;

const CartBtn = () => {
  return (
    <div className="btn_box">
      <button className="cart_firstbtn">
        SHOP DROP + THE LORD OF THE RINGS
      </button>
      <button className="cart_btn"> SHOP DROP + MARVEL</button>
      <button className="cart_btn"> SHOP DROP ICON COLLECTION KEYBOARDS</button>
    </div>
  );
};

const CartItems = ({ CartList }) => {
  return (
    <>
      {CartList.map(el => {
        return (
          <div className="items">
            <img src={el.img} alt="item" className="items_img" />
            <div className="items_description">
              <span className="items_name">{el.products}</span>
              <span className="items_option">
                {el.color}
                {` / `}
                {el.option}
              </span>
            </div>
            <div className="items_delete_price">
              <button className="items_remove">Remove</button>
              <span className="items_price">{el.price}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
