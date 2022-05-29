import React from 'react';
import styles from './card.module.css'

export default function Card({ name, img, types }) {
    return (

        // <div className={styles.cardIns}>

        //     <div className={styles.photosCont}><img className={styles.pokePhotos} src={image} alt={`A ${name} poke`} /> </div>
        //     <h3 className={styles.cardName}>{name}</h3> 
        //     <h5 className={styles.cardType}>{type}</h5>
        //     <h5 className={style.cardAttack} >Weight: {attack === 'no info' ? `${attack}` :`${attack} Kg`}</h5>            

        // </div>

        <div className={styles.cardIns}>
            <div className={styles.photosCont}><img className={styles.pokePhotos} src={img} alt="img not found" /> </div>
            <h3 className={styles.cardName}>{name}</h3>

            {types.length > 1 ?
                <div>

                    <div className={styles.cardType}>
                        <div >
                            <h5 >{types[0]}</h5>
                        </div>

                        <div >
                            <h5 >{types[1]}</h5>
                            {/* {types.length > 1 ?
                            <img className={styles.logoTypes2} src={getLogoType(types[1][0])} alt="" />
                            : null
                        } */}
                        </div>

                    </div>


                </div>
                :
                <div >
                    <h5 className={styles.cardTypes}>{types[0]}</h5>
                </div>
            }
        </div>




    );
};