import React, { useState, useEffect } from 'react';
import VerifyedDetails from './VerifyedDetails';
import SelectSalary from './SelectSalary';
import ReviewDetails from './ReviewDetails';
import axios from 'axios';
import { puplish_ad_url } from '../../utils/constants';
import { useNavigate, useParams } from 'react-router-dom';
import CompleteShiping from './CompleteShiping';
import { useUserContext } from '../../contexts/UserProvider';
import { useMainContext } from '../../contexts/MainProvider';
import Loading from '../shared-components/Loading';
import RequestError from '../shared-components/RequestError';
import Message from '../shared-components/Message';
import RedirectToPage from '../shared-components/RedirectToPage';

const Puplish = () => {
  const { namecat, subid } = useParams();
  const { token } = useUserContext();
  const [adSuccess, setAdSucess] = useState(false);
  const { countryId, countryName, cityName } = useMainContext();
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState(false);
  const [formErrors, setFormErrors] = useState({ maxVideoUpload: '' });
  const [isSubmit, setIsSubmit] = useState(false);
  const [payCom, setPayCom] = useState(false);

  const [crednitialAd, setCrednitialAd] = useState({});
  const navigate = useNavigate('/');
  const initialValues = {
    address: '',
    salary: '',
    adType: '',
    payment_option: '',
    adsName: '',
    explainAds: '',
    category_id: subid,
    isNegotiatable: '',
    contact: '',
    country_id: countryId,
    city_id: '',
    images: {
      img1: {
        img1: '',
        imgServer: '',
      },
      img2: {
        img2: '',
        imgServer: '',
      },
      img3: {
        img3: '',
        imgServer: '',
      },
      img4: {
        img4: '',
        imgServer: '',
      },
      img5: {
        img5: '',
        imgServer: '',
      },
      img6: {
        img6: '',
        imgServer: '',
      },
      img7: {
        img7: '',
        imgServer: '',
      },
      img8: {
        img8: '',
        imgServer: '',
      },
    },
    country_code: countryName,
    package_id: '',
    upload: 'picture',
    videoUploaded: '',
    carStatus: '',
    engineStatus: '',
    cover_photo: '',
    cover_photo_rendered: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const sendeddata = {
    location: formValues.address,
    price: formValues.salary,
    ad_type: formValues.adType,
    payment_option: formValues.payment_option,
    title: formValues.adsName,
    disription: formValues.explainAds,
    category_id: formValues.category_id,
    isNegotiatable: formValues.isNegotiatable,
    contact_methodes: formValues.contact,
    country_id: formValues.country_id,
    city_id: formValues.city_id,
    file: formValues.images.img1.imgServer,
    file_2: formValues.images.img2.imgServer,
    file_3: formValues.images.img3.imgServer,
    file_4: formValues.images.img4.imgServer,
    file_5: formValues.images.img5.imgServer,
    file_6: formValues.images.img5.imgServer,
    file_7: formValues.images.img7.imgServer,
    file_8: formValues.images.img8.imgServer,
    cover_photo: formValues.cover_photo,
    country_code: formValues.country_code,
    package_id: formValues.package_id,
    is_new: formValues.carStatus,
    is_manual: formValues.engineStatus,
  };

  // handle Request

  useEffect(() => {
    if (formValues.upload === 'picture') {
      if (!sendeddata.file && sendeddata.file_2) {
        sendeddata.file = sendeddata.file_2;
        sendeddata.file_2 = '';
      } else if (!sendeddata.file && sendeddata.file_3) {
        sendeddata.file = sendeddata.file_3;
        sendeddata.file_3 = '';
      } else if (!sendeddata.file && sendeddata.file_4) {
        sendeddata.file = sendeddata.file_4;
        sendeddata.file_4 = '';
      } else if (!sendeddata.file && sendeddata.file_5) {
        sendeddata.file = sendeddata.file_5;
        sendeddata.file_5 = '';
      } else if (!sendeddata.file && sendeddata.file_6) {
        sendeddata.file = sendeddata.file_6;
        sendeddata.file_6 = '';
      } else if (!sendeddata.file && sendeddata.file_7) {
        sendeddata.file = sendeddata.file_7;
        sendeddata.file_7 = '';
      } else if (!sendeddata.file && sendeddata.file_8) {
        sendeddata.file = sendeddata.file_8;
        sendeddata.file_8 = '';
      }
    } else if (formValues.upload === 'video') {
      sendeddata.file = formValues.videoUploaded;
    }
  }, [sendeddata]);

  // when user select picture or video this func delete files of another
  const tooglePicVid = () => {
    if (formValues.upload == 'picture') {
      setFormValues({ ...formValues, videoUploaded: '' });
    } else if (formValues.upload == 'video') {
      setFormValues({
        ...formValues,
        images: {
          ...formValues.images,
          img1: {},
          img2: {},
          img3: {},
          img4: {},
          img5: {},
          img6: {},
          img7: {},
          img8: {},
        },
      });
    }
  };
  useEffect(() => {
    tooglePicVid();
  }, [formValues.upload]);
  // console.log(sendeddata);
  const handleRequest = async (url) => {
    setLoading(true);
    let fd = new FormData();
    fd.append('location', sendeddata.location);
    fd.append('price', sendeddata.price);
    fd.append('ad_type', sendeddata.ad_type);
    fd.append('payment_option', sendeddata.payment_option);
    fd.append('title', sendeddata.title);
    fd.append('disription', sendeddata.disription);
    fd.append('category_id', sendeddata.category_id);
    fd.append('isNegotiatable', sendeddata.isNegotiatable);
    fd.append('contact_methodes', sendeddata.contact_methodes);
    fd.append('country_id', sendeddata.country_id);
    fd.append('city_id', sendeddata.city_id);
    fd.append('country_code', sendeddata.country_code);
    fd.append('package_id', sendeddata.package_id);
    fd.append('file', sendeddata.file);
    fd.append('cover_photo', sendeddata.cover_photo);
    if (sendeddata.file_2) {
      fd.append('file_2', sendeddata.file_2);
    }
    if (sendeddata.file_3) {
      fd.append('file_3', sendeddata.file_3);
    }
    if (sendeddata.file_4) {
      fd.append('file_4', sendeddata.file_4);
    }
    if (sendeddata.file_5) {
      fd.append('file_5', sendeddata.file_5);
    }
    if (sendeddata.file_6) {
      fd.append('file_6', sendeddata.file_6);
    }
    if (sendeddata.file_7) {
      fd.append('file_7', sendeddata.file_7);
    }
    if (sendeddata.file_8) {
      fd.append('file_8', sendeddata.file_8);
    }
    if (namecat == 'سيارات') {
      fd.append('is_new', sendeddata.is_new);
      fd.append('is_manual', sendeddata.is_manual);
    }
    try {
      const response = await axios.post(url, fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      setCrednitialAd({
        adid: response.data.data.advertisement.id,
        price: response.data.data.amount,
      });
    } catch (error) {
      setLoading(false);
      setErrorRequest(true);
    }
  };
  // HandleChange In Value inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // fetch address location
  const fetchLocation = () => {
    const userlocation = JSON.parse(localStorage.getItem('userloc'));
    return setFormValues({
      ...formValues,
      address: `${userlocation.countryname} ، ${userlocation.city}`,
    });
  };
  // HandleChange In files images
  const handleChangeImages = (e) => {
    const { name, files } = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        return setFormValues({
          ...formValues,
          images: {
            ...formValues.images,
            [name]: {
              ...formValues.images.name,
              [name]: reader.result,
              imgServer: files[0],
            },
          },
          videoUploaded: '',
        });
      }
    };
    reader.readAsDataURL(files[0]);
  };
  // HandleChange Cover Image
  const handleCoverVideo = (e) => {
    const { files } = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        return setFormValues({
          ...formValues,
          cover_photo: files[0],
          cover_photo_rendered: reader.result,
        });
      }
    };
    reader.readAsDataURL(files[0]);
  };

  // Handle Delete Image
  const deleteSignleImage = (img) => {
    return setFormValues({
      ...formValues,
      images: { ...formValues.images, [img]: '' },
      cover_photo: '',
      cover_photo_rendered: '',
    });
  };
  // HandleChange In files videos
  const handleChangeVideo = (e) => {
    if (e.target.files[0].size > 200 * 10458576) {
      setFormErrors({
        ...formErrors,
        maxVideoUpload: 'يجب أن يكون حجم الملف أقل من 200 ميجابايت',
      });
    } else {
      setFormValues({
        ...formValues,
        videoUploaded: e.target.files[0],
        images: {
          ...formValues.images,
          img1: {},
          img2: {},
          img3: {},
          img4: {},
          img5: {},
          img6: {},
          img7: {},
          img8: {},
        },
      });
    }
  };

  // Handle Ads View
  const handlePackageAd = (packageid, price) => {
    setFormValues({ ...formValues, package_id: packageid });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  //  Handle Errors
  const validate = (values) => {
    const errors = {};
    if (namecat == 'سيارات' && !values.carStatus) {
      errors.carStatusError = 'من فضلك أدخل حالة السيارة';
    }
    if (namecat == 'سيارات' && !values.engineStatus) {
      errors.engineStatusError = 'من فضلك أدخل حالة المحرك';
    }
    if (!values.address) {
      errors.addressError = 'من فضلك أدخل العنوان';
    }
    if (values.address.length > 70) {
      errors.addressLengthError = 'عدد الحروف يجب أن تكون أقل من 70 حرف';
    }
    if (!values.salary) {
      errors.salaryError = 'من فضلك أدخل سعر المنتج';
    }
    if (!values.adType) {
      errors.adTypeError = 'من فضلك اختار نوع إعلانك';
    }
    if (!values.payment_option) {
      errors.paymentOptionError = 'من فضلك اختار طريقة الدفع ';
    }
    if (!values.adsName) {
      errors.adsNameError = 'من فضلك أدخل اسم الإعلان';
    }
    if (values.adsName.length > 70) {
      errors.adsNameLengthError = 'عدد الحروف يجب أن تكون أقل من 70 حرف';
    }
    if (!values.explainAds) {
      errors.explainAdsError = 'من فضلك اشرح حالة المنتج';
    }
    if (values.explainAds.length > 4067) {
      errors.explainAdsLenghtError = 'عدد الحروف يجب أن تكون أقل من 70 حرف';
    }
    if (!values.isNegotiatable) {
      errors.isNegotiatableError =
        'من فضلك ادخل ما ان كان هذا المنتج قابل للتفاوض';
    }
    if (!values.contact) {
      errors.contactMethodError = 'من فضلك أدخل وسيلة التواصل';
    }

    if (!values.package_id) {
      errors.packageIdError = 'من فضلك أختر نوع الباقة';
    }
    if (
      values.upload === 'picture' &&
      !values.images.img1.img1 &&
      !values.images.img2.img2 &&
      !values.images.img3.img3 &&
      !values.images.img4.img4 &&
      !values.images.img5.img5 &&
      !values.images.img6.img6 &&
      !values.images.img7.img7 &&
      !values.images.img8.img8
    ) {
      errors.imagesError = 'من فضلك ارفع صورة وأكثر للمنتج';
    }
    if (values.upload === 'video' && !values.videoUploaded) {
      errors.videoErrors = 'من فضلك ارفع فيديو للمنتج';
    }

    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleRequest(puplish_ad_url);
    }
  }, [formErrors]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [payCom]);
  useEffect(() => {
    if (crednitialAd.price > 0) {
      setLoading(false);
      setPayCom(true);
    }
    if (crednitialAd.price == 0) {
      setLoading(false);
      setAdSucess(true);
    }
  }, [crednitialAd]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : errorRequest ? (
        <RequestError />
      ) : adSuccess ? (
        <>
          <Message textMsg='إعلانك تحت المراجعة وسيتم نشره بعد الموافقة عليه' />
          <RedirectToPage />
        </>
      ) : (
        <>
          {!payCom ? (
            <form
              className='Puplish-product bg-primary p-4 text-white m-4 rounded'
              onSubmit={handleSubmit}
            >
              <div className='container-fluid'>
                <div className='box border-bottom pb-4'>
                  <h3>الفئة المختارة</h3>
                </div>
                {/* Details */}
                <div className='verify-details'>
                  <VerifyedDetails
                    handleChange={handleChange}
                    formValues={formValues}
                    formErrors={formErrors}
                    fetchLocation={fetchLocation}
                  />
                </div>
                {/* Details 2 */}
                <div className='details2 mt-3 border-top pt-3'>
                  <SelectSalary
                    handleChange={handleChange}
                    handleChangeImages={handleChangeImages}
                    handleChangeVideo={handleChangeVideo}
                    formValues={formValues}
                    formErrors={formErrors}
                    setFormValues={setFormValues}
                    deleteSignleImage={deleteSignleImage}
                    handleCoverVideo={handleCoverVideo}
                  />
                </div>
                {/* Details 2 */}
                {/* Details 3 */}
                <div className='details2 mt-3 border-top pt-3'>
                  <ReviewDetails
                    handlePackageAd={handlePackageAd}
                    formValues={formValues}
                    handleChange={handleChange}
                    formErrors={formErrors}
                  />
                </div>
                {/* Details 3 */}
              </div>
              <div className='text-center'>
                <button
                  className='btn btn-secondary btn-lg px-5 mt-4 text-white'
                  type='submit'
                >
                  انشر الان
                </button>
              </div>
            </form>
          ) : (
            <CompleteShiping {...crednitialAd} />
          )}
        </>
      )}
    </>
  );
};

export default Puplish;
