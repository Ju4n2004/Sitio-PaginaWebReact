import React from 'react';

const Header = () => {
  return (
    <header className="bg-pink-300 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título */}
        <h1 className="text-2xl font-bold text-center md:text-left">
          Candy Land
        </h1>
        
        {/* panel navegacion opcional */}
        <nav className="hidden md:block">
          
        </nav>
        
        {/* boton version movil */}
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;