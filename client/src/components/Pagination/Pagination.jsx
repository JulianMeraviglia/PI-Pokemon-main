import React from "react";

import styles from "./pagination.module.css";




function Pagination({ pokesPerPage, allPokes, pagination, currentPage }) {
    const pageNumbers = [];

    const max = allPokes / pokesPerPage

    for (let i = 1; i <= Math.ceil(max); i++) {
        pageNumbers.push(i)
    }


    return (
        <div className={styles.pageNumbers}>


            {pageNumbers && pageNumbers.map(number => (
                <button className={currentPage === number ? styles.activeNumber : styles.desactiveNumber}
                    key={number} onClick={() => pagination(number)} >

                    {number}

                </button>
            ))}


        </div>
    )
}

export default Pagination