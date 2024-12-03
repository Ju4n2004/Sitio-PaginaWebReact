import React, { useState } from 'react';

const Carousel = () => {
  const images = [
    'https://youtalkonline.com/wp-content/uploads/Dulces-en-ingles.jpg',
    'https://media.gq.com.mx/photos/5fa42e676125b094d54f396c/16:9/w_2560%2Cc_limit/dulces.jpg',
    'https://st.depositphotos.com/1064024/3289/i/450/depositphotos_32891271-stock-photo-mixed-colorful-fruit-bonbon.jpg',
    'https://media.istockphoto.com/id/1137312508/es/foto/surtido-de-productos-con-alto-nivel-de-az%C3%BAcar.jpg?s=612x612&w=0&k=20&c=XJEG7Nqqqdusbuks2AYLmy6p0IwWH_88CI4PP5A_RK0='
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-full sm:max-w-4xl mx-auto mt-8">
      {/* imagen princiapl */}
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
      />
      
     {/* boton imagen anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 sm:left-6"
      >
        &#10094;
      </button>
      
      {/* boton siguiente imagen */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 sm:right-6"
      >
        &#10095;
      </button>

     {/* indicaciones imagen */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;