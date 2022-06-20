import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../src/pages/Main/Main';

function Router(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
