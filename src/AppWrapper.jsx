import React from 'react';
import './AppWrapper.css';

export const AppWrapper = ({ children }) => {
  return (
    <div className="app-wrapper">
      {children}
    </div>
  );
};

