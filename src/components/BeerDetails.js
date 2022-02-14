import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BeerDetails = () => {
   const location = useLocation();
   const navigate = useNavigate();

   const { state: beer } = location;

   const goBack = () => {
      navigate(-1);
   };

   return (
      <section className='beer-details'>
         <img src={beer.image_url} alt={beer.name} />

         <div>
            <button onClick={goBack}>Go back</button>
            <h3>{beer.name}</h3>
            <p>{beer.description}</p>
         </div>
      </section>
   );
};

export default BeerDetails;
