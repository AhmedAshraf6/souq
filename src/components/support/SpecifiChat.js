import React from 'react';
import ChatSpaceSupport from './ChatSpaceSupport';
import SupportInfo from './SupportInfo';
import TaukSupport from './TaukSupport';

const SpecifiChat = () => {
  return (
    <div className=' bg-primary user-chat rounded  d-flex flex-column justify-content-between '>
      {/* Info */}
      <SupportInfo />
      {/* Taik */}
      <div className='overflow-auto'>
        <ChatSpaceSupport />
        <TaukSupport />
      </div>
    </div>
  );
};

export default SpecifiChat;
