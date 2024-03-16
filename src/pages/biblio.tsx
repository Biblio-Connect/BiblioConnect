import React from 'react';
import { TbBrandTinder } from 'react-icons/tb';

const Binder: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
  <div className="max-w-xl w-4/5">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
        <img src="https://m.media-amazon.com/images/I/71u2rYjpD8L._SY522_.jpg" alt="Placeholder" className="object-cover" />
    </div>
    <div className="p-4">
      <h2 className="text-6xl font-semibold mb-2">Name</h2>
      <p className="text-lg text-gray-600 mb-2">Description</p>
      <p className="text-gray-600 mb-2">Chapter</p>
      <p className="text-gray-600 mb-2">Genres</p>
    </div>
  </div>
    <div>
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
    </div>
    
</div>
    

  );
};

export default Binder;
