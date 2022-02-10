import React, { useRef, useState } from 'react';

//*Import all actions
import * as Action from '../store/actions/index';

//* React icon
import { GiBeerStein } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

//*Redux related imports
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
   const dispatch = useDispatch();

   const pageNumber = useSelector((state) => state.mainReducer.pageNumber);

   const goBack = () => {
      dispatch(Action.changePage(pageNumber - 1));
   };

   const goForward = () => {
      dispatch(Action.changePage(pageNumber + 1));
   };

   const selectPage = (value) => {
      dispatch(Action.changePage(value));
   };

   const returnButton = (value) => {
      return (
         <button
            onClick={() => {
               selectPage(value);
            }}
         >
            <GiBeerStein />
         </button>
      );
   };
   return (
      <section className='pagination'>
         <section className='buttons'>
            {pageNumber === 1 ? (
               <button disabled={true}>
                  <IoIosArrowBack />
               </button>
            ) : (
               <button onClick={goBack}>
                  <IoIosArrowBack />
               </button>
            )}
            {returnButton(1)}
            {returnButton(2)}
            {returnButton(3)}
            {pageNumber === 3 ? (
               <button disabled={true}>
                  <IoIosArrowForward />
               </button>
            ) : (
               <button onClick={goForward}>
                  <IoIosArrowForward />
               </button>
            )}
         </section>
      </section>
   );
};

export default Pagination;
