import { CustomLink } from "../../data/types";
import { useRouter } from 'next/router';
import React, { useState, useEffect ,FC } from 'react';
import Link  from "next/link";
import twFocusClass from "../../utils/twFocusClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft,faAngleDoubleRight} from "@fortawesome/fontawesome-free-solid"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface PaginationProps {
  className?: string;
  perPage:number;
  total:number;
}
const Right = faAngleDoubleRight as IconProp;
const Left = faAngleDoubleLeft as IconProp;
const Pagination: FC<PaginationProps> = ({ className = "" ,perPage,total}) => {
  console.log('pagination',perPage,total)
  const router = useRouter();
  const query = useRouter().query;
  const [ currentPage, setCurrentPage ] = useState( 1 );
  const [ lastPage, setLastPage ] = useState( 1 );
  const [ pageNumbers, setPageNumbers ] = useState<number[]>([])
  useEffect( () => {
    const page=query.page? Array.isArray(query.page) ? query.page[0] : query.page:""
    setCurrentPage( page ? parseInt( page ) : 1 );
}, [ query ] )

useEffect( () => {
    setLastPage( total / perPage  + ( total % perPage ? 1 : 0 ) );

}, [ total, perPage ] )

useEffect( () => {
    let tempArray:number[] = []; 
    let pageCount = Math.floor( total / perPage ) + ( 0 < total % perPage ? 1 : 0 );

    for ( let i = -1; i < 2 && pageCount >= 3; i++ ) {
        if ( 1 < currentPage && currentPage < pageCount )
            tempArray.push( currentPage + i );
        if ( 1 === currentPage )
            tempArray.push( currentPage + i + 1 );
        if ( currentPage === pageCount )
            tempArray.push( currentPage + i - 1 );
    }

    for ( let i = 0; i < pageCount && pageCount < 3; i++ ) {
        tempArray.push( i + 1 );
    }

    setPageNumbers( tempArray );
}, [ total, perPage, currentPage ] )
  const renderItem = (pag: CustomLink, index: number) => {
    if (index === 0) {
      // RETURN ACTIVE PAGINATION
      return (
        <div   style={{backgroundColor: '#061da'}}><span
          key={index}
        
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full  text-white ${twFocusClass()}`}
        >
          {pag.label}
        </span></div>
        
      );
    }
    // RETURN UNACTIVE PAGINATION
    return (
     
      <Link
        key={index}
        // className={`inline-flex w-11 h-11 items-center justify-center rounded-full   hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        href={pag.href}
      >
    <a href="" style={{backgroundColor: '#061da5'}} 
    className={`inline-flex w-11 h-11 items-center justify-center rounded-full   hover:bg-neutral-100 border-2 border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}>  {pag.label}</a>

       
      </Link>
    );
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
    >
     
            {currentPage > 1 ?
                    <Link  href={ {pathname: router.pathname, query: { ...query, page: currentPage - 1 } } } scroll={ false }>
                    
                      <a  style={{borderColor:'#000'}}
                      className="bg-neutral-50 border-2 border-neutral-900 dark:border-neutral-400 dark:bg-neutral-900 page-link page-link-prev  rounded-full">
                       
                        <FontAwesomeIcon icon={Left} size="lg" className=" dark:text-neutral-100 text-neutral-900"/>{" "}
                        </a>
                    </Link>
                    :null}
             

                {
                    pageNumbers.length ?
                        pageNumbers.map( ( page, index ) => (
                         
                                <Link
                                    href={ {pathname: router.pathname, query: { ...query, page: page } } }
                                    scroll={ false }
                                    style={{borderColor:'#000'}}
                                ><a style={{borderColor:'#000'}}  className={ `inline-flex w-11 h-11 font-bold items-center justify-center rounded-full border-2 border-neutral-900 dark:border-neutral-400 ${currentPage == page ? 'bg-pagination text-white ' : '  hover:bg-neutral-100  text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800  '}${twFocusClass()}` }>
                                  { page }</a>
                                  </Link>
                         
                        ) )
                        : ""
                }
                {currentPage == lastPage ?null:
                 <Link  href={ {pathname: router.pathname, query: { ...query, page: currentPage + 1 } } } scroll={ false }>
                 <a style={{borderColor:'#000'}} className="bg-neutral-50 border-2 border-neutral-900 dark:border-neutral-400  dark:bg-neutral-900 page-link page-link-next  rounded-full" >
               
                  <FontAwesomeIcon icon={Right} size="lg" className=" dark:text-neutral-100 text-neutral-900"  />{" "}
                
                  </a>
              </Link>}
             
                   
             
       
        </nav>
      // {DEMO_PAGINATION.map(renderItem)}
 
  );
};

export default Pagination;
