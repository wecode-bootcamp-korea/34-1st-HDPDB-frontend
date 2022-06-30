import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../src/pages/Main/Main';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from '../src/components/Footer/Footer';
import Nav from './components/Nav/Nav';
import PurchaseDetail from './components/PurchaseDetail/PurchaseDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/purchase" element={<ProductDetail />} />
        <Route path="/purchasedetail" element={<PurchaseDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
