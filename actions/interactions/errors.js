import { CLEAR_ERRORS } from "../types";

export const clearError = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS });
};
