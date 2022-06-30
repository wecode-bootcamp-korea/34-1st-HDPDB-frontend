import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGooglePay,
  faPaypal,
  faApplePay,
} from '@fortawesome/free-brands-svg-icons';
import './PurchaseDetail.scss';

const PurchaseDetail = () => {
  const [detailCart, setDetailCart] = useState([]);
  useEffect(() => {
    fetch('/data/itemsData.json')
      .then(res => res.json())
      .then(data => setDetailCart(data));
  }, []);

  return (
    <div className="purchase_detail">
      <div className="purchase_wrap">
        <div className="purchase_main">
          <div className="purchase_logo">
            <img src="/images/logo/dropCI-black.png" alt="logo" />
            <span>information - Shopping - Payment</span>
          </div>
          <div className="purchase_pay">
            <button className="shop_pay">
              <FontAwesomeIcon icon={faApplePay} />
            </button>
            <button className="pay_pal">
              <FontAwesomeIcon icon={faPaypal} />
              PayPal
            </button>
            <button className="google_pay">
              <FontAwesomeIcon icon={faGooglePay} />
            </button>
          </div>
          <div className="email_input_box">
            <span className="email_input_span">Contact information</span>
            <input type="text" placeholder="Email" />
            <div className="email_checkbox">
              <input type="checkbox" className="checkbox_input" />{' '}
              <span className="checkbox_span">
                Email me with news and offers
              </span>
            </div>

            <div className="detail_input">
              <span className="detail_span">Shipping address</span>
              <input type="text" placeholder="South Korea" />
              <input type="text" placeholder="Company (optional)" />
              <div className="name_input_box">
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="First name" />
              </div>
              <input type="text" placeholder="Postal code" />
              <div className="province_input_box">
                <input type="text" placeholder="Province" />
                <input type="text" placeholder="City" />
              </div>
              <input type="text" placeholder="O" />
              <input type="text" placeholder="Phone" />
              <div className="continue_box">
                <button className="continue_button">
                  Continue to shipping
                </button>
              </div>
              <div className="footer_box">
                <span>Subscription policy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="purchase_sidebar">
          {detailCart.map(items => {
            return (
              <div className="items" key={items.id}>
                <div className="items_quantity_box">
                  <span className="items_quantity">{items.quantity}</span>
                </div>
                <img src={items.img} alt="item" className="items_img" />
                <div className="items_description">
                  <span className="items_name">{items.products}</span>
                  <span className="items_option">
                    {`${items.color} / ${items.option}`}
                  </span>
                </div>
                <div className="items_delete_price">
                  <span className="items_price">
                    {(items.price * items.quantity).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </span>
                </div>
              </div>
            );
          })}
          <div className="sidebar_subtotal">
            <div className="subtotal_title_box">
              <span>Subtotal</span>
              <span>Shipping</span>
            </div>
            <div className="subtotal_detail_box">
              <span>
                {detailCart
                  .reduce((a, b) => {
                    return a + b.price * b.quantity;
                  }, 0)
                  .toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
              </span>
              <span>Calculated at next step</span>
            </div>
          </div>
          <div className="total_price_box">
            <span className="total_title">Total</span>
            <span className="total_price">
              {detailCart
                .reduce((a, b) => {
                  return a + b.price * b.quantity;
                }, 0)
                .toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetail;
