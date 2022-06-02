import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createRecipe, getDiets } from '../../redux/actions';
// /* import validate from './validate'; */
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getPokes, getTypes, postPoke, changeLoading, cleanPokes, cleanDetail } from '../../actions';

import styles from './pokeCreate.module.css';
import { validate } from './validate';





export default function PokeCreate() {

    const dispatch = useDispatch();
    //const navigate = useNavigate();
    const history = useHistory();
    const types = useSelector((state) => state.types);
    const [errors, setErrors] = useState({});
    const allPokesCheck = useSelector((state) => state.allPokes);

    useEffect(() => {
        //dispatch(getPokes());
        dispatch(getTypes());
        dispatch(cleanPokes())
        //dispatch(cleanDetail());
    }, [dispatch]);

    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        img: '',
        types: []
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value

        })
        setErrors(validate(allPokesCheck, {
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSelect(e) {
        setErrors(validate(allPokesCheck, {
            ...input,
            types: [...input.types, e.target.value]
        }));
        if (e.target.value === input.types[0] && input.types.length < 2) {
            alert("You can't select the same type 2 times")
        }
        else if (input.types.length < 2) {
            setInput({
                ...input,
                types: [...input.types, e.target.value]
            })
        } else {
            alert("Max 2 types")
        }
    }

    function handleDelete(el) {
        setErrors(validate(allPokesCheck, {
            ...input,
            types: input.types.filter((e) => e !== el)
        }));
        setInput({
            ...input,
            types: input.types.filter(type => type !== el),
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postPoke(input))
        alert('Pokemon created successfully.')
        setInput({
            name: '',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            img: '',
            types: []
        })
        
        
        history.push('/home');
        
        dispatch(changeLoading());

    }
    function handleClick() {
        dispatch(cleanPokes())
        dispatch(cleanDetail());
        dispatch(changeLoading());
    }



    return (
        <div className={styles.pokemonCreatePage} >

            <nav className={styles.exitSearchAndCreateNav}>
                <div >
                    <Link to="/home"><h1 onClick={() => handleClick()} className={styles.back}>Home</h1></Link>
                </div>
            </nav>

            <div className={styles.pokemonCreateContainer}>
                <div className={styles.pokemonCreate}>
                    <h1>Crea tu Poke</h1>
                    <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)} autoComplete="off">
                        <div className={styles.inputContainer}>
                            <label>Nombre*: </label>
                            <input type='text' value={input.name} name='name' placeholder='Nombre' onChange={handleChange} className={styles.inputName} />
                            <span>{errors.name}</span>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Hp: </label>
                            <input type='number' value={input.hp} name='hp' placeholder='Hp' max="250" min="0" onChange={handleChange} />
                            <span>{errors.hp}</span>
                            {/* onFocus={handleChange} */}

                        </div>
                        <div className={styles.inputContainer}>
                            <label>Ataque: </label>
                            <input type='number' value={input.attack} name='attack' placeholder='Ataque' max="250" min="0" onChange={handleChange} />
                            <span>{errors.attack}</span>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Defensa: </label>
                            <input type='number' value={input.defense} name='defense' placeholder='Defensa' max="250" min="0" onChange={handleChange} />
                            <span>{errors.defense}</span>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Velocidad: </label>
                            <input type='number' value={input.speed} name='speed' placeholder='Velocidad' max="250" min="0" onChange={handleChange} />
                            <span>{errors.speed}</span>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Altura cm: </label>
                            <input type='number' value={input.height} name='height' placeholder='Altura' max="25" min="0" onChange={handleChange} />
                            <span>{errors.height}</span>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Peso Kg: </label>
                            <input type='number' value={input.weight} name='weight' placeholder='Peso' max="1000" min="0" onChange={handleChange} />
                            <span>{errors.weight}</span>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Imagen: </label>
                            <input type='text' value={input.img} name='img' placeholder='URL' onChange={handleChange} />
                            <span>{errors.img}</span>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Tipo: </label>
                            <select onChange={(e) => handleSelect(e)} className={styles.selectTypes} value='disabled'>
                                <option value=''>Seleccionar</option>
                                {types.map((t) => (<option key={t} value={t} className={styles.optionsSelect}>{t}</option>))}
                            </select>
                            <span>{errors.types}</span>

                            <div className={styles.typeSelectedContainer}>
                                {input.types.map(el =>
                                    <div key={el}>
                                        <div className={styles.typeSelectedContainerIn}>
                                            <p className={styles.typeSelected}>{el}</p>
                                            <button key={el} className={styles.xButton} onClick={() => handleDelete(el)}>x</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className={styles.createButton} type='submit'

                            // disabled={errors.name || errors.hp || errors.attack
                            //     || errors.defense || errors.speed || errors.height
                            //     || errors.weight || errors.img || errors.types
                            //     || input.name === '' ?
                            //     true
                            //     : false} 

                            disabled={errors.button || input.name === ''}
                        >
                            Crear
                        </button>




                    </form>
                </div>
            </div>
        </div>

    )
}