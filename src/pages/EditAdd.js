import React, { useEffect } from 'react';
import Edit from '../components/edit-add/Edit';

import { useMainContext } from '../contexts/MainProvider';
const EditAdd = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className='edit-ads'>
      <Edit />
    </main>
  );
};

export default EditAdd;
