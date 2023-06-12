import React from 'react';
import ChatSpaceWithSupport from './ChatSpaceWithSupport';
import TaikWithSupport from './TaikWithSupport';

const ChatWithSupport = () => {
  return (
    //  h-50 overflow-auto
    <div className=' bg-primary user-chat rounded  d-flex flex-column justify-content-between '>
      <h1></h1>
      <div className='overflow-auto'>
        <ChatSpaceWithSupport />
        <TaikWithSupport />
      </div>
    </div>
  );
};

export default ChatWithSupport;
