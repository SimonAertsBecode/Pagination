import mainActions from '../actions/constant';

const initialState = {
   api: [],
};

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case mainActions.FETCH_DATA:
         console.log(action.type);
         return {
            ...state,
            api: action.payload,
         };
      default:
         return {
            ...state,
         };
   }
};
