import React from 'react';
import './Cart.scss';

export const CartItems = ({
  cartList,
  handleRemove,
  quantityIncrease,
  quantityDecrease,
}) => {
  return (
    <>
      {cartList.map(el => {
        return (
          <div className="items" key={el.id}>
            <img src={el.img} alt="item" className="items_img" />
            <div className="items_description">
              <span className="items_name">{el.products}</span>
              <span className="items_option">
                {`${el.color} / ${el.option}`}
              </span>
              <div className="quantity_box">
                <button
                  type="button"
                  className="minus_btn"
                  onClick={e => quantityDecrease(el.id)}
                >
                  -
                </button>
                {el.quantity}
                <button
                  type="button"
                  className="plus_btn"
                  onClick={e => quantityIncrease(el.id)}
                >
                  +
                </button>
                {el.quantity === 0 && handleRemove(el.id)}
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
              <span className="items_price">
                {(el.price * el.quantity).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
