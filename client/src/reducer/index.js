import { GET_POKES, LOADING, GET_TYPES, POST_POKE, GET_DETAIL, CLEAN_DETAIL } from "../actions/actionsTypes";



const initialstate = {
    pokes: [],
    allPokes: [],
    types: [],
    detail: [],
    loading: true
}


function rootReducer(state = initialstate, action) {
    switch (action.type) {
        case GET_POKES:
            return {
                ...state,
                pokes: action.payload,
                allPokes: action.payload,
                loading: false

            }


        case LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            }

        case POST_POKE:
            return {
                ...state,
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload,
                //loading: false
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                detail: []
            };




        default:
            return state;
    }
}

export default rootReducer;