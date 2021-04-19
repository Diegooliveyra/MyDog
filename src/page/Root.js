import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Cadastro from './Cadastro/Cadastro';

import GlobalStyle from './../styles/GlobalStyle';
import ProtectedRoute from '../components/helper/ProtectRoute';
import { UserProvider } from '../UserContext';

function Root() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <ProtectedRoute path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        <GlobalStyle />
      </UserProvider>
    </BrowserRouter>
  );
}

export default Root;
