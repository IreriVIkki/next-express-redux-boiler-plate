import { CLEAR_ALERT, GET_ALERT } from "../types";

export const clearAlert = () => dispatch => {
    dispatch({ type: CLEAR_ALERT });
};

export const raiseAlert = message => dispatch => {
    dispatch({ type: GET_ALERT, payload: { msg: message } });
};
