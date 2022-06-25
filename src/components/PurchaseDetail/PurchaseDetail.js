import React from 'react';

const PurchaseDetail = () => {
  return (
    <div className="purchase_detail">
      <div className="purchase_main">
        <div className="purchase_logo">
          <img src="/public/images/logo/dropCI-white.png" alt="logo" />
          <span>information > Shopping > Payment</span>
        </div>
        <div className="purchase_pay">
          <button className="shop_pay"> Shop</button>
          <button className="pay_pal"> PayPal</button>
          <button className="google_pay">G pay</button>
        </div>
        <div className="email_input_box">
          <span>Contact information</span>
          <input type="text" placeholder="Email" />
          <input type="checkbox" /> <span>Email me with news and offers</span>
          <div className="detail_input">
            <span>Shipping address</span>
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
          </div>
        </div>
      </div>
      <div className="purchase_cart"> </div>
    </div>
  );
};

export default PurchaseDetail;
