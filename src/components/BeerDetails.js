import React from 'react';
import { useLocation } from 'react-router-dom';

const BeerDetails = () => {
   const location = useLocation();

   const { state: beer } = location;
   console.log(beer);

   return (
      <section className='beer-details'>
         <img src={beer.image_url} alt={beer.name} />
         <div>
            <h3>{beer.name}</h3>
            <p>{beer.description}</p>
         </div>
      </section>
   );
};

export default BeerDetails;
