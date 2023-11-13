import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const Button = ({ category, onClick }) => {
  const activeCategory = useSelector((state) => state.category.category);

  return (
    <button
      onClick={onClick}
      className={
        activeCategory === category
          ? 'bg-orange-500 text-white font-bold py-2 px-4 border border-orange-500 rounded cursor-pointer sm:p-1 xsm:p-[2px] sm:text-sm xsm:text-xs'
          : 'bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 border border-gray-200 rounded cursor-pointer sm:p-1 xsm:p-[2px] sm:text-sm xsm:text-xs'
      }
    >
      {category}
    </button>
  );
};
