import React, { useState, useEffect } from 'react';
import VerifyedDetails from './VerifyedDetails';
import SelectSalary from './SelectSalary';
import ReviewDetails from './ReviewDetails';
import axios from 'axios';
import {
  get_ad_info,
  image_url,
  puplish_ad_url,
  video_url,
} from '../../utils/constants';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from '../shared-components/Loading';
import RequestError from '../shared-components/RequestError';
import { useUserContext } from '../../contexts/UserProvider';
import Message from '../shared-components/Message';
import RedirectToPage from '../shared-components/RedirectToPage';

const Edit = () => {
  const [adSuccess, setAdSucess] = useState(false);
  const { token } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState(false);
  const [formErrors, setFormErrors] = useState({ maxVideoUpload: '' });
  const [isSubmit, setIsSubmit] = useState(false);
  const [payCom, setPayCom] = useState(false);
  const [crednitialAd, setCrednitialAd] = useState({});
  const navigate = useNavigate('/');
  const { adid } = useParams();

  // video
  // videoUploaded: e.target.files[0],
  //       images: { ...formValues.images, img1: {}, img2: {}, img3: {} },
  const makeFunc = (e) => {
    const readerv = new FileReader();
    readerv.onload = () => {
      if (readerv.readyState === 2) {
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
          currentVideo: readerv.result,
        });
      }
    };
    readerv.readAsDataURL(e.target.files[0]);
  };
  let initialValues = {
    id: '',
    address: '',
    salary: '',
    adType: '',
    payment_option: '',
    currentVideo: '',
    adsName: '',
    explainAds: '',
    category_id: '',
    isNegotiatable: '',
    contact: '',
    city_id: '',
    country_id: '',
    country_code: '',
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
        img3: '',
        imgServer: '',
      },
      img5: {
        img3: '',
        imgServer: '',
      },
      img6: {
        img3: '',
        imgServer: '',
      },
      img7: {
        img3: '',
        imgServer: '',
      },
      img8: {
        img3: '',
        imgServer: '',
      },
    },
    upload: 'picture',
    videoUploaded: '',
    carStatus: '',
    engineStatus: '',
    package_id: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const sendeddata = {
    id: formValues.id,
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
    file_6: formValues.images.img6.imgServer,
    file_7: formValues.images.img7.imgServer,
    file_8: formValues.images.img8.imgServer,
    country_code: formValues.country_code,
    package_id: formValues.package_id,
    is_new: formValues.carStatus,
    is_manual: formValues.engineStatus,
  };
  const getAdInfo = async () => {
    setLoading(true);
    try {
      const res = await axios(`${get_ad_info}${adid}`);
      const f = res.data.data;
      if (f.advertisement_attachements[0].files.split('.').pop() == 'mp4') {
        setFormValues({
          ...formValues,
          id: f.id,
          address: f.location,
          salary: f.price,
          adType: f.ad_type,
          payment_option: f.payment_option,
          adsName: f.title,
          explainAds: f.disription,
          category_id: f.category_id,
          isNegotiatable: f.isNegotiatable,
          contact: f.contact_methodes,
          country_id: f.Package.country_id,
          city_id: f.city_id,
          country_code: f.country_code,
          package_id: f.Package.id,
          carStatus: f.is_new,
          engineStatus: f.is_manual,
          currentVideo: `${video_url}${f.advertisement_attachements[0].files}`,
          videoUploaded: `${video_url}${f.advertisement_attachements[0].files}`,
          upload: 'video',
        });
      } else {
        setFormValues({
          ...formValues,
          id: f.id,
          address: f.location,
          salary: f.price,
          adType: f.ad_type,
          payment_option: f.payment_option,
          adsName: f.title,
          explainAds: f.disription,
          category_id: f.category_id,
          isNegotiatable: f.isNegotiatable,
          contact: f.contact_methodes,
          country_id: f.Package.country_id,
          city_id: f.city_id,
          country_code: f.country_code,
          package_id: f.Package.id,
          carStatus: f.is_new,
          engineStatus: f.is_manual,
          upload: 'picture',
          images: {
            img1: {
              img1: `${image_url}/${f.advertisement_attachements[0].files}`,
              imgServer: f.advertisement_attachements[0]?.files,
            },
            img2: {
              img2: `${
                f.advertisement_attachements[1]
                  ? image_url + f.advertisement_attachements[1].files
                  : ''
              }`,
              imgServer: f.advertisement_attachements[1]?.files,
            },
            img3: {
              img3: `${
                f.advertisement_attachements[2]
                  ? image_url + f.advertisement_attachements[2].files
                  : ''
              }`,
              imgServer: f.advertisement_attachements[2]?.files,
            },
            img4: {
              img4: `${
                f.advertisement_attachements[3]
                  ? image_url + f.advertisement_attachements[3].files
                  : ''
              }`,
              imgServer: f.advertisement_attachements[3]?.files,
            },
            img5: {
              img5: `${
                f.advertisement_attachements[4]
                  ? image_url + f.advertisement_attachements[4].files
                  : ''
              }`,
              imgServer: f.advertisement_attachements[4]?.files,
            },
            img6: {
              img6: `${
                f.advertisement_attachements[5]
                  ? image_url + f.advertisement_attachements[5].files
                  : ''
              }`,
              imgServer: f.advertisement_attachements[5]?.files,
            },
            img7: {
              img7: `${
                f.advertisement_attachements[6]
                  ? image_url + f.advertisement_attachements[6].files
                  : ''
              }`,
              imgServer: f.advertisement_attachements[6]?.files,
            },
            img8: {
              img8: `${
                f.advertisement_attachements[7]
                  ? image_url + f.advertisement_attachements[7].files
                  : ''
              }`,
              imgServer: f.advertisement_attachements[7]?.files,
            },
          },
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAdInfo();
  }, [adid]);

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

  const handleRequest = async (url) => {
    setLoading(true);
    let fd = new FormData();
    fd.append('_method', 'put');
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
    if (typeof sendeddata.file !== 'string') {
      fd.append('file', sendeddata.file);
    }
    if (sendeddata.file_2 && typeof sendeddata.file_2 !== 'string') {
      fd.append('file_2', sendeddata.file_2);
    }
    if (sendeddata.file_3 && typeof sendeddata.file_3 !== 'string') {
      fd.append('file_3', sendeddata.file_3);
    }
    if (sendeddata.file_4 && typeof sendeddata.file_4 !== 'string') {
      fd.append('file_4', sendeddata.file_4);
    }
    if (sendeddata.file_5 && typeof sendeddata.file_5 !== 'string') {
      fd.append('file_5', sendeddata.file_5);
    }
    if (sendeddata.file_6 && typeof sendeddata.file_6 !== 'string') {
      fd.append('file_6', sendeddata.file_6);
    }
    if (sendeddata.file_7 && typeof sendeddata.file_7 !== 'string') {
      fd.append('file_7', sendeddata.file_7);
    }
    if (sendeddata.file_8 && typeof sendeddata.file_8 !== 'string') {
      fd.append('file_8', sendeddata.file_8);
    }
    if (sendeddata.is_new != null) {
      fd.append('is_new', sendeddata.is_new);
      fd.append('is_manual', sendeddata.is_manual);
    }
    try {
      const response = await axios.post(`${url}${sendeddata.id}`, fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      setAdSucess(true);
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
    const userloc = JSON.parse(localStorage.getItem('userlocation'));
    return setFormValues({
      ...formValues,
      address: `${userloc?.userCountryName} `,
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
  // Handle Delete Image
  const deleteSignleImage = (img) => {
    return setFormValues({
      ...formValues,
      images: { ...formValues.images, [img]: '' },
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
      makeFunc(e);
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
    // if (namecat == 'سيارات' && !values.carStatus) {
    //   errors.carStatusError = 'من فضلك أدخل حالة السيارة';
    // }
    // if (namecat == 'سيارات' && !values.engineStatus) {
    //   errors.engineStatusError = 'من فضلك أدخل حالة المحرك';
    // }
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
    if (values.isNegotiatable != 0 && values.isNegotiatable != 1) {
      errors.isNegotiatableError =
        'من فضلك ادخل ما ان كان هذا المنتج قابل للتفاوض';
    }
    if (!values.contact) {
      errors.contactMethodError = 'من فضلك أدخل وسيلة التواصل';
    }
    if (
      values.upload === 'picture' &&
      !values.images.img1.img1 &&
      !values.images.img2.img2 &&
      !values.images.img3.img3 &&
      !values.images.img3.img4 &&
      !values.images.img3.img5 &&
      !values.images.img3.img6 &&
      !values.images.img3.img7 &&
      !values.images.img3.img8
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
      handleRequest(get_ad_info);
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
          <Message textMsg='تم تعديل إعلانك بنجاح' />
          <RedirectToPage />
        </>
      ) : (
        <>
          <form
            className='Edit-product bg-primary p-4 text-white m-4 rounded'
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
        </>
      )}
    </>
  );
};

export default Edit;
