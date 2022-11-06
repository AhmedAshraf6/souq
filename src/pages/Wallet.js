import React from 'react';
import Topnavbarsigned from '../components/shared-components/Topnavbarsigned';
import WalletCom from '../components/wallet/WalletCom';

const Wallet = () => {
  return (
    <div className='wallet'>
      <Topnavbarsigned />
      <WalletCom />
    </div>
  );
};

export default Wallet;
