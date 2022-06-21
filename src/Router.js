import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../src/pages/Main/Main';
import Nav from '../src/components/Nav/Nav';
import Cart from '../src/components/Cart/Cart';
import Purchase from '../src/components/Purchase/Purchase';
import Footer from '../src/components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
