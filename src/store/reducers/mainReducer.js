import actionObject from '../actions/constant';

const initialState = {
   test: null,
};

console.log(actionObject);

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionObject.TEST:
         return {
            ...state,
            test: action.payload,
         };
      default:
         return {
            ...state,
         };
   }
};
