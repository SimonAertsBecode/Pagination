//* redux related imports
import { useDispatch } from 'react-redux';

//*Import all actions
import * as Action from './store/actions/index';

//*Import components
import RenderBeers from './components/RenderBeers';
import Pagination from './components/Pagination';
import { useEffect } from 'react';

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(Action.fetchData());
   }, [dispatch]);

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

export default App;
