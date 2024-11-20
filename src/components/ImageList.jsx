"use client";
import React from 'react';

const ImageList = () => {
  const images = Array.from({ length: 30 }, (_, index) => {
    return `https://picsum.photos/300/200?random=${index}`;
  });

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 p-4">
    {images.map((imageUrl, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-lg shadow-lg bg-gray-400"
      >
        <img
          src={imageUrl}
          alt={`Random ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          loading="lazy"
        />
      </div>
    ))}
  </div>
  );
};

export default ImageList;
