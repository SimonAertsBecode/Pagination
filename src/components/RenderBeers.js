import React from 'react';

//* Router related import
import { Link } from 'react-router-dom';

//* Redux related imports
import { useSelector } from 'react-redux';

const RenderBeers = () => {
   const beers = useSelector((state) => state.mainReducer.api);

   const renderListOfBeers = () => {
      return beers.map((beer) => {
         return (
            <li key={beer.id}>
               <Link to={`${beer.id}`} state={beer}>
                  <h3>{beer.name}</h3>
                  <img src={beer.image_url} alt={beer.name}></img>
               </Link>
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
