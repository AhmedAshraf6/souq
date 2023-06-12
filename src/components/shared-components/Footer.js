import React from 'react';
import apple from '../../assets/imgs/footer/apple.png';
import googleplay from '../../assets/imgs/footer/googleplay.png';
import phone from '../../assets/imgs/footer/phone.png';
import phone2 from '../../assets/imgs/footer/phone2.png';
import phone3 from '../../assets/imgs/footer/phone3.png';
import huawei from '../../assets/imgs/footer/huawei.png';
import mas from '../../assets/imgs/footer/mas.png';
import meza from '../../assets/imgs/footer/meza.png';
import visa from '../../assets/imgs/footer/visa.png';
import pay from '../../assets/imgs/footer/pay.png';
import bee from '../../assets/imgs/footer/bee.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer '>
      <div className='bg-primary px-3 py-3'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='d-flex justify-content-center flex-column align-items-center h-100 '>
              <h4 className='text-white my-4 lh-base text-center'>
                أدساب أكبر تطبيق إعلانات مبوبة في مصر والوطن العربي، تقدر من
                خلاله تنزل إعلانات فيديو وتعمل حملات إعلانية كاملة، وكمان هتكسب
                فلوس كل مرة تشير فيها التطبيق
              </h4>
            </div>
          </div>
          <div className='col-lg-7 imgs '>
            <div className='w-100 h-100 text-center'>
              {/* Buttons */}
              <h4 className='text-white my-4'>حمل تطبيق أدساب المجاني الان</h4>
              <div className='d-flex flex-column flex-md-row gap-2'>
                <button className='btn btn-light rounded text-primary d-flex align-items-center justify-content-end gap-2 '>
                  <span style={{ fontSize: '12px' }}>
                    {' '}
                    EXPLORE IT ON App Store
                  </span>
                  <img
                    src={apple}
                    alt='apple'
                    className='img-footer'
                    loading='lazy'
                  />
                </button>
                <button className='btn btn-light rounded text-primary d-flex align-items-center justify-content-end gap-2 '>
                  <span style={{ fontSize: '12px' }}>
                    GET IT ON Google Play{' '}
                  </span>
                  <img
                    src={googleplay}
                    alt='googleplay'
                    className='img-footer'
                    loading='lazy'
                  />
                </button>
                <button className='btn btn-light rounded text-primary d-flex align-items-center justify-content-end gap-2 '>
                  <span style={{ fontSize: '12px' }}>
                    DOWNLOAD ON THE App Gallery
                  </span>
                  <img
                    loading='lazy'
                    src={huawei}
                    alt='huawei'
                    className='img-footer'
                  />
                </button>
              </div>
              {/* common questions */}
              <div className='my-4'>
                <Link
                  to='/commonquestions'
                  className='text-decoration-none text-white'
                >
                  الاسئلة الشائعة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-3'>
        <div className='row d-flex align-items-center text-center gy-3'>
          <div className='col-lg-4'>
            <a
              href='https://api.adsapp.org/license'
              className='text-decoration-none mb-3 text-black'
              target='_blank'
            >
              سياسة الخصوصية
            </a>
          </div>

          <div className='col-lg-4'>
            <h4 className='text-primary text-center mb-3 fw-bold'>
              وسائل الدفع
            </h4>
            <div className='d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-center'>
              <img loading='lazy' src={visa} className='icon' alt='visa' />
              <img loading='lazy' src={mas} className='icon' alt='mas' />
              <img loading='lazy' src={pay} className='icon' alt='pay' />
              <img loading='lazy' src={meza} className='icon' alt='meza' />
              <img loading='lazy' src={bee} className='icon' alt='bee' />
            </div>
          </div>
          <div className='col-lg-4 '>
            <a
              href=' https://sharepoint-t.com'
              className='text-dark mx-2 '
              target='_blank'
            >
              &nbsp; جميع الحقوق محفوظة&nbsp;
              <span>لشركة شيربوينت</span>
              &nbsp;تكنولوجي 2023&nbsp;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

// <button className='btn btn-light rounded justify-content-center text-primary fw-bold d-flex mx-2 my-2 my-sm-0 align-items-center'>
//               GET IT ON Google Play
//               <img  src={googleplay} alt='googleplay' className='px-2' />
//             </button>
//             <button className='btn btn-light rounded justify-content-center text-primary fw-bold d-flex mx-2 my-2 my-sm-0 align-items-center'>
//               DOWNLOAD ON THE App
//               <img  src={huawei} alt='huawei' className='px-2' />
//             </button>
