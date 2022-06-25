import React from 'react';
import { useState } from 'react';
import Login from '../../components/Login/Login';

import './Main.scss';

const Main = () => {
  const [currentModal, setCurrentModal] = useState('');
  return (
    <div>
      <button onClick={() => setCurrentModal('login')}>log in </button>
      <button onClick={() => setCurrentModal('signup')}>sign up</button>
      {currentModal === 'login' && (
        <Login data={LOGIN_DATA} closeModal={() => setCurrentModal('')} />
      )}
      {currentModal === 'signup' && (
        <Login data={SIGNUP_DATA} closeModal={() => setCurrentModal('')} />
      )}
    </div>
  );
};

export default Main;
const SIGNUP_DATA = {
  title: 'GET $10 OFF',
  subtitle:
    'Sign up and get $10 off your first Drop Studio purchase. Check your inbox to redeem.',
  facebook: 'Continue WITH FACEBOOK',
  google: 'Continue with Google',
  btn: 'Continue',
  text: 'We will never spam you or sell your email to third parties.',
  footer: 'Already a member? Log In',
};

const LOGIN_DATA = {
  title: 'Log In To Drop',
  facebook: 'LOG IN WITH FACEBOOK',
  google: 'LOG IN WITH GOOGLE',
  btn: 'LOG IN',
  text: 'I FORGOT MY PASSWORD',
  footer: 'Not a member yet? Sign up',
};
