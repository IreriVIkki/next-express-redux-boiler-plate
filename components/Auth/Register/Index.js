import { useState } from "react";
import { connect } from "react-redux";
import { showLogin } from "../../../actions/modal/modal";
import { registerUser } from "../../../actions/auth/auth";

const Index = props => {
    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const submitRegistration = () => {
        props.registerUser({
            userName: UserName,
            email: Email,
            password: Password,
        });
    };

    return (
        <div className="register">
            <div className="m-auto w-75 p-3 bg-white d-flex flex-column">
                <h2 className="h2 mb-2">Register</h2>
                <div className="mb-3">
                    <p>
                        Already have an account?{" "}
                        <span
                            className="c-blue pointer"
                            onClick={props.showLogin}
                        >
                            login
                        </span>
                    </p>
                </div>
                <div className="mb-3 d-flex flex-column">
                    <p className="b mb-1">Enter User Name</p>
                    <input
                        className="input ml-2 border-left border-red pl-2"
                        type="text"
                        placeholder="username..."
                        value={UserName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>

                <div className="mb-3 d-flex flex-column">
                    <p className="b mb-1">Enter Email</p>
                    <input
                        className="input ml-2 border-left border-red pl-2"
                        type="email"
                        placeholder="email..."
                        value={Email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3 d-flex flex-column">
                    <p className="b mb-1">Enter Password</p>
                    <input
                        className="input ml-2 border-left border-red pl-2"
                        type="password"
                        placeholder="password..."
                        value={Password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-3 d-flex flex-column">
                    <p className="b mb-1">Confirm Password</p>
                    <input
                        className="input ml-2 border-left border-red pl-2"
                        type="password"
                        placeholder="confirm password..."
                        value={ConfirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={submitRegistration}
                    className="btn bg-red pointer"
                >
                    Join Now
                </button>
            </div>
        </div>
    );
};

export default connect(
    null,
    { showLogin, registerUser },
)(Index);
