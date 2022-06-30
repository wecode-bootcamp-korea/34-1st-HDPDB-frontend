import React, { useState } from 'react';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';
import './Nav.scss';
import '../Login/Login.scss';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [serchModal, setSearchModal] = useState(false);
  const [currentModal, setCurrentModal] = useState('');
  const navigate = useNavigate();
  const [cartModal, setCartModal] = useState('');
  const dataConvert = () => {
    if (currentModal === 'login') {
      setCurrentModal('signup');
    } else {
      setCurrentModal('login');
    }
  };

  const fuckingGoHome = () => {
    navigate('/');
  };
  const closeModal = () => {
    setCurrentModal('');
  };
  const closeCart = () => {
    setCartModal('');
  };

  const setSerchModalStatus = () => {
    setSearchModal(!serchModal);
  };

  return (
    <div className="nav">
      <div className="nav_menu">
        <h1 className="header_logo" onClick={fuckingGoHome}>
          <img
            className="leader_logo_image"
            src="/images/logo/dropCI-black.png"
            alt="drop logo"
          />
        </h1>
        <ul className="header_shop_nav">
          <li className="nav_underLine nav_shop" onClick={fuckingGoHome}>
            SHOP
          </li>
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
          <li className="header_cart" onClick={() => setCartModal('cart')}>
            <div className="header_cart_alert dotAlert" />
            <img src="/images/icon/icons8-shopping-cart-96.png" alt="search" />
          </li>
          {cartModal === 'cart' && (
            <Cart closeCart={closeCart} setCartModal={setCartModal} />
          )}
          <li
            className="header_login logout"
            onClick={() => setCurrentModal('login')}
          >
            LOG IN
          </li>
          {currentModal === 'login' && (
            <Login
              data={LOGIN_DATA}
              dataConvert={dataConvert}
              closeModal={closeModal}
              setCurrentModal={setCurrentModal}
            />
          )}

          <li
            className="header_signUp logout"
            onClick={() => setCurrentModal('signup')}
          >
            SIGN UP
          </li>
          {currentModal === 'signup' && (
            <Login
              data={SIGNUP_DATA}
              closeModal={closeModal}
              dataConvert={dataConvert}
              setCurrentModal={setCurrentModal}
            />
          )}
          <li className="header_user login">
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

const SIGNUP_DATA = {
  title: 'GET $10 OFF',
  subtitle:
    'Sign up and get $10 off your first Drop Studio purchase. Check your inbox to redeem.',
  facebook: 'Continue WITH FACEBOOK',
  google: 'Continue with Google',
  btn: 'Continue',
  text: 'We will never spam you or sell your email to third parties.',
  footer: 'Already a member? Log In',
  url: 'signUp',
};

const LOGIN_DATA = {
  title: 'Log In To Drop',
  facebook: 'LOG IN WITH FACEBOOK',
  google: 'LOG IN WITH GOOGLE',
  btn: 'LOG IN',
  text: 'I FORGOT MY PASSWORD',
  footer: 'Not a member yet? Sign up',
  url: 'signIn',
};
