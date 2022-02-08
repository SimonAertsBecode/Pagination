import actionObject from './constant';

export const changeTest = (value) => {
   return (dispatch) => {
      dispatch({
         type: actionObject.TEST,
         payload: value,
      });
   };
};
