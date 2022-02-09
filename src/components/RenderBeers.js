import React from 'react';

//* Redux related imports
import { useSelector } from 'react-redux';

const RenderBeers = () => {
   const beers = useSelector((state) => state.mainReducer.api);

   console.log(beers);

   const renderListOfBeers = () => {
      return beers.map((beer) => {
         return (
            <li key={beer.id}>
               <h3>{beer.name}</h3>
               <img src={beer.image_url} atl={beer.name}></img>
            </li>
         );
      });
   };
   return (
      <section className='list-beers'>
         <ul>{renderListOfBeers()}</ul>
      </section>
   );
};

export default RenderBeers;
