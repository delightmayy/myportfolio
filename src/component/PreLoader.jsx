
import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500 border-solid" />
    </div>
  );
};

export default Preloader;
