import React from 'react';
import CandyCard from './CandyCard';


// carta de dulces
const candies = [
  {
    id: 1,
    image: 'https://www.demoslavueltaaldia.com/sites/default/files/caramelos_de_frutas_ok.jpg',
    title: 'Caramelos de Fruta',
    description: 'Deliciosos caramelos echos de fruta artesanal.',
    price: '3.99',
  },
  {
    id: 2,
    image: 'https://bomboneriasuiza.com/wp-content/uploads/2011/12/tabletas-artesanales1.jpg',
    title: 'Chocolates Artesanales',
    description: 'Delicioso chocolate artesanal hecho a mano la especialidad de la casa.',
    price: '5.00',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JiOFCHHVlmkZRkDbmJRbO5Tb2l_A6bGwTw&s',
    title: 'Gomitas Variadas',
    description: 'Gomitas de diferentes variedades sabores y colores .',
    price: '2.99',
  },
];

const CandyList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {candies.map((candy) => (
        <CandyCard
          key={candy.id}
          image={candy.image}
          title={candy.title}
          description={candy.description}
          price={candy.price}
        />
      ))}
    </div>
  );
};

export default CandyList;