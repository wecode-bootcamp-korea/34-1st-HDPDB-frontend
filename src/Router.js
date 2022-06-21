import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../src/pages/Main/Main';
import Nav from '../src/components/Nav/Nav';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from '../src/components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Nav />
        <Route path="/main" element={<Main />} />
        <Route path="/purchase" element={<ProductDetail />} />
        <Footer />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
