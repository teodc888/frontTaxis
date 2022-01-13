import axios from "axios";

import {
    GET_CHOFERES,
    GET_RD,
    GET_CHOQUES
} from "./actionsTyps";

export const createChoferes = payload => {
    return async () => {
        try {
            let res = await axios.post(`https://app-taxis-2022.herokuapp.com/choferes`, payload);
            // let res = await axios.post(`http://localhost:3001/choferes`, payload);
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
            // let res = await axios(`http://localhost:3001/choferes`);
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
            // let res = await axios.post(`http://localhost:3001/recaudaciones`, payload);
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
            // let res = await axios(`http://localhost:3001/recaudaciones`);
            return dispatch({
                type: GET_RD,
                payload: res.data,
            });
        } catch (error) {
            console.log(error)
        }

    };
};


export const createChoque = payload => {
    return async () => {
        try {
            let res = await axios.post(`https://app-taxis-2022.herokuapp.com/choques`, payload);
            // let res = await axios.post(`http://localhost:3001/choques`, payload);
            return res;
        } catch (error) {
            console.log(error)
        }

    };
};

export const mostrarChoques = () => {
    return async dispatch => {
        try {
            let res = await axios(`https://app-taxis-2022.herokuapp.com/choques`);
            // let res = await axios(`http://localhost:3001/choques`);
            return dispatch({
                type: GET_CHOQUES,
                payload: res.data,
            });
        } catch (error) {
            console.log(error)
        }

    };
};