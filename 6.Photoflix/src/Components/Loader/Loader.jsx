import React from 'react';

const Loader = () => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const spinnerStyle = {
    border: '4px solid #f3f3f3', /* Light grey */
    borderTop: '4px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 2s linear infinite',
  };

  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Loader;
