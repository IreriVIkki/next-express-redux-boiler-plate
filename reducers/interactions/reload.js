import { RELOAD } from "../../actions/types";

const initialState = false;

export default (state = initialState, action) => {
    switch (action.type) {
        case RELOAD:
            return !state;

        default:
            return state;
    }
};
