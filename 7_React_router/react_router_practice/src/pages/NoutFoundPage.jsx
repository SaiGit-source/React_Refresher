import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <h1 style={{ fontSize: '5rem', margin: '0' }}>404</h1>
      <h2 style={{ margin: '0.5rem 0' }}>Page Not Found</h2>
      <p style={{ margin: '1rem 0', maxWidth: '500px' }}>
        Oops! The page you are looking for does not exist or access denied. It might have been moved or the URL may be incorrect.
      </p>
      <button
        onClick={goHome}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;