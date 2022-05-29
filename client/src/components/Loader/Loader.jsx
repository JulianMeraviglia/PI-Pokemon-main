import styles from './loader.module.css';

export default function Loader() {
    return (
        <div className={styles.body}>
            {/* <div className='overlay'></div> */}

            <div className= {styles.wrapper}>
                <div className={styles.ldsroller}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span>Cargando...</span>
            </div>
        </div>
    );
}