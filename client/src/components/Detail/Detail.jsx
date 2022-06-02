import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDetail, cleanDetail, cleanPokes, changeLoading } from "../../actions";
import Loader from "../Loader/Loader";
import NavBar from "../NavBar/NavBar";
import styles from './detail.module.css';

export default function Detail(props) {
    const pokeDetail = useSelector(state => state.detail);
    //const loading = useSelector((state) => state.loading);

    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id]);

    // useEffect(() => {
    //     return dispatch(loadingAgain())
    // }, [dispatch]);

    // function handleDogDelete() {
    //     dispatch(deleteDog(dogId))
    // };

    function handleClick() {
        dispatch(cleanPokes())
        dispatch(cleanDetail());
        dispatch(changeLoading());
    }


    return (

        <div className={styles.back}>
            {/* <nav >
                <div >
                    <Link to="/home"><h1 onClick={() => handleClick()}>Home</h1></Link>
                </div>
            </nav> */}
            {pokeDetail.length === 0 ?
                null :
                <div  >
                    <Link className={styles.home} to="/home" onClick={() => handleClick()} >Home</Link>
                </div>
            }


            <div>
                {pokeDetail.length === 0 ?

                    <Loader />

                    :
                    <div>
                        {typeof pokeDetail[0] === 'object' ?
                            <div    >
                                <div className={styles.detailBig}>
                                    <div className={styles.imgDtBox}><img className={styles.detailImg} src={pokeDetail[0].img} alt='Sin Imagen' /></div>
                                    <div className={styles.infoBox}>
                                        <div className={styles.smallIfBox}>
                                            <h2 className={styles.nameDetail}>{pokeDetail[0].name}</h2>
                                            <div className={styles.infoDetails}><span className={styles.infoInfo}><b className={styles.infotitle}>ID: </b>{pokeDetail[0].id}</span></div>
                                            <div className={styles.infoDetails}><span className={styles.infoInfo}><b className={styles.infotitle}>Hp: </b>{pokeDetail[0].hp}</span></div>
                                            <div className={styles.infoDetails}><span className={styles.infoInfo}><b className={styles.infotitle}>Ataque: </b>{pokeDetail[0].attack}</span></div>
                                            <div className={styles.infoDetails}><span className={styles.infoInfo}><b className={styles.infotitle}>Defensa: </b>{pokeDetail[0].defense}</span></div>
                                            <div className={styles.infoDetails}><span className={styles.infoInfo}><b className={styles.infotitle}>Velocidad: </b>{pokeDetail[0].speed}</span></div>
                                            <div className={styles.infoDetails}><span className={styles.infoInfo}><b className={styles.infotitle}>Altura: </b>
                                                {pokeDetail[0].height ? `${pokeDetail[0].height} Cm` : null}
                                            </span></div>

                                            <div className={styles.infoDetails}><span className={styles.infoInfo}><b className={styles.infotitle}>Peso: </b>
                                                {pokeDetail[0].weight ? `${pokeDetail[0].weight} Kg` :
                                                    null}  </span></div>

                                            <div className={styles.infoDetails}><span className={styles.infoInfo}><b className={styles.infotitle}>Tipos: </b>
                                                {pokeDetail[0].types.length === 1 ? pokeDetail[0].types[0] : pokeDetail[0].types.join(', ')}</span></div>


                                        </div>


                                    </div>
                                </div>
                            </div>
                            :
                            <div className={styles.notfound}>
                                <div>No se encontro el detalle del Poke</div>

                            </div>

                        }
                    </div>
                }
            </div>


        </div>
    )
}