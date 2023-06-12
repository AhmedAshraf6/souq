import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToPage = ({ url = '/', seconds = '3000' }) => {
  const navigate = useNavigate();
  const timer = setTimeout(() => {
    navigate(`${url}`);
  }, seconds);
  return () => {
    clearTimeout(timer);
  };
};

export default RedirectToPage;
