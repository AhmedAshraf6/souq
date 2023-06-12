import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdsMember from '../components/seller/AdsMember';
import Member from '../components/seller/Member';
import { useMainContext } from '../contexts/MainProvider';
import { seller_url } from '../utils/constants';
import axios from 'axios';
import Footer from '../components/shared-components/Footer';
const Seller = () => {
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  const { sellerid } = useParams();
  const [load, setLoad] = useState(false);
  const [allAds, setAllAds] = useState([]);

  const fetchSellerAds = async () => {
    setLoad(true);
    try {
      const response = await axios(`${seller_url}${sellerid}`);
      if (response.data.data) {
        setLoad(false);
      }
      setAllAds(response.data.data);
    } catch (error) {
      setLoad(false);
    }
  };

  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    window.scrollTo(0, 0);
    closeSearch();
    fetchSellerAds();
  }, []);
  return (
    <main>
      <div className='seller my-5 '>
        <div className='container-luid'>
          <div className='row'>
            <div className='col-lg-3'>
              <Member allAds={allAds} />
            </div>
            <div className='col-lg-9'>
              <AdsMember allAds={allAds} load={load} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Seller;
