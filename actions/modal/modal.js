import {
    SHOW_LOGIN,
    SHOW_REGISTER,
    CLEAR_MODAL,
    SHOW_SIDE_DRAWER,
} from "../types";

export const showLogin = () => dispatch => {
    dispatch({ type: SHOW_LOGIN });
};

export const showRegister = () => dispatch => {
    dispatch({ type: SHOW_REGISTER });
};

export const showNav = () => dispatch => {
    dispatch({ type: SHOW_SIDE_DRAWER });
};

export const clearModal = () => dispatch => {
    dispatch({ type: CLEAR_MODAL });
};
