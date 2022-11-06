import React from 'react';
import EditProfileCom from '../components/edit-profile/EditProfileCom';
import IdentityDocumented from '../components/edit-profile/IdentityDocumented';
import Navbar from '../components/shared-components/Navbar';
import Topnavbarsigned from '../components/shared-components/Topnavbarsigned';

const EditProfile = () => {
  return (
    <div className='edit-profile p-0'>
      <Topnavbarsigned />
      <Navbar />
      <EditProfileCom />
      {/* <IdentityDocumented /> */}
    </div>
  );
};

export default EditProfile;
