//* redux related imports
import { useDispatch, useSelector } from 'react-redux';

//*Import all actions
import * as Action from './store/actions/index';

const App = () => {
   const dispatch = useDispatch();
   const testInitialState = useSelector((state) => console.log(state.mainReducer.test));

   const tryFct = () => {
      dispatch(Action.changeTest(true));
   };

   return (
      <>
         <div>
            coucou
            <button onClick={tryFct}>click-me</button>
            {testInitialState}
         </div>
      </>
   );
};

export default App;
