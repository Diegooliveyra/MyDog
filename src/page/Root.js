import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';

import GlobalStyle from './../styles/GlobalStyle';

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default Root;
