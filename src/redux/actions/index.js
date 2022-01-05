import axios from "axios";

import {
    GET_CHOFERES,
    GET_RD
} from "./actionsTyps";

export const createChoferes = payload => {
    return async () => {
        try {
            let res = await axios.post(`https://app-taxis-2022.herokuapp.com/choferes`, payload);
            return res;
        } catch (error) {
            console.log(error)
        }

    };
};

export const obtenerChoferes = () => {
    return async dispatch => {
        try {
            let res = await axios(`https://app-taxis-2022.herokuapp.com/choferes`);
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
            let res = await axios.post(`https://app-taxis-2022.herokuapp.com/recaudaciones`, payload);
            return res;
        } catch (error) {
            console.log(error)
        }

    };
};

export const mostrarRecaudaciones = () => {
    return async dispatch => {
        try {
            let res = await axios(`https://app-taxis-2022.herokuapp.com/recaudaciones`);
            return dispatch({
                type: GET_RD,
                payload: res.data,
            });
        } catch (error) {
            console.log(error)
        }

    };
};
