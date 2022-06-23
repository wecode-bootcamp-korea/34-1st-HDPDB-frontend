import React, { useState } from 'react';
import Cart from '../../components/Cart/Cart';
import './Main.scss';

const Main = () => {
  const [cartModal, setCartModal] = useState();

  return (
    <div>
      <button onClick={() => setCartModal('cart')}> cart</button>
      {cartModal === 'cart' && <Cart closeCart={() => setCartModal('')} />}
    </div>
  );
};

export default Main;
