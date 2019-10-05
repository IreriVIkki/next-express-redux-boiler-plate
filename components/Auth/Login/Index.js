import { useState } from "react";
import { connect } from "react-redux";
import { showRegister } from "../../../actions/modal/modal";
import { loginUser } from "../../../actions/auth/auth";

const Index = props => {
    const { loginUser } = props;

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const submitLogin = () => {
        loginUser({ email: Email, password: Password });
    };

    return (
        <div className="login-content bg-white p-3 mt-3">
            <h2 className="h2">Login</h2>
            <div className="mb-3">
                <p>
                    Not a member yet?{" "}
                    <span
                        className="c-blue pointer"
                        onClick={props.showRegister}
                    >
                        join us now
                    </span>
                </p>
            </div>
            <div className="mb-3">
                <p className="b mb-1">Enter User Email</p>
                <input
                    className="input ml-2 border-left border-red pl-2"
                    type="email"
                    placeholder="email..."
                    value={Email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <p className="b mb-1">Enter password</p>
                <input
                    className="input ml-2 border-left border-red pl-2"
                    type="password"
                    placeholder="password..."
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button onClick={submitLogin} className="btn bg-red pointer">
                Login
            </button>
        </div>
    );
};

export default connect(
    null,
    { showRegister, loginUser },
)(Index);
