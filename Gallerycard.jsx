import React from 'react';

const GalleryCard = ({ url, description }) => {
  return (
    <div className="border rounded shadow">
      <img src={url} alt={description} className="w-full h-64 object-cover rounded-t" />
      <p className="p-2 text-center">{description}</p>
    </div>
  );
};

export default GalleryCard;
