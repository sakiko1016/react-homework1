import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {

  const { id } = useParams();

  const cars = [
    {id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 24000},
    {id: 2, make: 'Honda', model: 'Civic', year: 2021, price: 22000},
    {id: 3, make: 'Ford', model: 'F-150', year: 2020, price: 30000}
  ];

  const car = cars.find(c => c.id === parseInt(id));

  return (
    <div>
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
    </div>
  );
}

export default CarDetails;