import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div class="footer_box">
          <img
            className="drop_logo"
            alt="Drop logo"
            src="../images/logo/dropCI-white.png"
          ></img>
        </div>
        <div className="footer_box">
          <ul className="footer_detail">
            <li>About</li>
            <li>About Drop</li>
            <li>About Drop Studio</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
          <ul className="footer_detail">
            <li>DROP REFURBISHED</li>
            <li>Like-new products you can trust</li>
          </ul>
        </div>
        <div className="footer_box">
          <ul className="footer_detail">
            <li>Drop REWARDS</li>
            <li>Get $5 for every 500 points you earn! Learn more!</li>
          </ul>
          <ul className="footer_detail">
            <li>DROP KEYBOARD CLUB</li>
            <li>Become a member and expand</li>
            <li>your keycap collection</li>
          </ul>
        </div>
        <div className="footer_box">
          <ul className="footer_detail">
            <li>COLLABORATE WITH US</li>
            <li>For Brands &amp; Designers</li>
          </ul>
          <ul className="footer_detail">
            <li>SUPPORT</li>
            <li>Community Guidelines</li>
            <li>Help Center</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer_box">
          <ul className="footer_detail">
            <li>FOLLOW DROP</li>
          </ul>
          <ul className="footer_icon">
            <li>
              <img alt="instagram" src="../images/icon/instagram.png" />
            </li>
            <li>
              <img alt="twitter" src="../images/icon/twitter.png" />
            </li>
            <li>
              <img alt="facebook" src="../images/icon/facebook.png" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
