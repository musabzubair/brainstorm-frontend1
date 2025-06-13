import React from 'react';

export default function ErrorMessage({ message }) {
  return (
    <div style={{ color: 'red', marginBottom: 20 }}>
      <strong>Error:</strong> {message}
    </div>
  );
}
