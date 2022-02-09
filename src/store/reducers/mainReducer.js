import mainActions from '../actions/constant';

const initialState = {
   api: [],
   pageNumber: 1,
};

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case mainActions.FETCH_DATA:
         const { api, pageNumber } = action.payload;
         return {
            ...state,
            api: api,
            pageNumber: pageNumber,
         };
      case mainActions.CHANGE_PAGE:
         return {
            ...state,
            pageNumber: action.payload,
         };
      default:
         return {
            ...state,
         };
   }
};
