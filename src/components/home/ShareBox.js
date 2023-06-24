import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramShareButton,
  TelegramIcon,
  EmailIcon,
  EmailShareButton,
} from 'react-share';
import share from '../../assets/ICONs/share.png';
import w from '../../assets/ICONs/w.png';

const ShareBox = ({ text, url, image, quote }) => {
  // (url);

  return (
    <div className='dropdown pointer'>
      {image ? (
        <img
          src={w}
          alt='share'
          className='heart dropdown-toggle removearrow'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          loading='lazy'
        />
      ) : text ? (
        <h5
          className='fw-bold dropdown-toggle removearrow'
          style={{ color: ' #0029ff' }}
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          مشاركة رابط الملف الشخصي
        </h5>
      ) : (
        <img
          src={share}
          alt='share'
          className='heart dropdown-toggle removearrow'
          data-bs-toggle='dropdown'
          aria-expanded='false'
          loading='lazy'
        />
      )}
      <ul className='dropdown-menu'>
        <FacebookShareButton className='mx-1 my-1' url={url} quote={quote}>
          <FacebookIcon size='40' round={true}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton className='mx-1 my-1' url={url}>
          <TwitterIcon size='40' round={true}></TwitterIcon>
        </TwitterShareButton>
        <LinkedinShareButton className='mx-1 my-1' url={url}>
          <LinkedinIcon size='40' round={true}></LinkedinIcon>
        </LinkedinShareButton>
        <WhatsappShareButton className='mx-1 my-1' url={url}>
          <WhatsappIcon size='40' round={true}></WhatsappIcon>
        </WhatsappShareButton>
        <TelegramShareButton className='mx-1 my-1' url={url}>
          <TelegramIcon size='40' round={true}></TelegramIcon>
        </TelegramShareButton>
        <EmailShareButton className='mx-1 my-1' url={url}>
          <EmailIcon size='40' round={true}></EmailIcon>
        </EmailShareButton>
      </ul>
    </div>
  );
};

export default ShareBox;
