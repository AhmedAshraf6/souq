import React from 'react';
import { useMainContext } from '../../contexts/MainProvider';
import DesktopDropdown from './DesktopDropdown';
import ResponDropdown from './ResponDropdown';

const SelectProduct = () => {
  const { allCats } = useMainContext();

  return (
    <div className='select-product'>
      <h2 className='text-primary text-center py-3'>انشر إعلانك</h2>
      <section className='edit-profile-com bg-primary p-4 text-white m-4 rounded'>
        <div className='container-fluid'>
          <div className='box border-bottom pb-4'>
            <h4>اختر الفئة</h4>
          </div>
          <div className='row'>
            <div className=' col-lg-4 col-md-6 mt-3'>
              <div className='bg-light rounded'>
                {/* Desktop */}
                <div className='d-none d-md-block'>
                  {allCats.map((cat) => {
                    return <DesktopDropdown key={cat.id} {...cat} />;
                  })}
                </div>
                {/* Desktop */}
                {/* Mobile and Tablet */}
                <div className='reponsive-dropdown d-block d-md-none'>
                  {allCats.map((cat) => {
                    return <ResponDropdown key={cat.id} {...cat} />;
                  })}
                </div>
                {/* Mobile and Tablet */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectProduct;
