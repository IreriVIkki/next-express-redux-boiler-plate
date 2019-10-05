import {
    SHOW_LOGIN,
    SHOW_REGISTER,
    SHOW_RAISE_PROPOSAL,
    CLEAR_MODAL,
    SHOW_SIDE_DRAWER,
} from "../../actions/types";

const initialState = {
    showModal: false,
    showSideDrawer: false,
    showLogin: false,
    showRegister: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOGIN:
            return {
                ...initialState,
                showLogin: !state.showLogin,
                showModal: !state.showLogin,
            };

        case SHOW_REGISTER:
            return {
                ...initialState,
                showRegister: !state.showRegister,
                showModal: !state.showRegister,
            };

        case SHOW_SIDE_DRAWER:
            return {
                ...initialState,
                showSideDrawer: !state.showSideDrawer,
                showModal: !state.showSideDrawer,
            };

        case CLEAR_MODAL:
            return initialState;

        default:
            return state;
    }
};
