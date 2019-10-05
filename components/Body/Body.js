import { Component } from "react";
import { connect } from "react-redux";
import { loadUser, setToken } from "../../actions/auth/auth";
import Modal from "../Modal/Modal";
import Alert from "../Interactions/Alert";
import Head from "next/head";

export class Body extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated === null) {
            this.props.loadUser();
        }
    }

    componentDidUpdate() {
        const { isAuthenticated, token } = this.props.auth;
        if (isAuthenticated && !token) {
            this.props.setToken();
        }
    }

    render() {
        let modal = null;

        if (this.props.showModal) {
            modal = <Modal />;
        }
        return (
            <div>
                <Head>
                    <title>Next Boiler Plate</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport"
                    />
                </Head>
                {modal}
                {this.props.children}
                <div>
                    <Alert />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ loader, error, auth, modal }) => {
    return { loader, error, auth, showModal: modal.showModal };
};

export default connect(
    mapStateToProps,
    { loadUser, setToken },
)(Body);
