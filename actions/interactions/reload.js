import { RELOAD } from "./types";

export default () => dispatch => {
    dispatch({ type: RELOAD });
};
