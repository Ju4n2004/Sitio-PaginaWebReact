import React from 'react';

const CandyCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          <button className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-400">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandyCard;