import React from 'react';
import { useEffect } from 'react';
import AllQuestions from '../components/common-questions/AllQuestions';
import Footer from '../components/shared-components/Footer';
import { useMainContext } from '../contexts/MainProvider';
const CommonQuestions = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className='my-5 common-questions '>
      <AllQuestions />
      <Footer />
    </main>
  );
};

export default CommonQuestions;
