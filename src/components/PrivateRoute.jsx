import React from 'react';
import { Navigate } from 'react-router-dom';
import { history } from '../helpers';

export const PrivateRoute = ({ children }) => {
  const authenticated = localStorage.getItem('authenticated');

  if (!authenticated) {
      return <Navigate to="/" state={{ from: history.location }} />
  }
  
  return children;
}
