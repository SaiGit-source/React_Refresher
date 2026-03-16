import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecretsPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <>
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🤫 Secrets Page</h1>
      <p>Only logged-in Admin users can see this!</p>
    </div>
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
    </>
  );
};

export default SecretsPage;