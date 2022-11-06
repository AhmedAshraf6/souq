import React from 'react';
import ProfileCom from '../components/profile/ProfileCom';
import Topnavbarsigned from '../components/shared-components/Topnavbarsigned';

const Profile = () => {
  return (
    <div className='profile'>
      <Topnavbarsigned />
      <ProfileCom />
    </div>
  );
};

export default Profile;
