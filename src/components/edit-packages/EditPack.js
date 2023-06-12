import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import free from '../../assets/ICONs/free.png';

import {
  get_ad_info,
  package_url,
  update_package_url,
  update_shipping_url,
} from '../../utils/constants';
import CompleteShiping from '../puplish-product/CompleteShiping';
import Loading from '../shared-components/Loading';
import Message from '../shared-components/Message';
import RedirectToPage from '../shared-components/RedirectToPage';
import RequestError from '../shared-components/RequestError';
const EditPack = () => {
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState(false);
  const [freePackSuccess, setFreePackSuccess] = useState(false);
  const [payCom, setPayCom] = useState(false);
  const { adid } = useParams();
  const [allPackages, setAllPackages] = useState([]);
  const [crednitialAd, setCrednitialAd] = useState({});
  const navigate = useNavigate();

  const fetchPackages = async (countrycode, category, countryid) => {
    try {
      const response = await axios(
        `${update_package_url}${countrycode}/${category}`
      );

      setAllPackages(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorRequest(true);
    }
  };
  const getAdInfo = async () => {
    setLoading(true);
    try {
      const res = await axios(`${get_ad_info}${adid}`);
      // const {
      //   country_code: cn,
      //   Category: { id: catid },
      //   Package: { country_id: pacid },
      // } = res.data.data;
      fetchPackages(
        res.data.data.country_code,
        res.data.data.Category.id,
        res.data.data.Package.country_id
      );
    } catch (error) {
      setLoading(false);
      setErrorRequest(true);
    }
  };

  // Handle Package Submit
  const handleTryPuplish = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const res = await axios(
        `${update_shipping_url}${adid}/${crednitialAd.package_id}`
      );
      setCrednitialAd({
        package_id: res.data.data.advertisement.id,
        price: res.data.data.amount,
      });
      if (res.data.data.amount > 0) {
        setPayCom(true);
      } else {
        setFreePackSuccess(true);
      }
    } catch (error) {
      setLoading(false);
      setErrorRequest(true);
    }
  };

  useEffect(() => {
    getAdInfo();
  }, [adid]);
  if (loading) {
    return <Loading />;
  }
  if (errorRequest) {
    return <RequestError />;
  }
  return (
    <>
      {freePackSuccess ? (
        <>
          <Message textMsg='تم تعدييل باقتك بنجاح وبإنتظار المراجعة' />
          <RedirectToPage />;
        </>
      ) : (
        <>
          {!payCom ? (
            <>
              {allPackages && allPackages.length > 0 && (
                <div className='ads bg-primary text-center'>
                  <h4 className='text-white my-4'>ماذا تريد إعلانك أن يكون</h4>
                  <div className='row gy-4 justify-content-center'>
                    {allPackages.map((pack) => {
                      const { name, decription, price, id: package_id } = pack;
                      return (
                        <div className='col-12 col-md-7' key={package_id}>
                          <div
                            className={
                              crednitialAd.package_id === package_id
                                ? 'box bg-secondary text-primary py-3 px-1 px-sm-3 rounded pointer '
                                : 'box color-in-background text-primary py-3 px-1 px-sm-3 rounded pointer '
                            }
                            onClick={() =>
                              setCrednitialAd({ package_id, price })
                            }
                          >
                            <div className='d-flex py-2 justify-content-center align-items-center'>
                              <h4 className='fw-bold text-primary'>{name}</h4>
                            </div>
                            <h6 className='text-center py-2 fw-bold'>
                              {decription}
                            </h6>
                            <h3
                              className={
                                crednitialAd.package_id === package_id
                                  ? 'fw-bold text-primary'
                                  : 'fw-bold text-secondary'
                              }
                            >
                              {price}Egp
                            </h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className='text-center'>
                    <button
                      className='btn btn-secondary btn-lg px-5 mt-4 text-white'
                      type='submit'
                      onClick={handleTryPuplish}
                    >
                      إعادة نشر
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <CompleteShiping {...crednitialAd} />
          )}
        </>
      )}
    </>
  );
};

export default EditPack;
