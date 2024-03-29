import React, { useEffect } from 'react';
import ProductDetails from '../components/single-product/ProductDetails';
import SellerDetails from '../components/single-product/SellerDetails';
import SwiperImages from '../components/single-product/SwiperImages';
import { get_ad_info, single_product_url } from '../utils/constants';
import { useMainContext } from '../contexts/MainProvider';
import { useAdsContext } from '../contexts/AdsProvider';
import { useParams } from 'react-router-dom';
import SellerDetails2 from '../components/single-product/SellerDetails2';
import { useState } from 'react';
import axios from 'axios';
import Loading from '../components/shared-components/Loading';
import RequestError from '../components/shared-components/RequestError';
import EditAdButtons from '../components/single-product/EditAdButtons';
import Footer from '../components/shared-components/Footer';
import Message from '../components/shared-components/Message';
import RedirectToPage from '../components/shared-components/RedirectToPage';
import { useUserContext } from '../contexts/UserProvider';
import { useQuery } from 'react-query';
const SingleProduct = () => {
  const { adid } = useParams();
  const [reqLoading, setReqLoading] = useState(false);
  const { userInfo } = useUserContext();
  const [reqError, setReqError] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();
  const { singleAderror, singleAd, fetchSingleAd, singleAdLoading } =
    useAdsContext();

  const fetchSingleProduct = (id) => {
    return axios(`${single_product_url}${id}`);
  };
  const { isLoading, isError, error, data } = useQuery(
    ['singlead', adid],
    () => fetchSingleProduct(adid),
    {
      staleTime: 12000,
    }
  );

  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  // useEffect(() => {
  //   fetchSingleAd(`${single_product_url}${adid}`);
  // }, [adid]);
  // Delete Ad
  const deleteAds = async () => {
    setReqLoading(true);
    try {
      const response = await axios.delete(`${get_ad_info}${adid}`);
      setReqLoading(false);
      setDeleteSuccess(true);
    } catch (error) {
      setReqLoading(false);
      setReqError(true);
    }
  };
  if (isLoading || reqLoading) {
    return <Loading />;
  }
  if (isError || reqError) {
    return <RequestError />;
  }
  return (
    <main>
      <div>
        {deleteSuccess ? (
          <>
            <Message textMsg='تم حذف إعلانك بنجاح' />
            <RedirectToPage />;
          </>
        ) : (
          <div className='single-product my-5 mx-4'>
            <div className='container-fluid'>
              <div className='row gy-3 '>
                <div className='col-lg-6'>
                  <SwiperImages {...data?.data.data} />
                </div>
                <div className='col-lg-6'>
                  <SellerDetails {...data?.data.data} />
                  <SellerDetails2 {...data?.data.data} />
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-7'>
                  <ProductDetails {...data?.data.data} />
                </div>
                {/* This Component Only present if user come from myads Page which is authorized */}
                {data?.data.data?.User?.id == userInfo.id && (
                  <div className='col-lg-5'>
                    <EditAdButtons deleteAds={deleteAds} {...data?.data.data} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default SingleProduct;
