import { GET_ERRORS, CLEAR_ERRORS } from "../../actions/types";

const initialState = {
    msg: "",
    status: null,
    _id: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                msg: action.payload.msg,
                status: action.payload.status,
                _id: action.payload._id,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                msg: "",
                status: null,
                _id: null,
            };

        default:
            return state;
    }
};
