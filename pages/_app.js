import App from "next/app";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Body from "../components/Body/Body";

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Provider store={reduxStore}>
                <Body>
                    <Component {...pageProps} />
                </Body>
            </Provider>
        );
    }
}

export default withReduxStore(MyApp);
