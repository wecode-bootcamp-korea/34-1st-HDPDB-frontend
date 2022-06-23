import React, { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [serchModal, setSearchModal] = useState(false);

  const setSerchModalStatus = () => {
    setSearchModal(!serchModal);
  };

  return (
    <div className="nav">
      <div className="nav_menu">
        <h1 className="header_logo">
          <img
            className="leader_logo_image"
            src="/images/logo/dropCI-black.png"
            alt="drop logo"
          />
        </h1>
        <ul className="header_shop_nav">
          <li className="nav_underLine nav_shop">SHOP</li>
          <li className="nav_underLine nav_mechKeys">
            MECH_KEYS
            <ul className="header_sub_nav mechKyes_sub">
              {MECH_KEYS_SUB_MENU.map(menu => {
                return (
                  <li key={menu.id} className="mechKyesSub_menu nav_underLine">
                    {menu.menu}
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="nav_underLine nav_audophile">
            AUDIOPHILE
            <ul className="header_sub_nav community_sub">
              {COMMUNITY_SUB.map(menu => {
                return (
                  <li key={menu.id} className="communitySub_menu nav_underLine">
                    {menu.menu}
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="nav_underLine nav_community">COMMUNITY</li>
        </ul>
        <ul className="header_user_nav">
          <li className="header_search" onClick={setSerchModalStatus}>
            <img src="/images/icon/icons8-search-24.png" alt="search" />
          </li>
          <li className="header_alert">
            <div className="header_alert_alert dotAlert" />
            <img src="/images/icon/icons8-bell-24.png" alt="알람아이콘" />
          </li>
          <li className="header_cart">
            <div className="header_cart_alert dotAlert" />
            <img src="/images/icon/icons8-shopping-cart-96.png" alt="search" />
          </li>
          <li className="header_login">LOG IN</li>
          <li className="header_signUp">SIGN UP</li>
          <li className="header_user">
            <img src="/images/icon/icons8-user-96.png" alt="search" />
            <ul className="user_subMenu">
              <li className="user_subMenu_profile user_subMenu_line">
                Profile
              </li>
              <li className="user_subMenu_setting user_subMenu_line">
                Setting
              </li>
              <li className="user_subMenu_logOut user_subMenu_line">Logout</li>
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
            />
            <img
              className="serchBar_icon"
              src="/images/icon/icons8-search-24.png"
              alt="검색 아이콘"
            />
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;

const MECH_KEYS_SUB_MENU = [
  {
    id: 0,
    menu: 'Home',
  },
  {
    id: 1,
    menu: 'SHOP',
  },
  {
    id: 2,
    menu: 'COMMUNITY',
  },
  {
    id: 3,
    menu: 'CONFIGURATOR',
  },
  {
    id: 4,
    menu: 'BUILDER',
  },
  {
    id: 5,
    menu: 'KEYBOARD_CLUB',
  },
];

const COMMUNITY_SUB = [
  {
    id: 0,
    menu: 'Home',
  },
  {
    id: 1,
    menu: 'SHOP',
  },
  {
    id: 2,
    menu: 'COMMUNITY',
  },
];
