import { GET_POKES, GET_TYPES, POST_POKE, GET_DETAIL, CLEAN_DETAIL, CHANGE_LOADING, GET_POKE_BY_NAME, ORDER_BY_ATTACK,  FILTER_ORIGIN, ORDER_BY_NAME, FILTER_BY_TYPE, CLEAN_POKES } from "../actions/actionsTypes";



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

        case CLEAN_POKES:
            return {
                ...state,
                pokes: []
            }

        case CHANGE_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_POKE_BY_NAME:
            return {
                ...state,
                pokes: action.payload,
                loading: false
            }

        case ORDER_BY_ATTACK:

            let pokesAttackBad = state.pokes.filter((p) => p.attack === null)
            let pokesAttackOK = state.pokes.filter((p) => p.attack !== null)

            let sorterArrAttack = action.payload === 'min_attack' ?
                pokesAttackOK.sort(function (s, t) {
                    let a = s.attack;
                    let b = t.attack;
                    if (a > b) return 1;
                    if (b > a) return -1;
                    return 0;
                }) :
                pokesAttackOK.sort(function (s, t) {
                    let a = s.attack;
                    let b = t.attack;
                    if (a > b) return -1;
                    if (b > a) return 1;
                    return 0;
                })

            return {
                ...state,
                pokes: sorterArrAttack.concat(pokesAttackBad)
            }


        case FILTER_ORIGIN:
            const allPokes = state.allPokes;
            const createdFilter = action.payload === 'created' ? allPokes.filter(el => el.fromDb) : null;
            const apiFilter = action.payload === 'api' ? allPokes.filter(el => !el.fromDb) : null;
            return {
                ...state,
                pokes: action.payload === 'all' ? allPokes : action.payload === 'created' ? createdFilter : action.payload === 'api' ? apiFilter : null
            }


        case ORDER_BY_NAME:
            // hago un map para crear una copia del objeto y asi disparar el renderizado por la store directamente
            //let pokesToOrder = state.pokes.map(p => p)
            let pokesToOrder = [...state.pokes]
            //let pokesToOrder =state.pokes


            let sorterArr = action.payload === 'asc' ?
                pokesToOrder.sort(function (s, t) {
                    let a = s.name.toLowerCase();
                    let b = t.name.toLowerCase();
                    if (a > b) return 1;
                    if (b > a) return -1;
                    return 0;
                }) :
                pokesToOrder.sort(function (s, t) {
                    let a = s.name.toLowerCase();
                    let b = t.name.toLowerCase();
                    if (a > b) return -1;
                    if (b > a) return 1;
                    return 0;
                })

            return {
                ...state,
                pokes: sorterArr
            }

        


        case FILTER_BY_TYPE:
            const typesFilter = action.payload === 'all' ? state.allPokes : state.allPokes.filter(p => p.types.find(t => t === action.payload));
            return {
                ...state,
                pokes: typesFilter
            }

       



        default:
            return state;
    }
}

export default rootReducer;