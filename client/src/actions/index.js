import axios from 'axios';
import { LOADING, GET_POKES, GET_TYPES, GET_DETAIL, CLEAN_DETAIL } from './actionsTypes';


export function loadingPokes() {
    return {
        type: LOADING,
    }
}

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

