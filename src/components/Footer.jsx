import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-300 text-white py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Información de la empresa */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">Candy Land</h3>
            <p className="mt-2 text-sm text-gray-950">Endulza tus momentos con nuestros productos artesanales.</p>
          </div>

          {/* Enlaces rápidos (puedes añadir más secciones aquí) */}
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h4 className="font-semibold text-lg">Enlaces rápidos</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400">Inicio</a>
              </li>
              <li>
                <a href="/productos" className="hover:text-yellow-400">Productos</a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-8 text-center text-sm text-gray-950">
          <p>&copy; {new Date().getFullYear()} Candy Land. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;