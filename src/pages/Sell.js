import React, { useEffect } from 'react';
import SelectProduct from '../components/sell/SelectProduct';

import { useMainContext } from '../contexts/MainProvider';
const Sell = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className='sell'>
      <SelectProduct />
      {/* <PuplishProduct /> */}
    </main>
  );
};

export default Sell;
