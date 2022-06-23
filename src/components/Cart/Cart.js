import React, { useState, useEffect } from 'react';
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

  // setCartList(items => {
  //   return items.filter(el => {
  //     return el.id !== id;
  //   });
  // });
  return (
    <div className="main">
      <div className="overlay" />
      <div className="cart">
        <div className="cart_header">
          <div className="title">
            <div className="title_span_box">
              <span className="title_header"> YOUR CART</span>
              <span className="title_text">is empty! </span>
            </div>
            <button className="close_btn" onClick={closeCart}>
              X
            </button>
          </div>
          {/* <CartBtn /> */}
          <CartItems cartList={cartList} handleRemove={handleRemove} />
        </div>
        <div className="cart_footer">
          <div className="total_price_box">
            <span className="total_text">Estimated total</span>
            <span className="total_price"> 22 </span>
          </div>
          <button className="checkout_btn">CHECKOUT</button>
        </div>
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

const CartItems = ({ cartList, handleRemove }) => {
  return (
    <>
      {cartList.map(el => {
        return (
          <div className="items" key={el.id}>
            <img src={el.img} alt="item" className="items_img" />
            <div className="items_description">
              <span className="items_name">{el.products}</span>
              <span className="items_option">
                {el.color}
                {` / `}
                {el.option}
              </span>
              <div className="count_btn">
                {' '}
                <button>-</button> {el.amount} <button>+</button>{' '}
              </div>
            </div>
            <div className="items_delete_price">
              <button
                type="button"
                className="items_remove"
                onClick={() => {
                  handleRemove(el.id);
                }}
              >
                Remove
              </button>
              <span className="items_price">{el.price}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
