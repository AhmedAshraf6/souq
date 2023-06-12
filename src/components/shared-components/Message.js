import React from 'react';

const Message = ({
  color = 'text-primary',
  bgColor = 'alert-light',
  textMsg = 'تم التعديل بنجاح',
  widthMsg = 'w-50',
}) => {
  return (
    <div className='mx-3'>
      <div
        className={`alert ${bgColor} ${color} fs-6 ${widthMsg}  full-width mx-auto my-5 text-center`}
        role='alert'
      >
        {textMsg}
      </div>
    </div>
  );
};

export default Message;
