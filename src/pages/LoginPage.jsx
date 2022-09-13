import React from 'react';
import Form from '../components/Form';
import BannerLogin from '../assets/banner-login.png';

import '../styles/login-page.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="BannerDiv">
        <img src={BannerLogin} alt="Ghibli Logo" className="GhibliLogo" />
      </div>
      <Form/>
    </div>
  )
}

export default LoginPage
