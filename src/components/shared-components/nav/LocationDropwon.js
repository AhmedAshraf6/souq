import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import dowarrow2 from '../../../assets/ICONs/dowarrow2.png';
import loupe from '../../../assets/ICONs/loupe.png';
import mylocation from '../../../assets/ICONs/mylocation.png';
import { useMainContext } from '../../../contexts/MainProvider';
import { country_list_url } from '../../../utils/constants';
import { Link, useLocation } from 'react-router-dom';

const LocationDropwon = ({ removesearch }) => {
  const userloc = JSON.parse(localStorage.getItem('userlocation'));

  const { handleCountryId, renderedWord, myLocationFunction, handleCityId } =
    useMainContext();
  const [countries, setCountries] = useState([]);
  const location = useLocation();
  const [cities, setCities] = useState([]);

  // console.log(removesearch);
  const showed = useRef();
  const removeshow = () => {
    showed.current.classList.remove('show');
  };

  const fetchCountries = async () => {
    try {
      const response = await axios(country_list_url);
      setCountries(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    removeshow();
  }, [renderedWord]);

  return (
    <div className='location-dropdown dropdown w-100'>
      <button
        className='btn btn-light  dropdown-toggle removearrow custom-dropdown ms-3 w-100 d-flex justify-content-between align-items-center'
        type='button'
        id='first-dropdown'
        data-bs-toggle='dropdown'
        data-bs-auto-close='outside'
        onClick={fetchCountries}
      >
        <div className='d-flex align-items-center'>
          {!removesearch && (
            <div>
              <img loading='lazy' src={loupe} alt='car' className='icon' />
            </div>
          )}
          <span className='text-primary me-3 fw-bold text-wrap text-end'>
            {location.pathname == '/' ? userloc.userCountryName : renderedWord}
          </span>
        </div>
        <img loading='lazy' src={dowarrow2} alt='dowarrow2' className='icon' />
      </button>
      <ul
        className='dropdown-menu w-100'
        aria-labelledby='first-dropdown'
        id='AppDropDownId'
        ref={showed}
      >
        <h6
          className='text-primary px-4 pointer fw-bold d-flex align-items-center justify-content-start'
          onClick={myLocationFunction}
        >
          <img
            loading='lazy'
            src={mylocation}
            alt='mylocation'
            className='very-small-icon'
          />
          استخدم الموقع الحالي
        </h6>
        {/* Second Level  */}
        {countries &&
          countries.length > 0 &&
          countries.map((country) => {
            const { id, name_ar, country_code, currency, cities } = country;
            return (
              <li key={id}>
                <div className='btn-group  dropdown w-100'>
                  <button
                    type='button'
                    className='btn btn-light dropdown-toggle custom-dropdown  w-100 '
                    data-bs-toggle='dropdown'
                  >
                    <span
                      className='text-primary fw-bold'
                      onClick={() => setCities(cities)}
                    >
                      {name_ar}
                    </span>
                  </button>

                  <ul
                    className='cities dropdown-menu w-100 third-dropdown overflow-auto '
                    style={{ maxHeight: '400px' }}
                  >
                    <li className='d-flex justify-content-between align-items-center text-wrap text-end'>
                      <Link
                        className='dropdown-item text-primary fw-bold'
                        type='button'
                        onClick={() => {
                          handleCountryId(country_code, name_ar, currency);
                        }}
                        to='/categoryPage'
                      >
                        عرض اعلانات جميع المدن ب{name_ar}
                      </Link>
                    </li>
                    {cities &&
                      cities.length &&
                      cities.map((city) => {
                        const { name, id: city_id } = city;

                        return (
                          <li
                            className='d-flex justify-content-between align-items-center text-wrap text-end '
                            key={city_id}
                          >
                            <Link
                              className='dropdown-item text-primary'
                              type='button'
                              onClick={() => {
                                handleCityId(
                                  city_id,
                                  `${name_ar} , ${name}`,
                                  currency
                                );
                              }}
                              to='/categoryPage'
                            >
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default LocationDropwon;
