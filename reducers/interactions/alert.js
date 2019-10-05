import { GET_ALERT, CLEAR_ALERT } from "../../actions/types";

const initialState = {
    msg: "",
    status: null,
    _id: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALERT:
            return {
                ...state,
                msg: action.payload.msg,
                status: action.payload.status || null,
                _id: action.payload._id || null,
            };

        case CLEAR_ALERT:
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
