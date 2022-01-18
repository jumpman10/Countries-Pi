import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import s from '../styles/stylesComponentes.module.css';
import ss from '../styles/stylesApp.module.css';
import Card from './Card';

function Paginado({countriesPerPage, allCountries, paginado}) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
       pageNumbers.push(i)
     }

     return(
          <nav>
            <ul>
            
                {pageNumbers && pageNumbers.map(number=>{
                     return(
                     <button className={s.paginaciondetail}>
                     <a onClick={(e) => {e.preventDefault(); paginado(number)} }>{number}</a>
                    </button>
                   )
                 })}
                 </ul>
            
         </nav>
     )

 }
// const countries = useSelector((state) => state.countries);
// const [currentPage, setCurrentPage] = useState(0);

// let nextPage = () => {
//   if (countries.length <= currentPage + 10) {
//     setCurrentPage(currentPage);
//   } else setCurrentPage(currentPage + 10);
// };
// let prevPage = () => {
//   if (currentPage < 9) {
//     setCurrentPage(0);
//   } else {
//     setCurrentPage(currentPage - 10);
//   }
// };

// const firstPage = () => {
//   setCurrentPage(0);
// };

// const lastPage = () => {
//   setCurrentPage(countries.length - 10);
//   console.log(currentPage);
// };

// useEffect(() => {
//   firstPage()
// }, [countries]);
// const filteredC = countries.slice(currentPage, currentPage + 10);
  
//     return (
//       <div>
       
//         <div className={ss.moveCard}>
//           {
//           filteredC.map((e) => ( 
//             <Card
//               flags={e.flag}
//               name={e.name}
//               region={e.region}
//               capital={e.capital}
//               subregion={e.subregion}
//               area={e.area}
//               population={e.population}
          
//             />))}
//         </div>
//         <button onClick={firstPage} >  {'<<'}  </button>
//         <button onClick={prevPage} >  {'<'}   </button>
//         <button onClick={nextPage} >  {'>'}   </button>
//         <button onClick={lastPage} >  {'>>'}</button>
//       </div>
//     );
//   }

export default Paginado