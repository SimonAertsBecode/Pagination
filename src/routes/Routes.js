import { Routes, Route, Navigate } from 'react-router-dom';

//* Import Components
import BeerDetails from '../components/BeerDetails';
import Home from '../components/Home';

const Routing = () => {
   return (
      <Routes>
         <Route index element={<Home />} />
         <Route path=':id' element={<BeerDetails />} />
         <Route path='*' element={<Navigate to='/' />} />
      </Routes>
   );
};

export default Routing;
