import { LOADER } from "../../actions/types";

const initialState = false;

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADER:
            return !state.loading;

        default:
            return state;
    }
};
