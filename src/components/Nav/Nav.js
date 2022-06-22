import React, { useEffect, useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [serchModal, setSearchModal] = useState(false);

  useEffect(() => {});
  return (
    <div className="Nav">
      <div className="nav_menu">
        <h1 className="header_logo">
          <img
            className="leader_logo_image"
            src="/images/logo/dropCI-black.png"
            alt="DROP LOGO"
          />
        </h1>
        <ul className="header_shop_nav">
          <li className="nav_shop">SHOP</li>
          <li className="nav_mechKeys">
            MECH KEYS
            <ul className="header_sub_nav mechKyes_sub">
              <li>HOME</li>
              <li>SHOP</li>
              <li>COMMUNITY</li>
              <li>CONFIGURATOR</li>
              <li>BUILDER</li>
              <li>KEYBOARD_CLUB</li>
            </ul>
          </li>
          <li className="nav_audophile">
            AUDIOPHILE
            <ul className="header_sub_nav community_sub">
              <li>HOME</li>
              <li>SHOP</li>
              <li>COMMUNITY</li>
            </ul>
          </li>
          <li className="nav_community">COMMUNITY</li>
        </ul>
        <ul className="header_user_nav">
          <li
            className="header_search"
            onClick={() => {
              setSearchModal(!serchModal);
            }}
          >
            <img src="/images/icon/icons8-search-24.png" alt="search" />
          </li>
          <li className="header_alert">
            <div className="header_alert_alert dotAlert"></div>
            <img src="/images/icon/icons8-bell-24.png" />
          </li>
          <li className="header_cart">
            <div className="header_cart_alert dotAlert"></div>
            <img src="/images/icon/icons8-shopping-cart-96.png" alt="search" />
          </li>
          <li className="header_login">LOG IN</li>
          <li className="header_signUp">SIGN UP</li>
          <li className="header_user">
            <img src="/images/icon/icons8-user-96.png" alt="search" />
            <ul className="user_subMenu">
              <li className="user_subMenu_profile">Profile</li>
              <li className="user_subMenu_setting">Setting</li>
              <li className="user_subMenu_logOut">Logout</li>
            </ul>
          </li>
        </ul>
      </div>
      {serchModal ? (
        <div className="serchBar_section">
          <form className="serchBar_form">
            <input
              className="serchBar_input"
              type="text"
              placeholder="Search..."
            ></input>
            <img
              className="serchBar_icon"
              src="/images/icon/icons8-search-24.png"
            ></img>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
