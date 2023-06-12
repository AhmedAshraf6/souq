import axios from 'axios';
import { getAdditionalUserInfo } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import BasicInfo from '../components/edit-profile/BasicInfo';
import Loading from '../components/shared-components/Loading';
import IdentityDocumented from '../components/edit-profile/IdentityDocumented';

import { useMainContext } from '../contexts/MainProvider';
import { useUserContext } from '../contexts/UserProvider';
import { image_url, update_profile_url } from '../utils/constants';
import Message from '../components/shared-components/Message';
import RedirectToPage from '../components/shared-components/RedirectToPage';

const EditProfile = () => {
  const intialValues = {
    name: '',
    sur_name: '',
    address: '',
    image: '',
    currentImage: '',
    email: '',
    phone: '',
    id_image: '',
    currentIdImage: '',
    id_user_image: '',
    currentIdUserImage: '',
  };
  const [formValues, setFormValues] = useState(intialValues);
  const { token } = useUserContext();
  const { userInfo } = useUserContext();
  const [editSuccess, setEditSuccess] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [errorRequest, setErrorRequest] = useState(false);
  const [showIdentity, setShowIdentity] = useState(false);
  const { toggleNavbarFunc, closeSubmenu, closeSearch } = useMainContext();

  useEffect(() => {
    userInfo &&
      Object.keys(userInfo).length !== 0 &&
      setFormValues({
        ...formValues,
        name: userInfo.name ? userInfo.name : '',
        sur_name: userInfo.sur_name ? userInfo.sur_name : '',
        address: userInfo.adress ? userInfo.adress : '',
        image: userInfo.image ? userInfo.image : '',
        currentImage: `${userInfo.image ? image_url + userInfo.image : ''}`,
        email: userInfo.email ? userInfo.email : '',
        phone: userInfo.phone ? userInfo.phone : '',
        id_image: userInfo.id_image ? userInfo.id_image : '',
        currentIdImage: `${
          userInfo.id_image ? image_url + userInfo.id_image : ''
        }`,
        id_user_image: userInfo.id_user_image
          ? userInfo.id_user_image
          : userInfo.id_user_image,
        currentIdUserImage: `${
          userInfo.id_user_image ? image_url + userInfo.id_user_image : ''
        }`,
      });
  }, [userInfo]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleChangeImage = (e) => {
    const { name, files } = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        if ([name] == 'image') {
          setFormValues({
            ...formValues,
            [name]: files[0],
            currentImage: reader.result,
          });
        } else if ([name] == 'id_image') {
          setFormValues({
            ...formValues,
            [name]: files[0],
            currentIdImage: reader.result,
          });
        } else if ([name] == 'id_user_image') {
          setFormValues({
            ...formValues,
            [name]: files[0],
            currentIdUserImage: reader.result,
          });
        }
      }
    };
    reader.readAsDataURL(files[0]);
  };
  const deleteSelectedImage = () => {
    setFormValues({ ...formValues, image: '', currentImage: '' });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.viewerNameError = 'من فضلك أدخل الأسم';
    }
    if (!values.sur_name) {
      errors.identityNameError = 'من فضلك أدخل أسمك كما هو في الهوية الشخصية';
    }
    if (!values.address) {
      errors.addressError = 'من فضلك أدخل عنوانك';
    }
    if (!values.image) {
      errors.imageError = 'من فضلك ارفع صورة خاصة بك ';
    }
    if (!values.phone) {
      errors.phoneNumberError = 'من فضلك أدخل رقم هاتفك';
    }
    if (values.phone.length > 11) {
      errors.phoneNumberLengthError = 'من فضلك أدخل رقم هاتف صحيح';
    }
    if (!values.id_image && showIdentity) {
      errors.idImageErrorr = 'من فضلك أدخل ارفع صورة ';
    }
    if (!values.id_user_image && showIdentity) {
      errors.idUserImageError = 'من فضلك أدخل ارفع صورة ';
    }
    if (!values.email) {
      errors.emailError = 'من فضلك أدخل البريد الإلكتروني ';
    } else if (!regex.test(values.email)) {
      errors.emailNotValid = 'من فضلك أدخل عنوان بريد إلكرتوني صحيح';
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setShowIdentity(true);
    }
    if (Object.keys(formErrors).length === 0 && isSubmit && showIdentity) {
      handleUpdateProfile();
    }
  }, [formErrors]);

  const handleUpdateProfile = async () => {
    setLoading(true);
    const fd = new FormData();
    fd.append('name', formValues.name);
    fd.append('sur_name', formValues.sur_name);
    fd.append('adress', formValues.address);
    fd.append('email', formValues.email);
    fd.append('phone', formValues.phone);
    if (typeof formValues.image !== 'string') {
      fd.append('image', formValues.image);
    }
    if (typeof formValues.id_image !== 'string') {
      fd.append('id_image', formValues.id_image);
    }
    if (typeof formValues.id_user_image !== 'string') {
      fd.append('id_user_image', formValues.id_user_image);
    }
    try {
      const response = await axios.post(update_profile_url, fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(false);
      setEditSuccess(true);

      // console.log(values);
    } catch (error) {
      setLoading(false);

      // console.log(values);
    }
  };

  useEffect(() => {
    toggleNavbarFunc(false);
    closeSubmenu(false);
    closeSearch();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      {loading ? (
        <Loading />
      ) : editSuccess ? (
        <>
          <Message textMsg='تم تعديل بيناتك بنجاح' />
          <RedirectToPage />;
        </>
      ) : (
        <section className='edit-profile bg-primary p-4 text-white my-4 mx-1 mx-sm-4  rounded'>
          <div className='container-fluid'>
            <div className='box border-bottom pb-4'>
              <h4>تعديل الملف الشخصي</h4>
            </div>
            {!showIdentity && (
              <BasicInfo
                formValues={formValues}
                handleChange={handleChange}
                handleChangeImage={handleChangeImage}
                formErrors={formErrors}
                handleSubmit={handleSubmit}
                deleteSelectedImage={deleteSelectedImage}
              />
            )}
            {showIdentity && (
              <IdentityDocumented
                formValues={formValues}
                handleChangeImage={handleChangeImage}
                formErrors={formErrors}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default EditProfile;
