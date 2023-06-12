import React from 'react';
import {
  wallet_bank,
  wallet_electronic,
  wallet_refrence,
  bank_card_url,
  bank_card_wallet_url,
} from '../../utils/constants';
import { useUserContext } from '../../contexts/UserProvider';
import arrow from '../../assets/ICONs/pay/arrow.png';
import etasalat from '../../assets/ICONs/pay/etasalat.png';
import num from '../../assets/ICONs/pay/num.png';
import opay from '../../assets/ICONs/pay/opay.png';
import orange from '../../assets/ICONs/pay/orange.png';
import vodafone from '../../assets/ICONs/pay/vodafone.png';
import wallet from '../../assets/ICONs/pay/wallet.png';
import v from '../../assets/ICONs/pay/v.png';
import { useState } from 'react';
import visa from '../../assets/ICONs/visa.png';
import mastercard from '../../assets/ICONs/mastercard.png';
import meza from '../../assets/ICONs/meza.png';
import axios from 'axios';
const CompleteShipingWallet = ({ amount }) => {
  const { token } = useUserContext();
  const [dataOfUser, setDataOfUser] = useState({});
  const numAmount = parseInt(amount);
  const makePayment = async (url) => {
    try {
      const response = await axios.post(
        url,
        JSON.stringify({ total: numAmount }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.data.cashierUrl) {
        window.location.href = response.data.data.cashierUrl;
      }
    } catch (error) {}
  };
  const makePaymentWithBank = async (url) => {
    try {
      const response = await axios.post(
        url,
        JSON.stringify({
          total: amount,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDataOfUser(response.data.data);
      if (response.data.data.cashierUrl) {
        window.location.href = response.data.data.cashierUrl;
      }
    } catch (error) {}
  };
  return (
    <div className='complete-ship bg-primary p-4 text-white m-4 rounded'>
      <div className='container-fluid'>
        <h3 className='fw-bold text-white text-center'>استكمال عملية الشحن</h3>
        <div className='boxes mt-5'>
          <div className='row g-3'>
            <div className='col-md-6'>
              <div
                className='box py-2 px-3 bg-white rounded pointer d-flex flex-column justify-content-between'
                onClick={() => makePayment(wallet_refrence)}
              >
                <h5 className='text-primary text-center fw-bold'>
                  (اشحن من الكشك بإستخدام الرقم المرجعي )
                </h5>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                  <img loading='lazy' src={num} alt='' className='icon' />
                  <h6 className='text-danger'>(متاح الشحن داخل مصر فقط)</h6>
                  <img loading='lazy' src={arrow} alt='' className='icon' />
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                  <img loading='lazy' src={opay} alt='orange' />
                </div>
              </div>
            </div>
            {/* <div className='col-md-6'>
              <div className='box py-2 px-3 bg-white rounded pointer d-flex flex-column justify-content-between'>
                <h5 className='text-primary text-center fw-bold'>
                  اشحن من خلال أقرب منفذ خدمة لـ BEE
                </h5>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                  <img                   loading='lazy'
 src={bee} alt='' className='icon' />

                  <img                   loading='lazy'
 src={arrow} alt='' className='icon' />
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                  <img                   loading='lazy'
 src={bee2} alt='orange' />
                </div>
              </div>
            </div> */}
            <div className='col-md-6'>
              <div
                className='box py-2 px-3 bg-white rounded pointer d-flex flex-column justify-content-between'
                onClick={() => makePayment(wallet_electronic)}
              >
                <h5 className='text-primary text-center fw-bold'>
                  اشحن باستخدام محفظة إلكترونية
                </h5>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                  <img loading='lazy' src={wallet} alt='' className='icon' />
                  <h6 className='text-danger'>(متاح داخل مصر فقط)</h6>
                  <img loading='lazy' src={arrow} alt='' className='icon' />
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                  <img loading='lazy' src={orange} alt='orange' />
                  <img loading='lazy' src={vodafone} alt='vodafone' />
                  <img loading='lazy' src={etasalat} alt='etasalat' />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div
                className='box py-2 px-3 bg-white rounded pointer d-flex flex-column justify-content-between'
                onClick={() => makePaymentWithBank(bank_card_wallet_url)}
              >
                <h5 className='text-primary text-center fw-bold'>
                  اشحن بالكريدت كارد
                </h5>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                  <img loading='lazy' src={v} alt='' className='icon' />
                  <h6 className='text-danger'>(متاج جميع الدول)</h6>
                  <img loading='lazy' src={arrow} alt='' className='icon' />
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                  <img
                    loading='lazy'
                    src={visa}
                    alt='visa'
                    className='avatar'
                  />
                  <img
                    loading='lazy'
                    src={mastercard}
                    alt='mastercard'
                    className='avatar'
                  />
                  <img
                    loading='lazy'
                    src={meza}
                    alt='miza'
                    className='avatar'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteShipingWallet;
