import React, { useState, useEffect } from 'react';
import { CartLink } from './CartLink';
import { CartItems } from './CartItems';
import './Cart.scss';

const Cart = ({ closeCart }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('/data/itemsData.json')
      .then(res => res.json())
      .then(data => setCartList(data));
  }, []);

  const handleRemove = id => {
    const newList = cartList.filter(el => el.id !== id);
    setCartList(newList);
  };

  const quantityIncrease = id => {
    setCartList(el => {
      const result = el.map(listItem => {
        if (listItem.id === id) listItem.quantity += 1;
        return listItem;
      });
      return result;
    });
  };
  const quantityDecrease = id => {
    setCartList(el => {
      const result = el.map(listItem => {
        if (listItem.id === id) listItem.quantity -= 1;
        if (listItem.quantity === 0) handleRemove(listItem.id);
        return listItem;
      });
      return result;
    });
  };

  return (
    <div className="main">
      <div className="overlay" />
      <div className="cart">
        <div className="cart_header">
          <div className="title">
            <div className="title_span_box">
              <span className="title_header"> YOUR CART</span>
            </div>
            <button className="close_btn" onClick={closeCart}>
              X
            </button>
          </div>
          {cartList.length === 0 ? (
            <CartLink />
          ) : (
            <CartItems
              cartList={cartList}
              handleRemove={handleRemove}
              quantityIncrease={quantityIncrease}
              quantityDecrease={quantityDecrease}
            />
          )}
        </div>
        <div className="cart_footer">
          <div className="total_price_box">
            <span className="total_text">Estimated total</span>
            <span className="total_price">
              {cartList
                .reduce((a, b) => {
                  return a + b.price * b.quantity;
                }, 0)
                .toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
            </span>
          </div>
          <button className="checkout_btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
