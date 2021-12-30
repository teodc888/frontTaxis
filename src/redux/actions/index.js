import axios from "axios";

import {
    GET_CHOFERES,
    GET_RD
} from "./actionsTyps";

export const createChoferes = payload => {
    return async () => {
        try {
            let res = await axios.post(`http://localhost:3001/choferes`, payload);
            return res;
        } catch (error) {
            console.log(error)
        }

    };
};

export const obtenerChoferes = () => {
    return async dispatch => {
        try {
            let res = await axios(`http://localhost:3001/choferes`);
            return dispatch({
                type: GET_CHOFERES,
                payload: res.data,
            });
        } catch (error) {
            console.log(error)
        }

    };
};

export const createRecaudaciones = payload => {
    return async () => {
        try {
            let res = await axios.post(`http://localhost:3001/recaudaciones`, payload);
            return res;
        } catch (error) {
            console.log(error)
        }

    };
};

export const mostrarRecaudaciones = () => {
    return async dispatch => {
        try {
            let res = await axios(`http://localhost:3001/recaudaciones`);
            return dispatch({
                type: GET_RD,
                payload: res.data,
            });
        } catch (error) {
            console.log(error)
        }

    };
};
