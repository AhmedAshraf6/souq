import React from 'react';

export default function ({
  deleteSignleImage,
  handleChangeImages,
  formValues,
}) {
  return (
    <>
      <div className='col-lg-2 col-sm-3 '>
        <div className='picture-upload bg-light  rounded position-relative'>
          {!formValues.images.img1.img1 && (
            <input
              type='file'
              className='custom-picture-upload pointer w-100 h-100'
              accept='image/*'
              name='img1'
              onChange={handleChangeImages}
            />
          )}
          {formValues.images.img1.img1 && (
            <>
              <input
                type='file'
                className='img-cover pointer '
                accept='image/*'
                name='img1'
                onChange={handleChangeImages}
                style={{
                  backgroundImage: `url(${formValues.images.img1.img1})`,
                }}
              />

              <button
                type='button'
                className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                aria-label='Close'
                onClick={() => deleteSignleImage('img1')}
              ></button>
            </>
          )}
        </div>
      </div>

      <div className='col-lg-2 col-sm-3 '>
        <div className='picture-upload bg-light  rounded position-relative'>
          {!formValues.images.img2.img2 && (
            <input
              type='file'
              className='custom-picture-upload pointer w-100 h-100'
              accept='image/*'
              name='img2'
              onChange={handleChangeImages}
            />
          )}
          {formValues.images.img2.img2 && (
            <>
              <button
                type='button'
                className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                aria-label='Close'
                onClick={() => deleteSignleImage('img2')}
              ></button>
              <input
                type='file'
                className='img-cover pointer '
                accept='image/*'
                name='img2'
                onChange={handleChangeImages}
                style={{
                  backgroundImage: `url(${formValues.images.img2.img2})`,
                }}
              />
            </>
          )}
        </div>
      </div>

      <div className='col-lg-2 col-sm-3 '>
        <div className='picture-upload bg-light  rounded position-relative'>
          {!formValues.images.img3.img3 && (
            <input
              type='file'
              className='custom-picture-upload pointer w-100 h-100'
              accept='image/*'
              name='img3'
              onChange={handleChangeImages}
            />
          )}
          {formValues.images.img3.img3 && (
            <>
              <button
                type='button'
                className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                aria-label='Close'
                onClick={() => deleteSignleImage('img3')}
              ></button>
              <input
                type='file'
                className='img-cover pointer '
                accept='image/*'
                name='img3'
                onChange={handleChangeImages}
                style={{
                  backgroundImage: `url(${formValues.images.img3.img3})`,
                }}
              />
            </>
          )}
        </div>
      </div>
      {/* end 3 */}
      <div className='col-lg-2 col-sm-3 '>
        <div className='picture-upload bg-light  rounded position-relative'>
          {!formValues.images.img4.img4 && (
            <input
              type='file'
              className='custom-picture-upload pointer w-100 h-100'
              accept='image/*'
              name='img4'
              onChange={handleChangeImages}
            />
          )}
          {formValues.images.img4.img4 && (
            <>
              <button
                type='button'
                className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                aria-label='Close'
                onClick={() => deleteSignleImage('img4')}
              ></button>
              <input
                type='file'
                className='img-cover pointer '
                accept='image/*'
                name='img4'
                onChange={handleChangeImages}
                style={{
                  backgroundImage: `url(${formValues.images.img4.img4})`,
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className='col-lg-2 col-sm-3 '>
        <div className='picture-upload bg-light  rounded position-relative'>
          {!formValues.images.img5.img5 && (
            <input
              type='file'
              className='custom-picture-upload pointer w-100 h-100'
              accept='image/*'
              name='img5'
              onChange={handleChangeImages}
            />
          )}
          {formValues.images.img5.img5 && (
            <>
              <button
                type='button'
                className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                aria-label='Close'
                onClick={() => deleteSignleImage('img5')}
              ></button>
              <input
                type='file'
                className='img-cover pointer '
                accept='image/*'
                name='img5'
                onChange={handleChangeImages}
                style={{
                  backgroundImage: `url(${formValues.images.img5.img5})`,
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className='col-lg-2 col-sm-3 '>
        <div className='picture-upload bg-light  rounded position-relative'>
          {!formValues.images.img6.img6 && (
            <input
              type='file'
              className='custom-picture-upload pointer w-100 h-100'
              accept='image/*'
              name='img6'
              onChange={handleChangeImages}
            />
          )}
          {formValues.images.img6.img6 && (
            <>
              <button
                type='button'
                className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                aria-label='Close'
                onClick={() => deleteSignleImage('img6')}
              ></button>
              <input
                type='file'
                className='img-cover pointer '
                accept='image/*'
                name='img6'
                onChange={handleChangeImages}
                style={{
                  backgroundImage: `url(${formValues.images.img6.img6})`,
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className='col-lg-2 col-sm-3 '>
        <div className='picture-upload bg-light  rounded position-relative'>
          {!formValues.images.img7.img7 && (
            <input
              type='file'
              className='custom-picture-upload pointer w-100 h-100'
              accept='image/*'
              name='img7'
              onChange={handleChangeImages}
            />
          )}
          {formValues.images.img7.img7 && (
            <>
              <button
                type='button'
                className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                aria-label='Close'
                onClick={() => deleteSignleImage('img7')}
              ></button>
              <input
                type='file'
                className='img-cover pointer '
                accept='image/*'
                name='img7'
                onChange={handleChangeImages}
                style={{
                  backgroundImage: `url(${formValues.images.img7.img7})`,
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className='col-lg-2 col-sm-3 '>
        <div className='picture-upload bg-light  rounded position-relative'>
          {!formValues.images.img8.img8 && (
            <input
              type='file'
              className='custom-picture-upload pointer w-100 h-100'
              accept='image/*'
              name='img8'
              onChange={handleChangeImages}
            />
          )}
          {formValues.images.img8.img8 && (
            <>
              <button
                type='button'
                className='btn-close position-absolute btn-close-white bg-secondary p-1 '
                aria-label='Close'
                onClick={() => deleteSignleImage('img8')}
              ></button>
              <input
                type='file'
                className='img-cover pointer '
                accept='image/*'
                name='img8'
                onChange={handleChangeImages}
                style={{
                  backgroundImage: `url(${formValues.images.img8.img8})`,
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
