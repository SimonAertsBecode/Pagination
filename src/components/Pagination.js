import React from 'react';

//* React icon
import { GiBeerStein } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const Pagination = () => {
   return (
      <section className='pagination'>
         <section className='buttons'>
            <button>
               <IoIosArrowBack />
            </button>
            <button>
               <GiBeerStein />
            </button>
            <button>
               <GiBeerStein />
            </button>
            <button>
               <GiBeerStein />
            </button>
            <button>
               <IoIosArrowForward />
            </button>
         </section>
      </section>
   );
};

export default Pagination;
