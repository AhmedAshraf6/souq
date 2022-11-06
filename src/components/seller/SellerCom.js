import React from 'react';
import { useParams } from 'react-router-dom';
import AdsMember from './AdsMember';
import Member from './Member';

const SellerCom = () => {
  const { sellerid } = useParams();

  return (
    <div className='seller-com my-5'>
      <div className='container-luid'>
        <div className='row'>
          <div className='col-lg-3'>
            <Member />
          </div>
          <div className='col-lg-9'>
            <AdsMember />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCom;
