import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router';
import { UserContext } from '../../UserContext';

const ProtectedRoute = ({ ...props }) => {
  const { token } = useContext(UserContext);
  if (token) return <Route {...props} />;
  else if (!token) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
