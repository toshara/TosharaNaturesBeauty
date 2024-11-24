import React from 'react';
import GalleryCard from '../components/GalleryCard';

const Gallery = () => {
  const photos = [
    { url: 'https://source.unsplash.com/400x300/?forest', description: 'Lush green forest' },
    { url: 'https://source.unsplash.com/400x300/?ocean', description: 'Serene ocean' },
    { url: 'https://source.unsplash.com/400x300/?mountains', description: 'Majestic mountains' },
    { url: 'https://source.unsplash.com/400x300/?wildlife', description: 'Diverse wildlife' },
    { url: 'https://source.unsplash.com/400x300/?waterfall', description: 'Beautiful waterfall' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Nature Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <GalleryCard key={index} url={photo.url} description={photo.description} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
