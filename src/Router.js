import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../src/pages/Main/Main';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from '../src/components/Footer/Footer';
import Login from '../src/components/Login/Login';
import PurchaseDetail from './components/PurchaseDetail/PurchaseDetail';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/purchase/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
