import {
    LOADER,
    GET_ERRORS,
    REGISTER_FAIL,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    SHOW_LOGIN,
    SHOW_REGISTER,
    SET_TOKEN,
} from "../types";
import axios from "axios";

/**
 *  Description.   Get all groups of a given
 *  @fires      Dispatch to update store state
 */

const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const setToken = () => dispatch => {
    const token = window.localStorage.getItem("token");
    dispatch({ type: SET_TOKEN, payload: token });
};

export const loadUser = () => dispatch => {
    // User loading
    dispatch({ type: USER_LOADING });

    const token = window.localStorage.getItem("token");

    if (token) {
        config.headers["x-auth-token"] = token;
    }

    axios
        .get("/api/auth/me", config)
        .then(response => {
            dispatch({
                type: USER_LOADED,
                payload: response.data,
            });
        })
        .catch(err => {
            dispatch({ type: AUTH_ERROR });
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        });
};

export const loginUser = formData => dispatch => {
    dispatch({ type: USER_LOADING });

    axios
        .post("/api/auth/login", formData, config)
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data,
            });
            dispatch({ type: SHOW_LOGIN });
            dispatch({
                type: LOADER,
                payload: false,
            });
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

export const registerUser = formData => dispatch => {
    dispatch({ type: USER_LOADING });

    axios
        .post("/api/auth/register", formData, config)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data,
            });
            dispatch({
                type: LOADER,
                payload: false,
            });
            dispatch({ type: SHOW_REGISTER });
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            dispatch({
                type: REGISTER_FAIL,
            });
        });
};

export const logOut = () => dispatch => {
    window.localStorage.removeItem("token");
    dispatch({ type: LOGOUT_SUCCESS });
};
