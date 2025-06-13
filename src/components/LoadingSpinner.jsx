import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center my-6">
      <div className="w-9 h-9 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
