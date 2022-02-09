import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//*Import reducers
import rootReducer from './store/reducers/index';

//*Import style
import './scss/index.scss';

//* Router related imports
import { BrowserRouter } from 'react-router-dom';

//**Imports for redux */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);
