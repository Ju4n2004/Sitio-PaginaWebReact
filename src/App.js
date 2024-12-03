import Header from './components/Header';
import './App.css';
import CandyList from './components/CandyList';
import Carousel from './components/Carousel';
import Footer from './components/Footer'; // Importamos el Footer


function App() {
  return (
    <div className="min-h-screen bg-pink-100">
      {/* Header */}
      <Header />
      
      <main className="p-6">
        {/* Bienvenida */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
         Bienvenido a CandyLand
        </h2>

         
        {/* Carrusel de imágenes */}
        <Carousel />
        
        
        {/* Lista de dulces */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Explora nuestros dulces
          </h3>
          <CandyList />
        </section>
      </main>

        {/* Footer */}
        <Footer />
    </div>
  );
}

export default App;
