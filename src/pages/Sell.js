import React from 'react';
import SelectProduct from '../components/sell/SelectProduct';
import Topnavbarsigned from '../components/shared-components/Topnavbarsigned';

const Sell = () => {
  return (
    <div className='sell'>
      <Topnavbarsigned />
      <SelectProduct />
      {/* <PuplishProduct /> */}
    </div>
  );
};

export default Sell;
