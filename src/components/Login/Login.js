import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { api } from '../../config';
import './Login.scss';

const Login = ({ data, closeModal, dataConvert, setCurrentModal }) => {
  const { title, subtitle, facebook, google, btn, text, footer, url } = data;
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [idCheck, setIdCheck] = useState('');

  const saveLoginInfo = e => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const idCondition =
    loginInfo.email.includes('@') &&
    loginInfo.email.length > 5 &&
    loginInfo.email.includes('.');

  const idChecked = () => {
    if (loginInfo.email.length === 0) {
      setIdCheck('This field is required');
    } else if (!idCondition) {
      setIdCheck('Not a valid email address');
    } else {
      setIdCheck('');
    }
  };

  const loginFunction = e => {
    e.preventDefault();
    fetch(api[url], {
      method: 'POST',
      body: JSON.stringify({
        email: loginInfo.email,
        password: loginInfo.password,
      }),
    })
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
        throw new Error('통신 실패');
      })
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('access_token', data.access_token);
          closeModal();
        } else {
          setCurrentModal('login');
          alert('로그인을 해주세요.');
        }
      });
  };

  return (
    <>
      <div className="login">
        <div className="login_main">
          <div className="login_title">
            <h2>{title}</h2>
            <button onClick={closeModal} className="title_btn">
              X
            </button>
          </div>

          <div className="login_social">
            <span className="login_social_span">{subtitle}</span>
            <button className="facebook_btn">
              <FontAwesomeIcon icon={faFacebook} className="facebook" />
              {facebook}
            </button>
            <button className="google_btn">
              <FontAwesomeIcon icon={faGoogle} className="google" />
              {google}
            </button>
          </div>
          <div className="divide_line" />
          <form className="login_form">
            <div className="email_box">
              <span className="email_span">Email</span>
              <input
                type="text"
                className="login_id_input"
                placeholder="Email"
                name="email"
                onKeyUp={idChecked}
                onChange={saveLoginInfo}
              />
              <span className="email_warning">{idCheck}</span>
            </div>
            <div className="password_box">
              <span className="password_span">Password</span>
              <input
                type="password"
                className="login_pw_input"
                placeholder="Password"
                name="password"
                onChange={saveLoginInfo}
              />

              <span className="password_warning">
                {idCondition && loginInfo.password.length === 0
                  ? 'This field is required'
                  : ''}
              </span>
            </div>
          </form>
          <form className="login_continue_box">
            <button className="login_continue_btn" onClick={loginFunction}>
              {btn}
            </button>
          </form>
          <div className="login_footer">
            <span className="login_footer_span">{text}</span>
            <span className="login_footer_link" onClick={dataConvert}>
              {footer}
            </span>
          </div>
        </div>
      </div>
      <div className="overlay" />
    </>
  );
};

export default Login;
