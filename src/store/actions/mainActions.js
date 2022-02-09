import mainActions from './constant';
import axios from 'axios';

export const fetchData = (page = 1) => {
   return (dispatch) => {
      axios
         .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
         .then((res) => {
            let data = {
               api: res.data,
               pageNumber: page,
            };
            dispatch({
               type: mainActions.FETCH_DATA,
               payload: data,
            });
         })
         .catch((err) => {
            console.log(err.message);
         });
   };
};

export const changePage = (value) => {
   return (dispatch) => {
      dispatch({ type: mainActions.CHANGE_PAGE, payload: value });
   };
};
