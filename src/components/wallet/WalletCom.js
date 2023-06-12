import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../../contexts/UserProvider';
import { charage_wallet_url } from '../../utils/constants';
import CompleteShipingWallet from './CompleteShipingWallet';
const WalletCom = () => {
  const { token, handleWallet, wallet } = useUserContext();
  const [amount, setAmount] = useState();
  const [err, setErr] = useState(false);
  const [errAmount, setErrAmount] = useState(false);
  const [errRequest, setErrRequest] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      setErr(true);
    } else if (amount < 6) {
      setErrAmount(true);
    } else {
      setSuccess(true);
    }
  };
  // const handleFavouriteAd = async (ad_id) => {
  //
  // };
  useEffect(() => {
    handleWallet();
  }, []);
  return (
    <div className='wallet-com color-in-background py-4'>
      {success ? (
        <CompleteShipingWallet amount={amount} />
      ) : (
        <>
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
                        <th scope='row'>{wallet && wallet.point}</th>
                        <td>
                          {wallet &&
                            wallet.PointPrice &&
                            wallet.PointPrice.price}
                          L.E
                        </td>
                        <td> L.E</td>
                        <td> L.E</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className='wallet-text text-primary mx-auto text-center w-50 fw-bold mt-4'>
                  تتألف المحفظة عن المبالغ المكتسبة عن النقاط التي ربحتها من
                  مشاركة التطبيق بالأضافة الي المبالغ التي تقوم بشحنها ويمكنك
                  استخدام رصيدك في نشر الأعلانات المميزة.
                </p>
              </div>
            </div>
          </div>
          <hr className='text-primary border-3 mx-4' />
          <form className='container' onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-12 mt-4'>
                <div className='row'>
                  <div className='col-lg-3 col-md-4'>
                    <h4 className='text-primary ms-4'>
                      لشحن محفظتك أدخل القيمة
                    </h4>
                  </div>
                  <div className='col-lg-2 col-md-3'>
                    <input
                      type='number'
                      min='0'
                      className='input-with-border form-control form-control-lg  text-white bg-primary '
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    {err && <p className='text-danger'>من فضلك أدخل القيمة</p>}
                    {errAmount && (
                      <p className='text-danger'>الحد الأدني للشحن 6 جنبيهات</p>
                    )}
                    {errRequest && (
                      <p className='text-danger'>لا يوجد استجابة من الخادم</p>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-12 mt-5 text-center'>
                <button
                  className='btn btn-secondary text-white fw-bold btn-lg'
                  type='submit'
                >
                  استكمال عملية الشحن
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default WalletCom;
