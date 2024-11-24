import React from 'react';

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature)' }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nature's Beauty</h1>
        <p className="text-lg mb-4">Discover the wonders of the natural world.</p>
        <a href="/gallery" className="bg-green-500 px-6 py-2 rounded text-white hover:bg-green-400">Explore Gallery</a>
      </div>
    </div>
  );
};

export default Home;
