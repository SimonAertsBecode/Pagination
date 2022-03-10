import React, { useCallback, useMemo, useState } from 'react';

//*Import all actions
import * as Action from '../store/actions/index';

//* React icons
import { GiBeerStein } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

//*Redux related imports
import { useDispatch, useSelector } from 'react-redux';

const PaginationMemo = () => {
   const dispatch = useDispatch();

   const pageNumber = useSelector((state) => state.mainReducer.pageNumber);

   const [activeBtn, setActiveBtn] = useState(pageNumber - 1);

   const goBack = () => {
      dispatch(Action.changePage(pageNumber - 1));
      setActiveBtn(pageNumber - 2);
   };

   const goForward = () => {
      dispatch(Action.changePage(pageNumber + 1));
      setActiveBtn(pageNumber);
   };

   const selectPage = useCallback(
      (value) => {
         dispatch(Action.changePage(value));
         setActiveBtn(value - 1);
      },
      [dispatch]
   );

   const buttons = useMemo(() => {
      let buttons = [];
      for (let i = 0; i < 3 /*Can put dynamic value here dependending on the length of API*/; i++) {
         buttons.push(
            <button
               key={i}
               className={activeBtn === i ? 'btn-active' : null}
               onClick={() => {
                  selectPage(i + 1);
               }}
            >
               <GiBeerStein />
            </button>
         );
      }
      return buttons;
   }, [activeBtn, selectPage]);

   return (
      <section className='pagination'>
         <section className='buttons'>
            {pageNumber === 1 ? (
               <button disabled={true} className='btn-disabled'>
                  <IoIosArrowBack />
               </button>
            ) : (
               <button onClick={goBack}>
                  <IoIosArrowBack />
               </button>
            )}

            {/*Render btns*/}
            {buttons.map((btn) => {
               return btn;
            })}

            {pageNumber === 3 ? (
               <button disabled={true} className='btn-disabled'>
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

const Pagination = React.memo(PaginationMemo);
export default Pagination;
