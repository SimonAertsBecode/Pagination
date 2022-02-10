import React from 'react';

//* redux related imports
import { useDispatch, useSelector } from 'react-redux';

//* React related imports
import { useEffect, useRef } from 'react';

//*Import all actions
import * as Action from '../store/actions/index';

//*Import components
import RenderBeers from './RenderBeers';
import Pagination from './Pagination';

const Home = () => {
   const dispatch = useDispatch();

   const pageNumber = useSelector((state) => state.mainReducer.pageNumber);

   useEffect(() => {
      dispatch(Action.fetchData(pageNumber));
   }, [dispatch, pageNumber]);

   return (
      <>
         <section className='container'>
            <h1>Famoco's exercice</h1>
            <RenderBeers />
         </section>
         <Pagination />
      </>
   );
};

export default Home;
