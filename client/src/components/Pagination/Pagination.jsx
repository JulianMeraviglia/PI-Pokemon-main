import React ,{useState} from "react";

import styles from "./pagination.module.css";

// export default function Paginado ({ numerosDePagina, handlePage }) {
//   return (
//     <div className={classes.pageNumbers}>
//       {numerosDePagina &&
//         numerosDePagina.map((numero) => (
//           <button key={numero} onClick={() => handlePage(numero)}>
//             {numero}
//           </button>
//         ))}
//     </div>
//   );
// }



function Pagination({ pokesPerPage, allPokes, pagination, currentPage, setCurrentPage }) {
    const pageNumbers = [];
    const [input, setInput] = useState(currentPage)
    const max = allPokes / pokesPerPage

    for (let i = 1; i <= Math.ceil(max); i++) {
        pageNumbers.push(i)
    }

    // function nextPage() {
    //     setCurrentPage(currentPage + 1);
    //     setInput(input - 1);
    // }

    // function prevPage() {
    //     setCurrentPage(currentPage - 1);
    //     setInput(input - 1 );
    // }

    return (
        <div className={styles.pageNumbers}>


            {pageNumbers && pageNumbers.map(number => (
                <button className={currentPage === number ? styles.activeNumber : styles.desactiveNumber} key={number} onClick={() => pagination(number)} >
                    {number}
                </button>
            ))}


        </div>
    )
}

export default Pagination