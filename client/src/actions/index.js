import axios from 'axios';
import { GET_POKES, GET_TYPES, GET_DETAIL, CLEAN_DETAIL, CLEAN_POKES, CHANGE_LOADING, GET_POKE_BY_NAME, ORDER_BY_ATTACK, FILTER_ORIGIN, ORDER_BY_NAME, FILTER_BY_TYPE } from './actionsTypes';




export function getPokes() {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/pokemons");
            return dispatch({
                type: GET_POKES,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}



export function getTypes() {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/types");
            return dispatch({
                type: GET_TYPES,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}




export function postPoke(payload) {
    return async function () {
        try {
            const response = await axios.post("http://localhost:3001/pokemons", payload);
            return response;

        } catch (error) {
            console.log(error);
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/pokemons/" + id);
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function cleanDetail() {
    return {
        type: CLEAN_DETAIL,
    };
}

export function changeLoading() {
    return {
        type: CHANGE_LOADING,
    };
}

export function getPokeByName(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/pokemons?name=" + name);
            return dispatch({
                type: GET_POKE_BY_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function orderByAttack(payload) {
    return {
        type: ORDER_BY_ATTACK,
        payload
    }
}

export function filterByOrigin(payload) {
    return {
        type: FILTER_ORIGIN,
        payload
    }
}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}



export function filterByType(payload) {
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}
export function cleanPokes() {
    return {
        type: CLEAN_POKES
    }
}


