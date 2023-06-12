import React, { useEffect } from 'react';

import WalletCom from '../components/wallet/WalletCom';
import { useMainContext } from '../contexts/MainProvider';
const Wallet = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className='wallet'>
      <WalletCom />
    </main>
  );
};

export default Wallet;
