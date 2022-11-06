import React from 'react';
import SellerCom from '../components/seller/SellerCom';
import Navbar from '../components/shared-components/Navbar';
import Topnavbarsigned from '../components/shared-components/Topnavbarsigned';

const Seller = () => {
  return (
    <div className='seller'>
      <Topnavbarsigned />
      <Navbar />
      <SellerCom />
    </div>
  );
};

export default Seller;
