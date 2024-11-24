import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Nature's Beauty</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-green-300">Home</Link></li>
          <li><Link to="/gallery" className="text-white hover:text-green-300">Gallery</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
