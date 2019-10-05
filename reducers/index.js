import { combineReducers } from "redux";
import auth from "./auth";
import reload from "./interactions/reload";
import loader from "./interactions/loader";
import modal from "./modal/modal";
import error from "./interactions/error";
import alert from "./interactions/alert";

export default combineReducers({
    auth,
    reload,
    loader,
    modal,
    error,
    alert,
});
