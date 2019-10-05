import { useEffect } from "react";
import { connect } from "react-redux";
import { clearError } from "../../actions/interactions/errors";
import { clearAlert } from "../../actions/interactions/alerts";

const Alert = props => {
    const { clearError, clearAlert, error, alert } = props;
    let notification = null;

    useEffect(() => {
        let timer = null;
        if (error.msg) {
            timer = setTimeout(() => {
                clearError();
            }, 5000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [clearError, error]);

    useEffect(() => {
        let timer = null;
        if (alert.msg) {
            timer = setTimeout(() => {
                clearAlert();
            }, 5000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [clearAlert, alert]);

    if (alert.msg) {
        notification = (
            <div className="alert bg-yellow pt-1 pb-1 pl-2 pr-2 shadow">
                <p>{alert.msg}</p>
                <p>{alert._id}</p>
                <p>{alert.status}</p>
            </div>
        );
    } else if (error.msg) {
        notification = (
            <div className="alert bg-red pt-1 pb-1 pl-2 pr-2">
                <p>{error.msg}</p>
                <p>{error._id}</p>
                <p>{error.status}</p>
            </div>
        );
    }

    return notification;
};

const mapStateToProps = ({ error, alert }) => {
    return { error, alert };
};

const mapDispatchToProps = { clearError, clearAlert };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Alert);
