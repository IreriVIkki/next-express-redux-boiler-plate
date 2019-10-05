import { connect } from "react-redux";
import { showLogin, showRegister } from "../../../actions/modal/modal";
import Link from "next/link";

const Navbar = props => {
    const { auth, showLogin, showRegister } = props;
    let nav = null;

    if (auth.isAuthenticated) {
        nav = (
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <span>nav item 1</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <span>nav item 1</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    } else {
        nav = (
            <nav>
                <button className="blue" onClick={showLogin}>
                    Login
                </button>
                <button onClick={showRegister}>Register</button>
            </nav>
        );
    }

    return (
        <div>
            <div>
                <Link href="/">
                    <h1>Logo</h1>
                </Link>
            </div>
            {nav}
            <div className="hamburger-menu">
                <div className="">___</div>
                <div className="">___</div>
                <div className="">___</div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ auth }) => {
    return { auth };
};

const mapDispatchToProps = { showLogin, showRegister };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navbar);
