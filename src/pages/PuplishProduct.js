import React, { useEffect } from 'react';
import Puplish from '../components/puplish-product/Puplish';

import { useMainContext } from '../contexts/MainProvider';
const PuplishProduct = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className='puplish-product'>
      <Puplish />
    </main>
  );
};

export default PuplishProduct;
