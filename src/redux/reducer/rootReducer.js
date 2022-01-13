import {GET_CHOFERES, GET_RD, GET_CHOQUES} from "../actions/actionsTyps";

const inicialState = {
    choferes: [],
    recaudaciones: [],
    choques: [],
};

export default function rootReducer (state = inicialState, action) {
    switch (action.type) {
        case GET_CHOFERES:
            return {
                ...state,
                choferes: action.payload,
            };
        case GET_RD:
            return {
                ...state,
                recaudaciones: action.payload,
            };
        case GET_CHOQUES:
            return {
                ...state,
                choques: action.payload,
            };
        default:
            return state;
    }
}