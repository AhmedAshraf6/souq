import React from 'react';

import Info from './Info';
import Taik from './Taik';

const UserChat = () => {
  return (
    <div className=' bg-primary user-chat rounded  d-flex flex-column justify-content-between '>
      {/* Info */}
      <Info />
      {/* Taik */}
      <Taik />
    </div>
  );
};

export default UserChat;
