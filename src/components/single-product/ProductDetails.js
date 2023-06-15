import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAdsContext } from '../../contexts/AdsProvider';
import { ads_type_url, country_id_url } from '../../utils/constants';
import { useMainContext } from '../../contexts/MainProvider';

const ProductDetails = ({
  id,
  price,
  payment_option,
  title,
  disription,
  ad_type,
  is_manual,
  is_new,
  Category,
  brand,
  category_id,
}) => {
  const [adTypeName, setAdTypeName] = useState('');
  const { userCurrency } = useMainContext();
  const renderedPrice = price && price.toLocaleString();

  const fetchAdsType = async () => {
    const res = await axios(ads_type_url, {
      headers: {
        'Retry-After': '59',
      },
    });
    const a = res.data.data.find((ad) => ad_type == ad.id);
    if (a) {
      setAdTypeName(a.name_ar);
    }
  };
  useEffect(() => {
    fetchAdsType();
  }, [id]);

  return (
    <div className='products-details mt-5'>
      <div className='box bg-primary py-4 px-3 text-white rounded'>
        <h4 className='fw-bold'>{title}</h4>
        <div className='row  gy-3 '>
          <div className='col-sm-6 '>
            <div className='d-flex justify-content-between my-3'>
              <h5 className='text-white  '>الحالة</h5>
              <h5 className='text-secondary  '>
                {is_new == 1 ? 'جديد' : 'مستعمل'}
              </h5>
            </div>
            {Category && Category.sub_group == '1' ? (
              is_manual == 1 ? (
                <div className='d-flex justify-content-between my-3  '>
                  <h5 className='text-white '>ناقل الحركة</h5>
                  <h5 className='text-secondary '>مانيوال</h5>
                </div>
              ) : (
                is_manual == 0 && (
                  <div className='d-flex justify-content-between my-3  '>
                    <h5 className='text-white '>ناقل الحركة</h5>
                    <h5 className='text-secondary '>اتوماتيك</h5>
                  </div>
                )
              )
            ) : (
              ''
            )}

            <div className='d-flex justify-content-between my-3  '>
              <h5 className='text-white '>نوع الاعلان</h5>
              <h5 className='text-secondary '>{adTypeName && adTypeName}</h5>
            </div>
          </div>
          <div className='col-sm-6 '>
            <div className='d-flex justify-content-between my-3'>
              <h5 className='text-white  '>السعر</h5>
              <h5 className='text-secondary  '>
                {renderedPrice}
                {userCurrency}
              </h5>
            </div>
            <div className='d-flex justify-content-between my-3  '>
              <h5 className='text-white '>طريقة الدفع</h5>
              <h5 className='text-secondary '>{payment_option}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='box bg-primary py-4 px-3 text-white rounded mt-4'>
        {category_id == '7' && brand && (
          <>
            <h4 className='fw-bold'>الماركة</h4>
            <p>{brand} </p>
          </>
        )}
        <h4 className='fw-bold'>الفئة</h4>
        <p>{Category?.name_ar} </p>
        <h4 className='fw-bold'>الوصف</h4>
        <p style={{ whiteSpace: 'pre-line' }}>{disription} </p>
      </div>
    </div>
  );
};

export default ProductDetails;
