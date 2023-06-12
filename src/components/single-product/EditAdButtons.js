import React from 'react';
import { Link, useParams } from 'react-router-dom';
//  Package: { days }, created_at
const EditAdButtons = ({ deleteAds }) => {
  const { adid } = useParams();
  // let currentdate = new Date();
  // let dateAd = new Date(created_at);
  // console.log(days);

  // const diffDays = Math.ceil((currentdate - dateAd) / (1000 * 60 * 60 * 24));

  return (
    <div className='btn-group  mt-5' role='group'>
      <Link
        type='button'
        className='btn btn-primary text-white mx-2'
        to={`/ads/edit/${adid}`}
      >
        تعديل الاعلان
      </Link>

      <Link
        type='button'
        className='btn btn-secondary text-white mx-2'
        to={`/ads/editpackage/${adid}`}
      >
        إعادة نشره
      </Link>
      <button
        type='button'
        className='btn btn-danger text-white mx-2'
        onClick={deleteAds}
      >
        حذف الإعلان
      </button>
    </div>
  );
};

export default EditAdButtons;
