import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getPokes, orderByAttack, filterByOrigin, orderByName, getTypes, filterByType, changeLoading, cleanPokes } from '../../actions';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card'
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';



import styles from './home.module.css'

export default function Home() {

    const allPokes = useSelector((state) => state.pokes);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();

    const pokesTypes = useSelector((state) => state.types);

    const [currentPage, setCurrentPage] = useState(1);
    const pokesPerPage = 12;
    const indexOfLastPoke = currentPage * pokesPerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
    const currentPokes = allPokes.slice(indexOfFirstPoke, indexOfLastPoke);


    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getPokes());
        dispatch(getTypes());
    }, [dispatch])



    function handleUpdate(e) {
        e.preventDefault();
        dispatch(cleanPokes());
        dispatch(changeLoading())
        dispatch(getPokes());
        setCurrentPage(1);
    }

    function handleAttack(e) {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        //setOrder(e.target.value);
    }

    function handleFilterByOrigin(e) {
        e.preventDefault();
        dispatch(filterByOrigin(e.target.value))
        setCurrentPage(1);
    }

    function handleOrderByName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        //setOrder(e.target.value);
    }

    function handleFilterTypes(e) {
        e.preventDefault();
        dispatch(filterByType(e.target.value));
        setCurrentPage(1);
    }





    return (

        <div className={styles.back}>

            {loading === false ?
                <div>

                    <nav className={styles.navContainer}>
                        <Link className={styles.exit} to='/' >Poke Land</Link>
                        <div>
                            < SearchBar pagination={pagination} />
                        </div>

                        <Link className={styles.create} to='/create' >Crear Poke</Link>
                    </nav>

                    <section className={styles.filterContainer}>
                        <h5 className={styles.ban} >Filtros </h5>
                        <select className={styles.contentSelect} onChange={e => handleFilterTypes(e)} value='disabled'>
                            <option value=''>Tipo</option>
                            <option value='all'>Todos</option>
                            {pokesTypes?.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                        <select className={styles.contentSelect} onChange={e => handleFilterByOrigin(e)} value='disabled'>
                            <option value=''>Origen</option>
                            <option value='all'>Todos</option>
                            <option value='api'>API</option>
                            <option value='created'>Creados</option>
                        </select>
                        <select className={styles.contentSelect} onChange={e => handleOrderByName(e)} value='disabled' >
                            <option value=''>Nombre</option>
                            <option value='asc'>A - Z</option>
                            <option value='desc'>Z - A</option>
                        </select>
                        <select className={styles.contentSelect} onChange={e => handleAttack(e)} value='disabled'>
                            <option value=''>Ataque</option>
                            <option value='max_attack'>+ Attack </option>
                            <option value='min_attack' >- Attack </option>
                        </select>

                        <button className={styles.ban2} onClick={e => { handleUpdate(e) }} >
                            <div>Todos los Pokes</div>
                        </button>

                    </section>
                </div>
                :
                null}

            {allPokes.length >= 12 ?
                <Pagination pokesPerPage={pokesPerPage} allPokes={allPokes.length} pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                : null
            }




            {loading === true ?

                <Loader />
                :


                <div className={styles.cardsContainer}>
                    {allPokes.length ? currentPokes.map((poke) => {
                        return (
                            <div key={poke.id}>
                                <NavLink to={`/home/${poke.id}`}>
                                    <Card name={poke.name} img={poke.img} types={poke.types} />
                                </NavLink>
                            </div>
                        )
                    }) :
                        <div>
                            <div>Pokes not found</div>

                        </div>




                    }


                </div>



            }

        </div>
    )






}