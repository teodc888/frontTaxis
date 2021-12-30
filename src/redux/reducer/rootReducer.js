import {GET_CHOFERES, GET_RD} from "../actions/actionsTyps";

const inicialState = {
    choferes: [],
    recaudaciones: [],
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
        default:
            return state;
    }
}