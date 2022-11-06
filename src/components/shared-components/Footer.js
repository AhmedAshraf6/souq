import React from 'react';
import apple from '../../assets/imgs/footer/apple.png';
import googleplay from '../../assets/imgs/footer/googleplay.png';
import huawei from '../../assets/imgs/footer/huawei.png';
import mas from '../../assets/imgs/footer/mas.png';
import meza from '../../assets/imgs/footer/meza.png';
import visa from '../../assets/imgs/footer/visa.png';
import pay from '../../assets/imgs/footer/pay.png';

const Footer = () => {
  return (
    <section className='footer py-4'>
      <div className='row لغ-3'>
        <div className='col-md-6'>
          <h2 className='text-primary text-center mb-3'>وسائل الدفع</h2>
          <div className='d-flex'>
            <img src={visa} className='mx-4 icon' alt='' />
            <img src={mas} className='mx-4 icon' alt='' />
            <img src={pay} className='mx-4 icon' alt='' />
            <img src={meza} className='mx-4 icon' alt='' />
          </div>
        </div>
        <div className='col-md-6'>
          <h2 className='text-primary text-center mb-3'>حمل التطبيق دلوقتي</h2>
          <div className='d-flex'>
            <button className='btn btn-dark text-white d-flex mx-3 '>
              Download The App Store
              <img src={apple} alt='' />
            </button>
            <button className='btn btn-dark text-white d-flex mx-3'>
              Download The App Store
              <img src={googleplay} alt='' />
            </button>
            <button className='btn btn-dark text-white d-flex mx-3'>
              Download The App Store
              <img src={huawei} alt='' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
