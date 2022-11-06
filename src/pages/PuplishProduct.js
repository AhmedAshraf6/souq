import React from 'react';
import Puplish from '../components/puplish-product/Puplish';
import Navbar from '../components/shared-components/Navbar';
import Topnavbarsigned from '../components/shared-components/Topnavbarsigned';

const PuplishProduct = () => {
  return (
    <div className='puplish-product'>
      <Topnavbarsigned />
      <Navbar />
      <Puplish />
    </div>
  );
};

export default PuplishProduct;
