import axios from 'axios';
import React, { useEffect } from 'react';

import EditPack from '../components/edit-packages/EditPack';
import { useMainContext } from '../contexts/MainProvider';
const EditPackage = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='edit-packages'>
      <EditPack />
    </main>
  );
};

export default EditPackage;
