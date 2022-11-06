import React from 'react';
import HomeNotSigned from '../components/home/HomeNotSigned';
import Footer from '../components/shared-components/Footer';
import Navbar from '../components/shared-components/Navbar';
import Topnavbar from '../components/shared-components/Topnavbar';
import Topnavbarsigned from '../components/shared-components/Topnavbarsigned';

const Home = () => {
  return (
    <div className='home'>
      {/* <Topnavbar /> */}
      <Topnavbarsigned />
      <Navbar />
      <HomeNotSigned />
      <Footer />
    </div>
  );
};
export default Home;
