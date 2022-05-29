import React from 'react';
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getPokes, loadingPokes } from '../../actions';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card'
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';



import styles from './home.module.css'

export default function Home() {

    const allPokes = useSelector((state) => state.pokes);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();

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
    }, [dispatch])

    // useEffect(() => {
    //     return dispatch(loadingPokes())
    // //     dispatch(loading())

    //  }, [dispatch])




    return (

        <div>
            <nav className={styles.navContainer}>
                <Link to='/' >Poke Land</Link>
                <div>
                    < SearchBar />
                </div>

                <Link to='/create' >Crear Poke</Link>
            </nav>

            <section className={styles.filterContainer}>
                <button >Filter by </button>
                <select >
                    <option value=''>Type</option>
                    <option value='all'>All Types</option>
                    {/* {allPokemonsTypes?.map((t) => (
                        <option className={styles.optionsSelect} key={t.name} value={t.name}>{t.name}</option>
                    ))} */}
                </select>
                <select >
                    <option value=''>Origin</option>
                    <option value='all'>All</option>
                    <option value='api'>API</option>
                    <option value='created'>Created</option>
                </select>
                <select value='disabled'>
                    <option value=''>Name</option>
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>
                <select value='disabled'>
                    <option value=''>Attack</option>
                    <option value='more_attack'>+ Attack </option>
                    <option >- Attack </option>
                </select>

                <button >
                    Refresh All
                </button>

            </section>

            { allPokes.length >= 12 ? 
                    <Pagination pokesPerPage={pokesPerPage} allPokes={allPokes.length} pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                    : null
                    }




            {loading === true ?

                <Loader />
                :


                <div className={styles.cardsContainer}>
                    {allPokes.length ? currentPokes.map((poke) => {
                        return (
                            <div  key={poke.id}>
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