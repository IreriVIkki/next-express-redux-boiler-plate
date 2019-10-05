import React from "react";
import Backdrop from "./Backdrop";
import { connect } from "react-redux";
import { clearModal } from "../../actions/modal/modal";
import Register from "../Auth/Register/Index";
import Login from "../Auth/Login/Index";

const Modal = props => {
    const { modal, clearModal } = props;

    let content = null;

    if (modal.showRegister) {
        content = <Register />;
    } else if (modal.showLogin) {
        content = <Login />;
    }

    return (
        <div className="">
            <Backdrop toggleModal={clearModal} />
            <div className="">{content}</div>
        </div>
    );
};

const mapStateToProps = ({ modal }) => {
    return { modal };
};

const mapDispatchToProps = { clearModal };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Modal);
