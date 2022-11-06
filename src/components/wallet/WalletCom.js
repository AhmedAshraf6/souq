import React from 'react';

const WalletCom = () => {
  return (
    <div className='wallet-com color-in-background py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 '>
            <h3 className='text-primary'>محفظة أدساب</h3>
            <div className='table-responsive'>
              <table className='table table-bordered bg-primary w-50 mx-auto text-white text-center'>
                <thead>
                  <tr>
                    <th scope='col'>نقاطي</th>
                    <th scope='col'>مبلغ النقاط</th>
                    <th scope='col'>رصيدي</th>
                    <th scope='col'>إجمالي</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>5</th>
                    <td>50 L.E</td>
                    <td>50 L.E</td>
                    <td>50 L.E</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='wallet-text text-primary mx-auto text-center w-50 fw-bold mt-4'>
              تتألف المحفظة عن المبالغ المكتسبة عن النقاط التي ربحتها من مشاركة
              التطبيق بالأضافة الي المبالغ التي تقوم بشحنها ويمكنك استخدام رصيدك
              في نشر الأعلانات المميزة.
            </p>
          </div>
        </div>
      </div>
      <hr className='text-primary border-3 mx-4' />
      <div className='container'>
        <div className='row'>
          <div className='col-12 mt-4'>
            <div className='row'>
              <div className='col-lg-3 col-md-4'>
                <h4 className='text-primary ms-4'>لشحن محفظتك أدخل القيمة</h4>
              </div>
              <div className='col-lg-2 col-md-3'>
                <input
                  type='text'
                  className='input-with-border form-control form-control-lg  text-white bg-primary '
                />
              </div>
            </div>
          </div>
          <div className='col-12 mt-5 text-center'>
            <button className='btn btn-secondary text-white fw-bold btn-lg'>
              استكمال عملية الشحن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCom;
