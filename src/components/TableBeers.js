import React from 'react';

//* Router related import
import { Link } from 'react-router-dom';

//* Redux related imports
import { useSelector } from 'react-redux';

import Tilt from 'react-parallax-tilt';

const TableBeers = () => {
   const beers = useSelector((state) => state.mainReducer.api);

   const RenderBeers = () => {
      return beers.map((beer) => {
         return (
            <tr key={beer.id}>
               <td className='image'>
                  <img src={beer.image_url} alt={beer.name}></img>
               </td>
               <td>
                  <h3>{beer.name}</h3>
               </td>
               <td className='description'>
                  <p>{beer.description}</p>
                  <Link to={`${beer.id}`} state={beer}>
                     <button>see more</button>
                  </Link>
               </td>
            </tr>
         );
      });
   };

   return (
      <section className='list-beers'>
         <table>
            <thead>
               <tr>
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Description</th>
               </tr>
            </thead>
            <tbody>{RenderBeers()}</tbody>
         </table>
      </section>
   );
};

export default TableBeers;
