import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokeByName, changeLoading } from '../../actions'
// import styles from './searchBar.module.css'

function SearchBar({pagination}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);

    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(changeLoading());
        dispatch(getPokeByName(name));
        pagination(1)
        setName('');
    }

  return (
    // <div className={styles.searchBarContainer}>
    //     <input className={styles.searchBarInput} value={name} type='text' placeholder='Nombre exacto...' onChange={(e) => handleInputChange(e)} />
    //     <button id="btnSearch" className={styles.searchBarButton} type='submit' onClick={(e) => handleSubmit(e)} disabled={name === "" ? true : false}>Buscar</button>
    // </div>


    <div >
        <input  type='text' value={name} placeholder='Nombre exacto...'  onChange={(e) => handleInputChange(e)} />
        <button type='submit' onClick={(e) => handleSubmit(e)} disabled={name === "" ? true : false} >Buscar</button>
    </div>




  )
}

export default SearchBar