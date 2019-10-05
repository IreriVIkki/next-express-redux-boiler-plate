import Toolbar from "./Toolbar/ToolBar";
import Footer from "./Footer/Footer";

const Layout = props => {
    return (
        <div>
            <Toolbar />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
