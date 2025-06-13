import React from 'react';

export default function LoadingSpinner() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <div className="spinner" style={{
        width: 36,
        height: 36,
        border: '4px solid #ccc',
        borderTop: '4px solid #3b82f6',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: 'auto',
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
