import React from 'react';
import { useSupportContext } from '../../contexts/SupportProvider';
import { image_url } from '../../utils/constants';

const SupportInfo = () => {
  const { chatId, clientName, clientImage } = useSupportContext();
  return (
    <div className='info'>
      <div className='seller-info text-decoration-none bg-light rounded mx-1 text-primary d-flex justify-content-between  align-items-start align-items-sm-center flex-column flex-sm-row gap-2 py-2 mt-2'>
        <div className='d-flex align-items-center'>
          <img
            src={`${image_url}${clientImage}`}
            alt='person'
            className='seller-avatar rounded-circle mx-2'
            loading='lazy'
          />
          <div className='mx-3'>
            <h4>{clientName}</h4>
          </div>
        </div>
        <div className='d-flex'></div>
      </div>
    </div>
  );
  return <>as</>;
};

export default SupportInfo;
